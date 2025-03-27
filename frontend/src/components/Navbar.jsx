import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-[#F9FAFF] shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center">
          <img src={logo} alt="RivanCyber Logo" className="h-8 w-8 mr-2" />
          <ScrollLink 
            to="home" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            className="text-2xl font-semibold text-[#0D2153] cursor-pointer"
          >
            RivanCyber
          </ScrollLink>
        </div>

        {/* Middle: Nav Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <ScrollLink 
            to="home" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink 
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink 
            to="services" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink 
            to="courses" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Courses
          </ScrollLink>
          <ScrollLink 
            to="reviews" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Reviews
          </ScrollLink>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>

        {/* Right: "Request a Quote" button (hidden on mobile) */}
        <div className="hidden md:block">
          <ScrollLink 
            to="quotation" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            className="px-5 py-2 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47] cursor-pointer"
          >
            Request a Quote
          </ScrollLink>
        </div>

        {/* Mobile: Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? (
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M6 6L18 18M6 18L18 6" />
            </svg>
          ) : (
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (slide-down) */}
      {isOpen && (
        <div className="md:hidden bg-[#F9FAFF] shadow-sm">
          <div className="px-4 pt-3 pb-4 space-y-2">
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="home" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="about" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="services" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="courses" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Courses
            </ScrollLink>
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="reviews" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Reviews
            </ScrollLink>
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Contact
            </ScrollLink>
            {/* Mobile "Request a Quote" button */}
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="quotation" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              className="block text-center mt-2 px-5 py-2 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47] cursor-pointer"
            >
              Request a Quote
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
