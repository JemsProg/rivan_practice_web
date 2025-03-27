import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#0D2153] text-white pt-8 pb-4 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side: Institute Info + Social Icons */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">
              RivanCyber Training Institute
            </h2>
            <p className="text-gray-200 mb-4">
              Rivan Cyber Institute is a Network Engineering Bootcamp that caters
              not just to people around the IT industry but also career shifters.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                <FaInstagram size={20} />
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
                href="mailto:rivaninstitute@gmail.com"
                className="hover:text-blue-400 transition"
              >
                rivaninstitute@gmail.com
              </a>
            </p>
            <p className="flex items-center mb-1">
              <FaPhoneAlt className="mr-2" />
              <a
                href="tel:+639778474888"
                className="hover:text-blue-400 transition"
              >
                +63 977-847-4888
              </a>
            </p>
            <p className="flex items-center mb-1">
              <FaClock className="mr-2" />
              Mon-Fri 9:00AM - 5:00PM
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 border-t border-gray-600 pt-4 text-center text-sm">
          © 2025 All Rights Reserved. Design by Leigh.
        </div>
      </div>
    </footer>
  )
}

export default Footer
