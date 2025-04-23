import React from 'react'
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaChevronUp
} from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0D2153] text-white pt-16 pb-6 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side: Institute Info + Social Icons */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">
              RivanCyber Training Institute
            </h2>
            <p className="text-gray-200 mb-4">
              Rivan Cyber Institute is a Network Engineering Bootcamp that
              caters not just to people around the IT industry but also career
              shifters.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/RivanInstitute"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-full p-2 transition hover:shadow-lg"
              >
                <FaFacebookF size={20} className="text-[#0D2153]" />
              </a>
              <a
                href="https://m.me/RivanInstitute"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-full p-2 transition hover:shadow-lg"
              >
                <FaFacebookMessenger size={20} className="text-[#0D2153]" />
              </a>
              <a
                href="https://www.instagram.com/rivancyberinstitute"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-full p-2 transition hover:shadow-lg"
              >
                <FaInstagram size={20} className="text-[#0D2153]" />
              </a>
              {/* YouTube Icon */}
              <a
                href="https://youtube.com/@teamrivanit?si=AIoxHdaUUZh8RVap"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-full p-2 transition hover:shadow-lg"
              >
                <FaYoutube size={20} className="text-[#0D2153]" />
              </a>
            </div>
          </div>

          {/* Right side: Contact Info */}
          <div className="md:w-1/2 flex flex-col items-start md:items-end text-gray-200">
            <h2 className="text-lg font-semibold mb-2">Contact us</h2>
            <p className="flex items-center mb-1">
              <FaMapMarkerAlt className="mr-2" />
              Rivan Building, 18d Mola, Makati, 1200 Metro Manila
            </p>
            <p className="flex items-center mb-1">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:teamrivan@rcvi.org@gmail.com"
                className="hover:text-blue-400 transition"
              >
                teamrivan@rcvi.org
              </a>
            </p>
            <p className="flex items-center mb-1">
              <FaPhoneAlt className="mr-2" />
              <a
                href="tel:+639493760000"
                className="hover:text-blue-400 transition"
              >
                +63 949-376-0000
              </a>
            </p>
            <p className="flex items-center mb-1">
              <FaPhoneAlt className="mr-2" />
              <a
                href="tel:+63284252848"
                className="hover:text-blue-400 transition"
              >
                +63 2-8425-2848 (Landline)
              </a>
            </p>
            <p className="flex items-center mb-1">
              <FaClock className="mr-2" />
              Mon-Fri 9:00 AM – 5:00 PM
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 border-t border-gray-600 pt-4 text-center text-sm">
          © 2025 All Rights Reserved. Design by Leigh.
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-white rounded-full p-3 shadow-lg transition hover:bg-gray-200 cursor-pointer"
      >
        <FaChevronUp size={20} className="text-[#0D2153]" />
      </button>
    </footer>
  )
}

export default Footer
