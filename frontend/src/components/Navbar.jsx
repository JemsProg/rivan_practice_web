import React, { useState } from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'
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
    if (location.pathname !== "/") {
      // Navigate to home, passing target section in state (URL stays clean)
      navigate("/", { state: { scrollTo: target } })
    } else {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -70,
      })
    }
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
          <span onClick={() => handleNavClick("home")} className="text-gray-600 hover:text-gray-900 cursor-pointer">
            Home
          </span>
          <span onClick={() => handleNavClick("about")} className="text-gray-600 hover:text-gray-900 cursor-pointer">
            About
          </span>
          <span onClick={() => handleNavClick("services")} className="text-gray-600 hover:text-gray-900 cursor-pointer">
            Services
          </span>
          <span onClick={() => handleNavClick("courses")} className="text-gray-600 hover:text-gray-900 cursor-pointer">
            Courses
          </span>
          <span onClick={() => handleNavClick("reviews")} className="text-gray-600 hover:text-gray-900 cursor-pointer">
            Reviews
          </span>
          <span onClick={() => handleNavClick("contact")} className="text-gray-600 hover:text-gray-900 cursor-pointer">
            Contact
          </span>
        </div>

        {/* Right: "Request a Quote" button (hidden on mobile) */}
        <div className="hidden md:block">
          <RouterLink to="/quotation" className="px-5 py-2 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47] cursor-pointer">
            Request a Quote
          </RouterLink>
        </div>

        {/* Mobile: Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer">
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
            <span onClick={() => handleNavClick("home")} className="block text-gray-600 hover:text-gray-900 cursor-pointer">
              Home
            </span>
            <span onClick={() => handleNavClick("about")} className="block text-gray-600 hover:text-gray-900 cursor-pointer">
              About
            </span>
            <span onClick={() => handleNavClick("services")} className="block text-gray-600 hover:text-gray-900 cursor-pointer">
              Services
            </span>
            <span onClick={() => handleNavClick("courses")} className="block text-gray-600 hover:text-gray-900 cursor-pointer">
              Courses
            </span>
            <span onClick={() => handleNavClick("reviews")} className="block text-gray-600 hover:text-gray-900 cursor-pointer">
              Reviews
            </span>
            <span onClick={() => handleNavClick("contact")} className="block text-gray-600 hover:text-gray-900 cursor-pointer">
              Contact
            </span>
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
