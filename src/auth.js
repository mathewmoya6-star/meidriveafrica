import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jeksrwrzzrczamxijvwl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impla3Nyd3J6enJjemFteGlqdndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NzYyMjAsImV4cCI6MjA5NDI1MjIyMH0.1poYpJKNFEVe2NTBkXBTH2bIHGk2yT8aqCU-OlJc4vs';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signUp(email, password, fullName) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } }
    });
    
    if (error) throw error;
    
    if (data.user) {
        await supabase.from('profiles').insert({
            id: data.user.id,
            email,
            full_name: fullName,
            role: 'learner'
        });
    }
    
    return data;
}

export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

export async function getCurrentUser() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return null;
    
    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
    
    return {
        id: session.user.id,
        email: session.user.email,
        ...profile
    };
}

export async function isAdmin() {
    const user = await getCurrentUser();
    return user?.role === 'admin';
}

export default supabase;
