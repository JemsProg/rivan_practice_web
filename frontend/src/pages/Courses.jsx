import React, { useRef, useEffect } from "react"
import { animate, inView } from "motion"
import CourseCard from "../components/CourseCard"

// Top-row icons
import networkIcon from "../assets/network_training.png"
import securityIcon from "../assets/security_training.png"
import automationIcon from "../assets/network_automation.png"

// Course images
import pcnsaImg from "../assets/pcnsa.png"
import ccnaImg from "../assets/ccna.png"
import ccnpImg from "../assets/ccnp.png"
import comptiaSecurityImg from "../assets/comptia_security.png"
import itilImg from "../assets/itil.png"
import ccnpEncorImg from "../assets/ccnp_security.png"

const coursesData = [
  {
    image: ccnaImg,
    title: "CCNA",
    subtitle: "200-301 CCNA v1.1",
    description:
      "Learn networking fundamentals, routing, switching, and security in this hands-on CCNA course—ideal for beginners and IT pros.",
    link: "#"
  },
  {
    image: comptiaSecurityImg,
    title: "CompTIA Security+",
    subtitle: "SECURITY + SY0-701",
    description:
      "Gain essential cybersecurity skills including threat detection and risk management in our hands-on Security+ training.",
    link: "#"
  },
  {
    image: ccnpImg,
    title: "CCNP",
    subtitle: "ENCOR x ENARSI",
    description:
      "Advance your career with CCNP ENCOR & ENARSI, focusing on enterprise routing, switching, security, and network automation.",
    link: "#"
  },
  {
    image: itilImg,
    title: "ITIL v4/V3",
    subtitle: "Foundation Training",
    description:
      "Master IT service management best practices to improve IT operations and align services with business goals.",
    link: "#"
  },
  {
    image: ccnpEncorImg,
    title: "CCNP Security",
    subtitle: "SECURITY 350-701",
    description:
      "Learn to secure enterprise networks with firewalls, VPNs, and threat intelligence using Cisco security solutions.",
    link: "#"
  },
  {
    image: pcnsaImg,
    title: "PCNSA",
    subtitle: "Palo Alto Networks",
    description:
      "Gain hands-on experience configuring and securing networks with Palo Alto Networks technologies.",
    link: "#"
  }
]

const Courses = () => {
  // Force scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sectionRef = useRef(null)

  useEffect(() => {
    // Animate elements with data-animate on scroll
    const elements = sectionRef.current.querySelectorAll("[data-animate]")
    elements.forEach((el, index) => {
      inView(el, () => {
        animate(
          el,
          { opacity: 1, y: 0 },
          {
            duration: 0.6,
            delay: index * 0.1,
            easing: "ease-in-out"
          }
        )
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#F9FAFF] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Top Heading */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#0D2153]">
            Why Choose RivanCyber Training Institute
          </h2>
          <p className="text-gray-600 mt-2">
            Future-Proof Your Skills with Industry-Leading Training &amp; Certifications
          </p>
        </div>

        {/* First Column: 3 stacked items */}
        <div className="space-y-8 mb-12">
          {/* Network Training */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="bg-white shadow rounded-xl p-6 hover:bg-[#EAEFFB] transition-colors duration-300 group"
          >
            <div className="flex items-start space-x-4">
              <img
                src={networkIcon}
                alt="Network Icon"
                className="w-16 h-16 object-contain flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div>
                <h3 className="text-xl font-bold text-[#0D2153] mb-2">Network Training</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We equip you with the skills to deploy cutting-edge network solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Security Training */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="bg-white shadow rounded-xl p-6 hover:bg-[#EAEFFB] transition-colors duration-300 group"
          >
            <div className="flex items-start space-x-4">
              <img
                src={securityIcon}
                alt="Security Icon"
                className="w-16 h-16 object-contain flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div>
                <h3 className="text-xl font-bold text-[#0D2153] mb-2">Security Training</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Enhance your network security with our industry-focused training.
                </p>
              </div>
            </div>
          </div>

          {/* Network Automation */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="bg-white shadow rounded-xl p-6 hover:bg-[#EAEFFB] transition-colors duration-300 group"
          >
            <div className="flex items-start space-x-4">
              <img
                src={automationIcon}
                alt="Automation Icon"
                className="w-16 h-16 object-contain flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div>
                <h3 className="text-xl font-bold text-[#0D2153] mb-2">Network Automation</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Improve network operations with our automation and NetDevOps solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Use CourseCard components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <div
              key={index}
              data-animate
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <CourseCard
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                description={course.description}
                link={course.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses;
