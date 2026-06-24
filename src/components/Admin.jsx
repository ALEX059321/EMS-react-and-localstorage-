import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {







  
  return (
    <div className="w-full max-w-md p-6 bg-neutral-secondary-soft border border-border-default rounded-lg shadow-xl backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:shadow-brand/10 hover:border-brand/30">
     
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand to-fg-brand" />
      
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-text-heading tracking-tight">Admin </h2>
      </div>

      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter ur email"
            className="w-full px-4 py-2.5 bg-neutral-primary border border-border-default rounded-md text-text-heading placeholder-text-body/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-text-heading mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2.5 bg-neutral-primary border border-border-default rounded-md text-text-heading placeholder-text-body/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all duration-200"
            required
          />
        </div>


        <button
          type="submit"
          className="w-full py-3 px-4 bg-brand hover:bg-brand/90 text-white font-medium rounded-md shadow-lg shadow-brand/20 hover:shadow-brand/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand/50"
        >
          Sign In
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-text-body">
          New user?{' '}
          <Link
            to="/register"
            className="font-semibold text-fg-brand hover:text-brand hover:underline transition-colors duration-200"
          >
            click here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Admin
