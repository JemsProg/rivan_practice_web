import React, { useRef, useEffect } from 'react'
import { animate, inView } from 'motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Reuse your CourseCard component
import CourseCard from '../CourseCard'

// Replace these with your actual images
import pcnsaImg from '../../assets/pcnsa.png'
import ccnaImg from '../../assets/ccna.png'
import ccnpImg from '../../assets/ccnp.png'

const Courses = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Animate elements marked with data-animate
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
    <section ref={sectionRef} className="bg-[#F9FAFF] py-12 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2
          data-animate
          className="text-3xl md:text-4xl font-bold text-[#0D2153] mb-2"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          What courses we have
        </h2>

        {/* Subheading */}
        <p
          data-animate
          className="text-gray-600 mb-8"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          Enhance Your Skills with Our Expert-Led Courses
        </p>

        {/* Cards + Arrows Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            data-animate
            style={{ opacity: 0, transform: 'translateY(30px)' }}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2
                       bg-[#0D2153] text-white p-2 w-10 h-10 rounded-full
                       items-center justify-center hover:bg-[#0B1C47]"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          {/* 3 Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              data-animate
              style={{ opacity: 0, transform: 'translateY(30px)' }}
            >
              <CourseCard
                image={pcnsaImg}
                title="PCNSA"
                subtitle="Palo Alto Networks"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                link="#"
              />
            </div>
            <div
              data-animate
              style={{ opacity: 0, transform: 'translateY(30px)' }}
            >
              <CourseCard
                image={ccnaImg}
                title="CCNA"
                subtitle="200-301 CCNA v1.1"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                link="#"
              />
            </div>
            <div
              data-animate
              style={{ opacity: 0, transform: 'translateY(30px)' }}
            >
              <CourseCard
                image={ccnpImg}
                title="CCNP"
                subtitle="ENCOR x ENARSI"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                link="#"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            data-animate
            style={{ opacity: 0, transform: 'translateY(30px)' }}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2
                       bg-[#0D2153] text-white p-2 w-10 h-10 rounded-full
                       items-center justify-center hover:bg-[#0B1C47]"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Browse All Courses Button */}
        <div
          data-animate
          style={{ opacity: 0, transform: 'translateY(30px)' }}
          className="mt-8"
        >
          <button className="px-6 py-3 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47] transition-colors">
            Browse All Courses
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses
