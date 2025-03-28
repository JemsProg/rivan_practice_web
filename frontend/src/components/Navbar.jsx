import React, { useState } from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = (target) => {
    setIsOpen(false)
    // If we're not on the landing page, navigate there and pass the target in state.
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: target } })
    }
  }

  // Common props for the ScrollLink elements.
  const commonLinkProps = {
    spy: true,
    smooth: true,
    duration: 500,
    offset: -70,
    activeClass: "text-gray-900", // This class will be added when the section is in view.
    className: "cursor-pointer text-gray-500 hover:text-gray-700",
  }

  return (
    <nav className="bg-[#F9FAFF] shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center">
          <img src={logo} alt="RivanCyber Logo" className="h-8 w-8 mr-2" />
          <RouterLink to="/" className="text-2xl font-semibold text-[#0D2153] cursor-pointer">
            RivanCyber
          </RouterLink>
        </div>

        {/* Middle: Nav Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <ScrollLink 
            to="home" 
            onClick={() => handleNavClick("home")}
            {...commonLinkProps}
          >
            Home
          </ScrollLink>
          <ScrollLink 
            to="about" 
            onClick={() => handleNavClick("about")}
            {...commonLinkProps}
          >
            About
          </ScrollLink>
          <ScrollLink 
            to="services" 
            onClick={() => handleNavClick("services")}
            {...commonLinkProps}
          >
            Services
          </ScrollLink>
          <ScrollLink 
            to="courses" 
            onClick={() => handleNavClick("courses")}
            {...commonLinkProps}
          >
            Courses
          </ScrollLink>
          <ScrollLink 
            to="reviews" 
            onClick={() => handleNavClick("reviews")}
            {...commonLinkProps}
          >
            Reviews
          </ScrollLink>
          <ScrollLink 
            to="contact" 
            onClick={() => handleNavClick("contact")}
            {...commonLinkProps}
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
              to="home" 
              onClick={() => handleNavClick("home")}
              {...commonLinkProps}
              className="block"
            >
              Home
            </ScrollLink>
            <ScrollLink 
              to="about" 
              onClick={() => handleNavClick("about")}
              {...commonLinkProps}
              className="block"
            >
              About
            </ScrollLink>
            <ScrollLink 
              to="services" 
              onClick={() => handleNavClick("services")}
              {...commonLinkProps}
              className="block"
            >
              Services
            </ScrollLink>
            <ScrollLink 
              to="courses" 
              onClick={() => handleNavClick("courses")}
              {...commonLinkProps}
              className="block"
            >
              Courses
            </ScrollLink>
            <ScrollLink 
              to="reviews" 
              onClick={() => handleNavClick("reviews")}
              {...commonLinkProps}
              className="block"
            >
              Reviews
            </ScrollLink>
            <ScrollLink 
              to="contact" 
              onClick={() => handleNavClick("contact")}
              {...commonLinkProps}
              className="block"
            >
              Contact
            </ScrollLink>
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
