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
import comptiaSecurityImg from "../assets/ccna.png"
import itilImg from "../assets/ccna.png"
import ccnpEncorImg from "../assets/ccna.png"

const coursesData = [
  {
    image: pcnsaImg,
    title: "PCNSA",
    subtitle: "Palo Alto Networks Certified Network Security Administrator",
    description:
      "Learn the essential skills to configure, manage, and monitor Palo Alto firewalls for robust threat prevention.",
    link: "#"
  },
  {
    image: ccnaImg,
    title: "CCNA",
    subtitle: "200-301 CCNA v1.1",
    description:
      "A comprehensive introduction to networking fundamentals, routing, switching, and network security—an ideal starting point for your IT career.",
    link: "#"
  },
  {
    image: comptiaSecurityImg,
    title: "CompTIA Security+",
    subtitle: "Foundational Security Skills",
    description:
      "Validate your foundational security skills, covering core topics like network security, compliance, threats, and vulnerabilities.",
    link: "#"
  },
  {
    image: ccnpImg,
    title: "CCNP",
    subtitle: "ENCOR x ENARSI",
    description:
      "Dive deeper into advanced routing, switching, and troubleshooting concepts, equipping you with the expertise to manage complex enterprise networks.",
    link: "#"
  },
  {
    image: itilImg,
    title: "ITIL",
    subtitle: "IT Service Management Best Practices",
    description:
      "Optimize service delivery, boost efficiency, and align IT with business goals using globally recognized ITIL frameworks.",
    link: "#"
  },
  {
    image: ccnpEncorImg,
    title: "CCNP ENCOR",
    subtitle: "Implementing & Operating Cisco Enterprise Network Core",
    description:
      "Gain in-depth knowledge of enterprise infrastructure including dual-stack architecture, virtualization, and more.",
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
                  At RivanCyber Training Institute, we specialize in equipping you with the knowledge to deploy cutting-edge network solutions...
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
                  Does your current network align with industry best practices? Are you seeking an optimized design tailored...
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
                  Enhance your network operations with our Network Automation and NetDevOps Programming services...
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

export default Courses
