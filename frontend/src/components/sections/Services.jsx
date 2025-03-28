import React, { useRef, useEffect } from 'react'
import { animate, inView } from 'motion'

// Replace these with actual image paths in your project
import service1 from '../../assets/services_1.png'
import service2 from '../../assets/services_2.png'
import service3 from '../../assets/services_3.png'
import service4 from '../../assets/services_4.png'
import service5 from '../../assets/services_5.png'
import service6 from '../../assets/services_6.png'

const Services = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Select all elements that need animation
    const elements = sectionRef.current.querySelectorAll('[data-animate]')
    elements.forEach((el, index) => {
      // Trigger animation when each element enters the viewport
      inView(el, () => {
        animate(
          el,
          { opacity: 1, y: 0 },
          {
            duration: 0.6,
            delay: index * 0.1, // stagger effect
            easing: 'ease-in-out'
          }
        )
      })
    })
  }, [])

  // Array of services
  const servicesData = [
    {
      title: 'Linux Security and Hardening',
      description:
        'Learn best practices to secure Linux servers, mitigate threats, manage user permissions, and more.',
      img: service1
    },
    {
      title: 'Complete Cyber Security Analysis',
      description:
        'Identify potential vulnerabilities and become a proficient cyber security analyst.',
      img: service2
    },
    {
      title: 'Network Engineer: CCNA Track',
      description:
        'A comprehensive track covering network fundamentals, routing, switching, and exam prep for CCNA certification.',
      img: service3
    },
    {
      title: 'Incident Response for Cyber Professionals',
      description:
        'Master techniques and strategies for quick detection, mitigation, and response to cyber incidents.',
      img: service4
    },
    {
      title: 'VMWare – Sphere 7',
      description:
        'From virtualization to vMotion management, and deployment of virtual machines.',
      img: service5
    },
    {
      title: 'Penetration Testing the Right Way',
      description:
        'Learn the methodologies and best practices to effectively test for system vulnerabilities.',
      img: service6
    }
  ]

  return (
    <section id='services' ref={sectionRef} className="bg-white py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Right-aligned heading and paragraph */}
        <div className="md:text-right mb-12">
          <h2
            data-animate
            className="text-3xl md:text-4xl font-semibold text-[#0D2153]"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            What services we offer
          </h2>
          <p
            data-animate
            className="mt-4 text-gray-600 leading-relaxed max-w-2xl md:ml-auto"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            Rivan Cyber Institute empowers individuals to enter the IT industry, 
            focusing on cutting-edge fields like Cyber Security, Network Engineering, 
            and DevOps to foster comprehensive skill development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              data-animate
              className="border border-gray-300 rounded-4xl p-6 flex items-start space-x-4 bg-white transition-colors duration-300 hover:border-blue-300"
              style={{ opacity: 0, transform: 'translateY(30px)' }}
            >
              {/* Service Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 object-cover flex-shrink-0 rounded"
              />
              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-semibold text-[#0D2153] mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
