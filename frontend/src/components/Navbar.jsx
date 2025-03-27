import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo or Brand */}
        <div className="flex items-center">
          <img src={logo} alt="IhuruCyber Logo" className="h-8 w-8 mr-2" />
          <Link to="/" className="text-xl font-semibold text-gray-800">
            RivanCyber
          </Link>
        </div>

        {/* Middle: Nav Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link to="/courses" className="text-gray-600 hover:text-gray-900">
            Courses
          </Link>
          <Link to="/reviews" className="text-gray-600 hover:text-gray-900">
            Reviews
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* Right: "Request a Quote" button (hidden on mobile) */}
        <div className="hidden md:block">
          <Link
            to="/quotation"
            className="px-5 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile: Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? (
            /* Close (X) icon */
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M6 6L18 18M6 18L18 6" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (slide-down) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-sm">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link
              to="/"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/courses"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/reviews"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link
              to="/contact"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {/* Mobile "Request a Quote" button */}
            <Link
              to="/quotation"
              className="block text-center mt-2 px-5 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800"
              onClick={() => setIsOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
