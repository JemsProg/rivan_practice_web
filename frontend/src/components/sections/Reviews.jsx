import React, { useRef, useEffect } from 'react'
import { animate, inView } from 'motion'
import { FaStar } from 'react-icons/fa'

// Example avatar (replace with your actual path)
import avatar from '../../assets/student_1.png'

const Reviews = () => {
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

  // Sample reviews data
  const reviewsData = [
    {
      quote: `“RivanCyber's training modules were engaging, up-to-date, and tailored to our specific needs! Our IT department feels more prepared than ever to tackle emerging threats.”`,
      name: 'Leigh Jamolin',
      position: 'CTO, Google Philippines',
      rating: 5
    },
    {
      quote: `Working with RivanCyber has been seamless from start to finish. Their proactive communication and skill development programs have already made a huge impact on our bottom line.`,
      name: 'Leigh Jamolin',
      position: 'Network Engineer, Accenture',
      rating: 5
    },
    {
      quote: `The insights and hands-on expertise provided by RivanCyber have revolutionized our approach to training. Their tailored and innovative methodology sets them apart in the industry.`,
      name: 'Leigh Jamolin',
      position: 'Cybersecurity Engineer, BDO',
      rating: 5
    }
  ]

  return (
    <section
      ref={sectionRef}
      className="bg-[#F9FAFF] py-12 px-4"
    >
      <div className="container mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2
          data-animate
          style={{ opacity: 0, transform: 'translateY(30px)' }}
          className="text-3xl md:text-4xl font-bold text-[#0D2153]"
        >
          What our students say
        </h2>

        {/* Subheading */}
        <p
          data-animate
          style={{ opacity: 0, transform: 'translateY(30px)' }}
          className="text-gray-600 mt-2"
        >
          Real Stories from Tech Professionals
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              data-animate
              style={{ opacity: 0, transform: 'translateY(30px)' }}
              className={`bg-white shadow-lg rounded-3xl p-6 flex flex-col justify-between transition-transform duration-300 ${
                index === 1
                  ? 'min-h-[320px] md:scale-105 md:shadow-xl'
                  : 'min-h-[280px]'
              }`}
            >
              {/* Quote */}
              <p className="text-gray-700 italic">
                {review.quote}
              </p>

              {/* Reviewer Info (left-aligned) */}
              <div className="mt-6">
                {/* Avatar + Name/Position */}
                <div className="flex items-center mb-2">
                  <img
                    src={avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-3 object-cover"
                  />
                  <div className="text-left">
                    <p className="text-[#0D2153] font-semibold">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {review.position}
                    </p>
                  </div>
                </div>

                {/* Stars below job title */}
                <div className="flex items-center text-left ml-16">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className="text-yellow-400 w-5 h-5 mr-1"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
