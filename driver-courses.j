import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jeksrwrzzrczamxijvwl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impla3Nyd3J6enJjemFteGlqdndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NzYyMjAsImV4cCI6MjA5NDI1MjIyMH0.1poYpJKNFEVe2NTBkXBTH2bIHGk2yT8aqCU-OlJc4vs';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const courses = [
    {
        id: 1,
        title: '🚗 Learner Hub',
        category: 'learner',
        description: 'Complete NTSA-approved driver training course for new drivers. Covers all 21 units from introduction to advanced driving techniques.',
        content: `The Learner Hub is a comprehensive driver training program covering:
        
📚 21 Complete Units:
• Unit 1-3: Introduction to Driving, Fundamental Rules, Model Town
• Unit 4-6: Human Factors, Vehicle Controls, Self-Inspection
• Unit 7-9: Observation, Vehicle Control, Communication
• Unit 10-12: Speed Management, Space Management, Emergency Manoeuvres
• Unit 13-15: Skid Control, Adverse Conditions, Preventive Maintenance
• Unit 16-18: Conditions of Carriage, Hazardous Materials, Emergency Procedures
• Unit 19-21: Work Planning, Customer Care, Exam Preparation

🎯 What You'll Learn:
• Kenyan traffic laws and Highway Code
• Model town navigation (one-way, two-way, roundabouts)
• Vehicle controls and self-inspection
• MSM communication technique
• Speed and space management
• Emergency manoeuvres and skid recovery
• Defensive driving techniques

✅ Includes:
• Certificate upon completion
• Practice quizzes
• Final examination preparation
• Lifetime access to materials`,
        type: 'premium',
        price: 5000,
        duration: '40 hours',
        level: 'Beginner to Advanced',
        modules: 21,
        exam_ready: true
    },
    {
        id: 2,
        title: '🚌 PSV (Public Service Vehicle)',
        category: 'psv',
        description: 'Specialized training for matatu, bus, and taxi drivers. Focuses on passenger safety, commercial driving regulations, and customer service.',
        content: `The PSV Course is designed specifically for public service vehicle operators:

📋 Course Modules:
• PSV Licensing requirements (NTSA)
• Passenger safety and rights
• Route planning and time management
• Defensive driving for commercial vehicles
• Customer service excellence
• Fare management and ticketing
• Vehicle inspection for PSV
• Emergency procedures with passengers
• Load management and luggage handling
• PSV code of conduct

🎯 Key Focus Areas:
• Traffic Act regulations for PSV
• Speed governors and compliance
• Rest hour management (max 8 hours driving)
• Accident reporting procedures
• Handling difficult passengers
• Lost property procedures

✅ Certification:
• NTSA PSV Certificate
• Defensive driving certification
• Customer service excellence badge`,
        type: 'premium',
        price: 7500,
        duration: '25 hours',
        level: 'Intermediate',
        modules: 12,
        exam_ready: true
    },
    {
        id: 3,
        title: '🚸 School Bus/Van Driver',
        category: 'school-bus',
        description: 'Specialized safety training for school transport drivers. Focuses on child safety, route management, and emergency protocols.',
        content: `The School Transport Safety Course covers:

📋 Core Modules:
• Child passenger safety protocols
• Loading and unloading procedures
• Student behaviour management
• Emergency evacuation drills
• First aid for children
• Route risk assessment
• Vehicle inspection for school transport
• Communication with schools and parents
• Anti-bullying on transport
• Special needs student transport

🎯 Safety Focus:
• No child left behind procedures
• Crossing guard protocols
• School zone speed management
• Stop arm compliance
• Student tracking systems
• Emergency contact procedures

✅ Certification:
• School Transport Safety Certificate
• Pediatric First Aid certified
• Defensive Driving certified
• Background check clearance`,
        type: 'premium',
        price: 6500,
        duration: '20 hours',
        level: 'Intermediate',
        modules: 10,
        exam_ready: true
    },
    {
        id: 4,
        title: '⚡ EV Vehicle Course',
        category: 'ev',
        description: 'Master electric vehicle driving, charging management, and EV-specific safety protocols for modern sustainable transport.',
        content: `The Electric Vehicle (EV) Course covers:

📋 EV-Specific Training:
• EV vehicle controls and dashboard
• Regenerative braking systems
• Battery management and range optimization
• Charging station types (Level 1,2,3)
• Public vs home charging
• EV maintenance (no oil changes, battery health)
• EV safety (high voltage systems)
• Silent operation awareness for pedestrians
• Range anxiety management
• Emergency procedures for EVs

🎯 Technical Knowledge:
• Battery degradation factors
• Charging time calculations
• Cost comparison (EV vs fuel)
• Eco-driving techniques
• Regenerative braking mastery
• Thermal management systems

✅ Certification:
• EV Driver Certification
• Eco-driving Specialist
• Charging Network Pro
• Green Transport Ambassador`,
        type: 'premium',
        price: 8000,
        duration: '15 hours',
        level: 'Beginner to Intermediate',
        modules: 8,
        exam_ready: true
    },
    {
        id: 5,
        title: '🛵 Boda Boda (Motorcycle)',
        category: 'boda-boda',
        description: 'Professional motorcycle taxi training covering safety, passenger transport, and defensive riding techniques.',
        content: `The Boda Boda Professional Course covers:

📋 Core Training:
• Motorcycle controls and balance
• Protective gear (helmet, jacket, gloves)
• Passenger safety protocols
• Luggage and cargo management
• Defensive riding techniques
• Night riding safety
• Wet weather riding
• Emergency braking and swerving
• Pillion passenger communication
• Route optimization for deliveries

🎯 Professional Skills:
• Pricing and fare negotiation
• Customer service for riders
• App-based dispatch systems
• First aid for accidents
• Breakdown procedures
• Insurance requirements
• NTSA motorcycle regulations

✅ Certification:
• Professional Boda Boda License
• Defensive Riding Certificate
• First Aid certified
• Customer Service Excellence`,
        type: 'premium',
        price: 5500,
        duration: '20 hours',
        level: 'Beginner',
        modules: 10,
        exam_ready: true
    },
    {
        id: 6,
        title: '📚 e-Safety Library',
        category: 'safety',
        description: 'Free comprehensive road safety resources, guides, and educational materials for all road users.',
        content: `The e-Safety Library provides FREE access to:

📖 Safety Resources:
• Road safety guides for pedestrians
• Cyclist safety handbook
• Child road safety education
• Elderly road user guidelines
• Defensive driving articles
• Weather-specific driving tips
• Emergency response guides
• First aid reference manual

📋 Interactive Content:
• Safety quizzes and assessments
• Infographics and posters
• Video tutorials
• Case studies of common accidents
• Legal reference (Traffic Act, Highway Code)
• Seasonal safety campaigns

✅ Free Features:
• Unlimited access to all resources
• Downloadable PDF guides
• Regular safety updates
• Community forum access
• Safety tips newsletter

🆓 COMPLETELY FREE - No payment required`,
        type: 'free',
        price: 0,
        duration: 'Self-paced',
        level: 'All levels',
        modules: 15,
        exam_ready: false
    },
    {
        id: 7,
        title: '📝 Quiz Bank (1000+ Questions)',
        category: 'quiz',
        description: 'Comprehensive exam preparation with 1000+ NTSA-style practice questions covering all driving categories.',
        content: `The Ultimate Quiz Bank features:

📊 Question Categories:
• Road signs (200+ questions)
• Traffic Act regulations (150+)
• Vehicle controls and maintenance (100+)
• Defensive driving scenarios (150+)
• Emergency procedures (100+)
• PSV specific (100+)
• Motorcycle specific (100+)
• EV specific (50+)
• Model town navigation (50+)
• First aid and safety (50+)

🎯 Quiz Features:
• Timed practice tests
• Category-specific quizzes
• Random question generator
• Progress tracking
• Weak area identification
• Detailed answer explanations
• Mock NTSA examinations

📈 Exam Simulation:
• Real NTSA exam format
• Time limits per section
• Pass/fail scoring
• Review incorrect answers
• Track improvement over time

✅ Includes:
• Mobile-friendly interface
• Offline mode available
• Progress sync across devices
• Certificate of completion
• Lifetime access to updates`,
        type: 'premium',
        price: 3000,
        duration: 'Self-paced',
        level: 'All levels',
        modules: 10,
        exam_ready: true,
        questions: '1000+'
    }
];

async function pushCourses() {
    console.log('📚 Pushing 7 driver courses to Supabase...\n');
    
    for (const course of courses) {
        try {
            const { error } = await supabase
                .from('courses')
                .upsert(course, { onConflict: 'id' });
            
            if (error) throw error;
            console.log(`✅ Course ${course.id}: ${course.title} (${course.type === 'free' ? 'FREE' : 'KES ' + course.price})`);
        } catch (error) {
            console.error(`❌ Course ${course.id}: ${error.message}`);
        }
    }
    
    console.log('\n🎉 Complete! 7 courses pushed to Supabase.');
    
    // Verify
    const { data } = await supabase
        .from('courses')
        .select('id, title, type, price')
        .order('id');
    
    if (data) {
        console.log('\n📊 Course Summary:');
        data.forEach(c => console.log(`   ${c.id}. ${c.title} - ${c.type === 'free' ? '🆓 FREE' : '💰 KES ' + c.price.toLocaleString()}`));
    }
}

pushCourses();
