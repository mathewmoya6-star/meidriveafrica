// src/auth.js
import { supabase } from './supabase.js';

// Auth state listener
export let currentUser = null;
export let authListeners = [];

export function onAuthChange(callback) {
    authListeners.push(callback);
    return () => {
        const index = authListeners.indexOf(callback);
        if (index > -1) authListeners.splice(index, 1);
    };
}

function notifyAuthChange() {
    authListeners.forEach(callback => callback(currentUser));
}

// Password validation
export function validatePassword(password) {
    const errors = [];
    if (password.length < 8) errors.push('At least 8 characters');
    if (!/[A-Z]/.test(password)) errors.push('One uppercase letter');
    if (!/[a-z]/.test(password)) errors.push('One lowercase letter');
    if (!/[0-9]/.test(password)) errors.push('One number');
    return { valid: errors.length === 0, errors };
}

// Email validation
export function validateEmail(email) {
    const re = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    return re.test(email);
}

// Register
export async function register(email, password, fullName) {
    const emailValid = validateEmail(email);
    if (!emailValid) return { success: false, error: 'Invalid email format' };
    
    const passwordValid = validatePassword(password);
    if (!passwordValid.valid) {
        return { success: false, error: `Password must have: ${passwordValid.errors.join(', ')}` };
    }
    
    if (!fullName || fullName.trim().length < 2) {
        return { success: false, error: 'Full name is required' };
    }
    
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } }
    });
    
    if (error) return { success: false, error: error.message };
    
    if (data.user) {
        await supabase.from('profiles').insert({
            id: data.user.id,
            email,
            full_name: fullName,
            role: 'learner'
        });
    }
    
    return { success: true, message: 'Check your email to confirm account' };
}

// Login
export async function login(email, password) {
    if (!validateEmail(email)) {
        return { success: false, error: 'Invalid email format' };
    }
    
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { success: false, error: error.message };
    
    await loadCurrentUser();
    return { success: true, user: currentUser };
}

// Logout
export async function logout() {
    await supabase.auth.signOut();
    currentUser = null;
    notifyAuthChange();
}

// Load current user with profile
export async function loadCurrentUser() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        currentUser = null;
        notifyAuthChange();
        return null;
    }
    
    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
    
    currentUser = {
        id: session.user.id,
        email: session.user.email,
        ...profile
    };
    
    notifyAuthChange();
    return currentUser;
}

// Check if user has access to premium course
export async function hasCourseAccess(courseId) {
    if (!currentUser) return false;
    
    const { data: course } = await supabase
        .from('courses')
        .select('type')
        .eq('id', courseId)
        .single();
    
    if (course?.type === 'free') return true;
    
    const { data: enrollment } = await supabase
        .from('enrollments')
        .select('id')
        .eq('user_id', currentUser.id)
        .eq('course_id', courseId)
        .single();
    
    return !!enrollment;
}

// Initialize auth listener
supabase.auth.onAuthStateChange(() => {
    loadCurrentUser();
});

loadCurrentUser();
