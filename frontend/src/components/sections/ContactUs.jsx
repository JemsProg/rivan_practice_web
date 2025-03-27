import React, { useRef, useEffect } from 'react'
import { animate, inView } from 'motion'

const ContactUs = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Animate elements with data-animate on scroll
    const elements = sectionRef.current.querySelectorAll('[data-animate]')
    elements.forEach((el, index) => {
      inView(el, () => {
        animate(
          el,
          { opacity: 1, y: 0 },
          {
            duration: 0.6,
            delay: index * 0.1,
            easing: 'ease-in-out'
          }
        )
      })
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#F9FAFF] pt-16 pb-32 px-4"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Grid Layout: Map on Left, Form on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Map */}
          <div
            data-animate
            style={{ opacity: 0, transform: 'translateY(30px)' }}
            className="rounded-lg overflow-hidden shadow"
          >
            <iframe
              title="RivanCyber Training Institute - Makati Bldg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.241281374461!2d121.0069741!3d14.569347699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9cc95c7616b%3A0xbb5c65d7ce316fd0!2sRivanCyber%20Training%20Institute%20-%20Makati%20Bldg!5e0!3m2!1sen!2sph!4v1697094991496!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: Contact Form */}
          <div
            data-animate
            style={{ opacity: 0, transform: 'translateY(30px)' }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0D2153] mb-2">
              Get in touch with us
            </h2>
            <p className="text-gray-700 mb-6">
              Empowering Connections for Tomorrow's Tech Leaders.
            </p>

            <form className="space-y-6">
              {/* Name Field */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#0D2153]"
              />
              {/* Email Field */}
              <input
                type="email"
                placeholder="email@company.com"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#0D2153]"
              />
              {/* Message Field */}
              <textarea
                placeholder="Tell us more..."
                className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:border-[#0D2153] h-32 resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#0D2153] text-white px-6 py-3 rounded-full hover:bg-[#0B1C47] transition-colors"
              >
                Let's get started
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactUs
