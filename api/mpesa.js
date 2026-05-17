import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

// Helper functions
function formatPhoneNumber(phone) {
    let cleaned = phone.toString().replace(/\D/g, '');
    if (cleaned.startsWith('0')) {
        cleaned = '254' + cleaned.slice(1);
    }
    if (!cleaned.startsWith('254')) {
        cleaned = '254' + cleaned;
    }
    return cleaned;
}

function generatePassword(shortcode, passkey, timestamp) {
    const str = shortcode + passkey + timestamp;
    return Buffer.from(str).toString('base64');
}

function getTimestamp() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { phoneNumber, amount, courseId, userId } = req.body;
    
    // Validation
    if (!phoneNumber || !amount || !courseId || !userId) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const phoneRegex = /^(254|0)[7-9][0-9]{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
        return res.status(400).json({ error: 'Invalid phone number format' });
    }
    
    try {
        // Get course details
        const { data: course, error: courseError } = await supabase
            .from('courses')
            .select('price, title')
            .eq('id', courseId)
            .single();
        
        if (courseError || !course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        
        // Create payment record
        const { data: payment, error: paymentError } = await supabase
            .from('payments')
            .insert({
                user_id: userId,
                course_id: courseId,
                amount: amount || course.price,
                status: 'pending',
                created_at: new Date().toISOString()
            })
            .select()
            .single();
        
        if (paymentError) {
            return res.status(500).json({ error: 'Failed to create payment record' });
        }
        
        const formattedPhone = formatPhoneNumber(phoneNumber);
        
        // Check if production with real M-Pesa credentials
        const consumerKey = process.env.MPESA_CONSUMER_KEY;
        const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
        const isProduction = consumerKey && consumerSecret && process.env.NODE_ENV === 'production';
        
        if (!isProduction) {
            // MOCK MODE - Simulate successful payment
            setTimeout(async () => {
                await supabase
                    .from('payments')
                    .update({ 
                        status: 'completed',
                        mpesa_receipt: 'MOCK' + Date.now(),
                        completed_at: new Date().toISOString()
                    })
                    .eq('id', payment.id);
                
                await supabase
                    .from('enrollments')
                    .insert({
                        user_id: userId,
                        course_id: courseId,
                        progress: 0,
                        status: 'active',
                        enrolled_at: new Date().toISOString()
                    });
            }, 3000);
            
            return res.status(200).json({
                success: true,
                mock: true,
                message: 'MOCK MODE: STK Push sent',
                paymentId: payment.id,
                checkoutRequestId: 'MOCK_' + Date.now()
            });
        }
        
        // PRODUCTION M-Pesa API Call
        const shortcode = process.env.MPESA_SHORTCODE || '174379';
        const passkey = process.env.MPESA_PASSKEY;
        const timestamp = getTimestamp();
        const password = generatePassword(shortcode, passkey, timestamp);
        
        // Get access token
        const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
        const tokenRes = await fetch('https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
            method: 'GET',
            headers: { Authorization: `Basic ${auth}` }
        });
        
        const tokenData = await tokenRes.json();
        const accessToken = tokenData.access_token;
        
        if (!accessToken) {
            throw new Error('Failed to get M-Pesa access token');
        }
        
        // STK Push request
        const stkRes = await fetch('https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                BusinessShortCode: shortcode,
                Password: password,
                Timestamp: timestamp,
                TransactionType: 'CustomerPayBillOnline',
                Amount: Math.round(amount || course.price),
                PartyA: formattedPhone,
                PartyB: shortcode,
                PhoneNumber: formattedPhone,
                CallBackURL: `${process.env.APP_URL || 'https://meidriveafrica.onrender.com'}/api/mpesa/callback`,
                AccountReference: `COURSE-${courseId}`,
                TransactionDesc: `Payment for ${course.title}`
            })
        });
        
        const stkData = await stkRes.json();
        
        if (stkData.ResponseCode === '0') {
            return res.status(200).json({
                success: true,
                message: 'STK Push sent successfully',
                paymentId: payment.id,
                checkoutRequestId: stkData.CheckoutRequestID
            });
        } else {
            throw new Error(stkData.ResponseDescription || 'STK Push failed');
        }
        
    } catch (error) {
        console.error('M-Pesa error:', error);
        return res.status(500).json({ error: error.message });
    }
}
