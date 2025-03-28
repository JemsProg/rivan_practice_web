import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-[#F9FAFF] shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center">
          <img src={logo} alt="RivanCyber Logo" className="h-8 w-8 mr-2" />
          <RouterLink
            to="/"
            className="text-2xl font-semibold text-[#0D2153] cursor-pointer"
          >
            RivanCyber
          </RouterLink>
        </div>

        {/* Middle: Nav Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <ScrollLink 
            to="home" 
            spy={true}
            smooth={true} 
            duration={500} 
            offset={-70} 
            activeClass="text-blue-600"
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink 
            to="about" 
            spy={true}
            smooth={true} 
            duration={500} 
            offset={-70} 
            activeClass="text-blue-600"
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink 
            to="services" 
            spy={true}
            smooth={true} 
            duration={500} 
            offset={-70} 
            activeClass="text-blue-600"
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink 
            to="courses" 
            spy={true}
            smooth={true} 
            duration={500} 
            offset={-70} 
            activeClass="text-blue-600"
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Courses
          </ScrollLink>
          <ScrollLink 
            to="reviews" 
            spy={true}
            smooth={true} 
            duration={500} 
            offset={-70} 
            activeClass="text-blue-600"
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Reviews
          </ScrollLink>
          <ScrollLink 
            to="contact" 
            spy={true}
            smooth={true} 
            duration={500} 
            offset={-70} 
            activeClass="text-blue-600"
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>

        {/* Right: "Request a Quote" button (hidden on mobile) */}
        <div className="hidden md:block">
          <RouterLink
            to="/quotation"
            className="px-5 py-2 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47] cursor-pointer"
          >
            Request a Quote
          </RouterLink>
        </div>

        {/* Mobile: Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
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
              spy={true}
              smooth={true} 
              duration={500} 
              offset={-70} 
              activeClass="text-blue-600"
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="about" 
              spy={true}
              smooth={true} 
              duration={500} 
              offset={-70} 
              activeClass="text-blue-600"
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="services" 
              spy={true}
              smooth={true} 
              duration={500} 
              offset={-70} 
              activeClass="text-blue-600"
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="courses" 
              spy={true}
              smooth={true} 
              duration={500} 
              offset={-70} 
              activeClass="text-blue-600"
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Courses
            </ScrollLink>
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="reviews" 
              spy={true}
              smooth={true} 
              duration={500} 
              offset={-70} 
              activeClass="text-blue-600"
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Reviews
            </ScrollLink>
            <ScrollLink 
              onClick={() => setIsOpen(false)} 
              to="contact" 
              spy={true}
              smooth={true} 
              duration={500} 
              offset={-70} 
              activeClass="text-blue-600"
              className="block text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Contact
            </ScrollLink>
            {/* Mobile "Request a Quote" button */}
            <RouterLink 
              onClick={() => setIsOpen(false)}
              to="/quotation"
              className="block text-center mt-2 px-5 py-2 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47] cursor-pointer"
            >
              Request a Quote
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
