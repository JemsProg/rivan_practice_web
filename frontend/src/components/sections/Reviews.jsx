import React, { useRef, useEffect } from 'react'
import { animate, inView } from 'motion'
import { FaStar } from 'react-icons/fa'

import student_1 from '../../assets/student_1.jpg'
import student_3 from '../../assets/student_2.jpg'
import student_2 from '../../assets/student_3.jpg'


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

  // Sample reviews data with highlighted phrases
  const reviewsData = [
    {
      quote: (
        <>
       <span className='text-[#0D2153] font-bold'>Best learning experience! </span> Got my CCNA bootcamp here way back may 2018 and all I can say is the  <span className='text-[#0D2153] font-bold'> instructors are top notch! </span>
       Dont hesitate to enroll because its worth every penny.
        </>
      ),
      name: 'Christian Temporado',
      // position: 'CTO, Google Philippines',
      rating: 5,
      profile: student_1

    },
    {
      quote: (
        <>
         Rivan has the <span className='text-[#0D2153] font-bold'>  best instructors, best support team, latest topics and equipments </span> you'll ever need to attain your 
         IT dream job! Guaranteed to give you a <span className='text-[#0D2153] font-bold'>  zero to hero experience. </span> Highly recommended!
        </>
      ),
      name: 'Mervin-Jenny Lota ',
      // position: 'Network Engineer, Accenture',
      rating: 5,
      profile: student_2
    },
    {
      quote: (
        <>
          They provide <span className='text-[#0D2153] font-bold'>  best and updated trainings in the IT industry! </span> Took my CCNA and VMware certs classes and <span className='text-[#0D2153] font-bold'> passed my 
          certifications! </span> Thank you #teamrivan. 
        </>
      ),
      name: 'Earl Kent Justine Togonon',
      // position: 'Cybersecurity Engineer, BDO',
      rating: 5,
      profile: student_3

    }
  ]

  return (
    <section
      id='reviews'
      ref={sectionRef}
      className="bg-[#F9FAFF] py-32 px-4"
    >
      <div className="container mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2
          data-animate
          style={{ opacity: 0, transform: 'translateY(30px)' }}
          className="text-3xl md:text-4xl font-semibold text-[#0D2153]"
        >
          What our students' feedback
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
              {/* Quote (left-aligned, non-italic) */}
              <p className="text-gray-700 text-left">
                {review.quote}
              </p>

              {/* Reviewer Info (left-aligned) */}
              <div className="mt-6">
                {/* Avatar + Name/Position */}
                <div className="flex items-center mb-2">
                  <img
                    src={review.profile}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-3 object-cover"
                  />
                  <div className="text-left">
                    <p className="text-[#0D2153] font-semibold">
                      {review.name}
                    </p>
                    <div className="flex items-center text-left ">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className="text-yellow-400 w-5 h-5 mr-1"
                    />
                  ))}
                </div>
                    {/* <p className="text-sm text-gray-500">
                      {review.position}
                    </p> */}
                  </div>
                </div>

                {/* Stars below job title */}
          
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
