import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Register() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear errors when user types
    setError('')
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.password) {
      setError('Please fill in all required fields')
      return
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    setLoading(true)
    setError('')
    setSuccess('')
    
    try {
      console.log('Attempting to register:', formData.email)
      
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            phone: formData.phone || null
          }
        }
      })
      
      if (error) {
        console.error('Registration error:', error)
        setError(error.message)
        setLoading(false)
        return
      }
      
      if (data.user) {
        console.log('Registration successful:', data.user)
        setSuccess('Account created successfully! Redirecting to login...')
        
        // Clear form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        })
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      } else {
        setError('Registration failed. Please try again.')
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
            Create Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Join MEI DRIVE AFRICA today
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-600 bg-[#0A234F] text-white placeholder-gray-400 focus:outline-none focus:ring-[#00FF88] focus:border-[#00FF88] focus:z-10 sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-600 bg-[#0A234F] text-white placeholder-gray-400 focus:outline-none focus:ring-[#00FF88] focus:border-[#00FF88] focus:z-10 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-600 bg-[#0A234F] text-white placeholder-gray-400 focus:outline-none focus:ring-[#00FF88] focus:border-[#00FF88] focus:z-10 sm:text-sm"
                placeholder="0712345678"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-600 bg-[#0A234F] text-white placeholder-gray-400 focus:outline-none focus:ring-[#00FF88] focus:border-[#00FF88] focus:z-10 sm:text-sm"
                placeholder="Minimum 6 characters"
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                Confirm Password *
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-600 bg-[#0A234F] text-white placeholder-gray-400 focus:outline-none focus:ring-[#00FF88] focus:border-[#00FF88] focus:z-10 sm:text-sm"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-500/20 p-4 border border-red-500">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}
          
          {success && (
            <div className="rounded-md bg-green-500/20 p-4 border border-green-500">
              <p className="text-sm text-green-400">{success}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#041B3D] bg-[#00FF88] hover:bg-[#00DD77] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FF88] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </div>
        </form>
        
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-[#00FF88] hover:text-[#00DD77]">
              Sign in here
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

export default Register
