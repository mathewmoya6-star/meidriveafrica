import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    
    if (!email || !password) {
      setError('Please enter email and password')
      return
    }
    
    setLoading(true)
    setError('')
    
    try {
      console.log('Attempting login:', email)
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      
      if (error) {
        console.error('Login error:', error)
        setError(error.message)
        setLoading(false)
        return
      }
      
      if (data.user) {
        console.log('Login successful:', data.user)
        // Redirect to home page
        navigate('/')
      } else {
        setError('Login failed. Please try again.')
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A234F] to-[#041B3D] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[#041B3D] p-8 rounded-2xl border border-[#00FF88] shadow-xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-[#00FF88]">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Sign in to your account
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-600 bg-[#0A234F] text-white placeholder-gray-400 focus:outline-none focus:ring-[#00FF88] focus:border-[#00FF88] focus:z-10 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-600 bg-[#0A234F] text-white placeholder-gray-400 focus:outline-none focus:ring-[#00FF88] focus:border-[#00FF88] focus:z-10 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-500/20 p-4 border border-red-500">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#041B3D] bg-[#00FF88] hover:bg-[#00DD77] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FF88] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
        
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-[#00FF88] hover:text-[#00DD77]">
              Create one here
            </Link>
          </p>
        </div>
        
        <div className="text-center text-xs text-gray-500">
          <p>NTSA Certified Instructor: ILR-7WA1P62</p>
        </div>
      </div>
    </div>
  )
}

export default Login
