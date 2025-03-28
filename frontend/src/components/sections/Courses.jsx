import React, { useRef, useEffect, useState } from 'react'
import { animate, inView } from 'motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CourseCard from '../CourseCard'

// Replace these with your actual images
import pcnsaImg from '../../assets/pcnsa.png'
import ccnaImg from '../../assets/ccna.png'
import ccnpImg from '../../assets/ccnp.png'
import comptiaSecurityImg from '../../assets/ccna.png'
import itilImg from '../../assets/ccna.png'
import ccnpEncorImg from '../../assets/ccna.png'

const Courses = () => {
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Animate elements marked with data-animate on scroll
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

  const coursesData = [
    {
      title: 'PCNSA',
      subtitle: 'Palo Alto Networks',
      description:
        'Learn essential skills to manage and monitor Palo Alto firewalls for robust threat prevention.',
      img: pcnsaImg,
      link: '#'
    },
    {
      title: 'CCNA',
      subtitle: '200-301 CCNA v1.1',
      description:
        'A comprehensive introduction to networking fundamentals, routing, switching, and network security.',
      img: ccnaImg,
      link: '#'
    },
    {
      title: 'CompTIA Security+',
      subtitle: 'CompTIA Security+',
      description:
        'Validate your foundational security skills covering network security, compliance, threats, and vulnerabilities.',
      img: comptiaSecurityImg,
      link: '#'
    },
    {
      title: 'CCNP',
      subtitle: 'ENCOR x ENARSI',
      description:
        'Dive deeper into advanced routing, switching, and troubleshooting concepts for enterprise networks.',
      img: ccnpImg,
      link: '#'
    },
    {
      title: 'ITIL',
      subtitle: 'ITIL Foundation',
      description:
        'Master IT Service Management best practices to optimize service delivery and align IT with business goals.',
      img: itilImg,
      link: '#'
    },
    {
      title: 'CCNP ENCOR',
      subtitle: 'Cisco CCNP ENCOR',
      description:
        'Gain in-depth knowledge of enterprise infrastructure including dual-stack architecture, virtualization, and more.',
      img: ccnpEncorImg,
      link: '#'
    }
  ]

  // Only display 3 courses at a time.
  const visibleCourses = coursesData.slice(currentIndex, currentIndex + 3)

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3)
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
          {/* Left Arrow: Only show if currentIndex > 0 */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              data-animate
              style={{ opacity: 0, transform: 'translateY(30px)' }}
              className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 bg-[#0D2153] text-white p-2 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center hover:bg-[#0B1C47]"
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

          {/* Right Arrow: Only show if there are more courses */}
          {currentIndex + 3 < coursesData.length && (
            <button
              onClick={handleNext}
              data-animate
              style={{ opacity: 0, transform: 'translateY(30px)' }}
              className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 bg-[#0D2153] text-white p-2 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center hover:bg-[#0B1C47]"
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
