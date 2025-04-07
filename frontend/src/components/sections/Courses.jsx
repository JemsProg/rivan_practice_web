import React, { useRef, useEffect, useState } from 'react'
import { animate, inView } from 'motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CourseCard from '../CourseCard'

// Course images
import pcnsaImg from '../../assets/pcnsa.png'
import ccnaImg from '../../assets/ccna.png'
import ccnpImg from '../../assets/ccnp.png'
import comptiaSecurityImg from '../../assets/comptia_security.png'
import itilImg from '../../assets/itil.png'
import ccnpEncorImg from '../../assets/ccnp_security.png'

const Courses = () => {
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Shortened course data reflecting updated descriptions
  const coursesData = [
    {
      title: 'CCNA',
      subtitle: '200-301 CCNA v1.1',
      description:
        'Learn networking fundamentals, routing, switching, and security in our hands-on CCNA course—ideal for beginners and IT pros.',
      img: ccnaImg,
      link: '#'
    },
    {
      title: 'CompTIA Security+',
      subtitle: 'CompTIA Security+',
      description:
        'Gain essential cybersecurity skills including threat detection and risk management in our hands-on Security+ training.',
      img: comptiaSecurityImg,
      link: '#'
    },
    {
      title: 'CCNP',
      subtitle: 'ENCOR x ENARSI',
      description:
        'Advance your career with CCNP ENCOR & ENARSI, focusing on enterprise routing, switching, security, and network automation.',
      img: ccnpImg,
      link: '#'
    },
    {
      title: 'ITIL',
      subtitle: 'ITIL Foundation',
      description:
        'Master IT service management best practices to improve IT operations and align services with business goals.',
      img: itilImg,
      link: '#'
    },
    {
      title: 'CCNP ENCOR',
      subtitle: 'Cisco CCNP ENCOR',
      description:
        'Gain in-depth knowledge of enterprise infrastructure and network automation through CCNP ENCOR training.',
      img: ccnpEncorImg,
      link: '#'
    },
    {
      title: 'PCNSA',
      subtitle: 'Palo Alto Networks',
      description:
        'Gain hands-on experience configuring and securing networks with Palo Alto Networks technologies.',
      img: pcnsaImg,
      link: '#'
    }
  ]

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

  const visibleCourses = coursesData.slice(currentIndex, currentIndex + 3)

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(currentIndex - 3, 0))
    }
  }

  const handleNext = () => {
    if (currentIndex + 3 < coursesData.length) {
      setCurrentIndex(currentIndex + 3)
    }
  }

  return (
    <section id='courses' ref={sectionRef} className="bg-[#F9FAFF] pt-12 pb-32 px-4">
      <div className="container mx-auto max-w-6xl text-left">
        {/* Heading */}
        <h2
          data-animate
          className="text-3xl md:text-4xl font-semibold text-[#0D2153] mb-2"
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

        {/* Navigation and Course Cards */}
        <div className="relative">
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              data-animate
              style={{ opacity: 0, transform: 'translateY(30px)' }}
              className="absolute -left-12 top-1/2 -translate-y-1/2 bg-[#0D2153] text-white p-2 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center hover:bg-[#0B1C47]"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
            {visibleCourses.map((course, index) => (
              <div
                key={index}
                data-animate
                style={{ opacity: 0, transform: 'translateY(30px)' }}
                className="max-w-[350px] mx-auto"
              >
                <CourseCard
                  image={course.img}
                  title={course.title}
                  subtitle={course.subtitle}
                  description={course.description}
                  link={course.link}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {currentIndex + 3 < coursesData.length && (
            <button
              onClick={handleNext}
              data-animate
              style={{ opacity: 0, transform: 'translateY(30px)' }}
              className="absolute -right-12 top-1/2 -translate-y-1/2 bg-[#0D2153] text-white p-2 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center hover:bg-[#0B1C47]"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Browse All Courses Button (Centered) */}
        <div
          data-animate
          style={{ opacity: 0, transform: 'translateY(30px)' }}
          className="mt-12 text-center"
        >
          <Link to="/courses" className="px-6 py-3 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47] transition-colors">
            Browse All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Courses
