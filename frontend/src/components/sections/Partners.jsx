import React, { useRef, useEffect } from 'react'
import { animate, inView } from 'motion'

import compTIA from '../../assets/comptia.png'
import accenture from '../../assets/accenture.png'
import aws from '../../assets/aws.png'
import bdo from '../../assets/bdo.png'
import smart from '../../assets/smart.png'
import sitel from '../../assets/sitel.png'
import cisco from '../../assets/cisco.png'

const Partners = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Animate heading/subheading on scroll
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

  // Row 1
  const row1 = [
    { id: 1, src: compTIA, alt: 'CompTIA' },
    { id: 2, src: accenture, alt: 'Accenture' },
    { id: 3, src: aws, alt: 'AWS' },
    { id: 4, src: bdo, alt: 'BDO' },
    { id: 5, src: smart, alt: 'Smart' },
    { id: 6, src: sitel, alt: 'Sitel Group' },
    { id: 7, src: cisco, alt: 'Cisco' },
  ]

  // Row 2
  const row2 = [
    { id: 1, src: sitel, alt: 'Sitel Group' },
    { id: 2, src: cisco, alt: 'Cisco' },
    { id: 3, src: compTIA, alt: 'CompTIA' },
    { id: 4, src: accenture, alt: 'Accenture' },
    { id: 5, src: aws, alt: 'AWS' },
    { id: 6, src: bdo, alt: 'BDO' },
    { id: 7, src: smart, alt: 'Smart' },
  ]

  return (
    <section
      ref={sectionRef}
      className="bg-[#0D2153] py-32 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Right-Aligned Heading + Subheading */}
        <div className="md:text-right">
          <h2
            data-animate
            className="text-2xl md:text-4xl font-semibold text-white"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            Who joins us on this tech-driven journey
          </h2>
          <p
            data-animate
            className="mt-2 text-white max-w-2xl md:ml-auto"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            Through strategic alliances and valued partnerships, we unite 
            expertise and innovation to drive impactful outcomes and 
            mutual success.
          </p>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="mt-10 space-y-8">
        {/* Row 1 (faster) */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee1 flex items-center gap-8 w-[200%]">
            {[...row1, ...row1].map((logo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl px-10 py-6 flex items-center justify-center 
                           h-36 min-w-[280px]"
              >
                {/* Increased the logo size with h-28 */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-28 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (slower) */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee2 flex items-center gap-8 w-[200%]">
            {[...row2, ...row2].map((logo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl px-10 py-6 flex items-center justify-center 
                           h-36 min-w-[280px]"
              >
                {/* Increased the logo size with h-28 */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-28 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
