import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: window.localStorage
  }
})

// Session cache to prevent race conditions
let sessionPromise = null

export const getSession = async () => {
  if (sessionPromise) return sessionPromise
  
  sessionPromise = supabase.auth.getSession()
    .finally(() => {
      setTimeout(() => { sessionPromise = null }, 100)
    })
  
  return sessionPromise
}

// Profile cache
let profileCache = new Map()

export const getProfile = async (userId) => {
  if (profileCache.has(userId)) {
    return profileCache.get(userId)
  }
  
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (!error && data) {
    profileCache.set(userId, data)
    setTimeout(() => profileCache.delete(userId), 60000) // Clear after 1 min
  }
  
  return { data, error }
}

// Clear cache on auth change
supabase.auth.onAuthStateChange(() => {
  profileCache.clear()
  sessionPromise = null
})
