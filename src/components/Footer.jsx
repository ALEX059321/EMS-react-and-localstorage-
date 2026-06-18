import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-primary border-t border-border-default w-full py-6 mt-12 z-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-text-body font-medium">
            © {new Date().getFullYear()} EMS. All rights reserved.
          </span>
        </div>
        <div className="flex space-x-6 text-sm text-text-body">
          <a href="#" className="hover:text-fg-brand transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-fg-brand transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-fg-brand transition-colors duration-200">Contact Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
