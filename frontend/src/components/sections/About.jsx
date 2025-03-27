import React, { useRef, useEffect } from 'react'
import { animate, inView } from 'motion'

// Replace with the correct paths to your images
import aboutImg1 from '../../assets/about_1.png'
import aboutImg2 from '../../assets/about_2.png'
import aboutImg3 from '../../assets/about_3.png'
import aboutImg4 from '../../assets/about_4.png'

const AboutSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Select all elements that need animation
    const elements = sectionRef.current.querySelectorAll('[data-animate]')

    elements.forEach((el, index) => {
      // Trigger animation when element is in view
      inView(el, () => {
        animate(
          el,
          { opacity: 1, y: 0 }, // final state
          {
            duration: 0.6,
            delay: index * 0.1, // stagger effect
            easing: 'ease-in-out'
          }
        )
      })
    })
  }, [])

  // Four images total
  const aboutImages = [aboutImg1, aboutImg2, aboutImg3, aboutImg4]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#F9FAFF] py-12 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2
          data-animate
          className="text-center text-2xl md:text-4xl font-bold text-[#0D2153]"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          Looking to Become a Tech Professional?
        </h2>

        {/* Subtitle / Paragraph */}
        <p
          data-animate
          className="mt-4 text-center text-gray-700 max-w-3xl mx-auto"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          RivanCyber empowers IT professionals, fosters innovation, and uncovers 
          exceptional talent across the evolving tech landscape. Through skill 
          development, growth opportunities, and a dynamic community, we drive 
          progress and shape a transformative future for IT.
        </p>

        {/* Images Grid: 1 column on small screens, 2 columns on md and up (2×2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {aboutImages.map((imgSrc, index) => (
            <div
              key={index}
              data-animate
              className="overflow-hidden rounded-lg"
              style={{ opacity: 0, transform: 'translateY(50px)' }}
            >
              <img
                src={imgSrc}
                alt={`About RivanCyber ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
