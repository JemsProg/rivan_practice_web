import React, { useRef, useEffect } from "react"
import { animate, inView } from "motion"

// Top-row icons (replace with your actual images)
import networkIcon from "../assets/network_training.png"
import securityIcon from "../assets/security_training.png"
import automationIcon from "../assets/network_automation.png"

// Bottom-row course images
import ccnpImg from "../assets/ccnp.png"
import ccnaImg from "../assets/ccna.png"
import ccnpImg2 from "../assets/ccnp.png"

const Courses = () => {
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
            easing: "ease-in-out",
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
            Future-Proof Your Skills with Industry-Leading Training &amp;
            Certifications
          </p>
        </div>

        {/* First Column: 3 stacked items */}
        <div className="space-y-8 mb-12">
          {/* Network Training */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="
              bg-white shadow rounded-xl p-6
              hover:bg-[#EAEFFB] transition-colors duration-300 group
            "
          >
            <div className="flex items-start space-x-4">
              {/* Larger icon with scale animation on hover */}
              <img
                src={networkIcon}
                alt="Network Icon"
                className="
                  w-16 h-16 object-contain flex-shrink-0
                  transition-transform duration-300 ease-in-out
                  group-hover:scale-110
                "
              />
              <div>
                <h3 className="text-xl font-bold text-[#0D2153] mb-2">
                  Network Training
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  At RivanCyber Training Institute, we specialize in equipping
                  you with the knowledge to deploy cutting-edge network
                  solutions in real-world environments. Our training portfolio
                  includes an extensive collection of courses on Cisco,
                  Fortinet, Palo Alto Networks, F5, HP, and other
                  industry-leading technologies, ensuring you stay ahead in the
                  dynamic field of networking
                </p>
              </div>
            </div>
          </div>

          {/* Security Training */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="
              bg-white shadow rounded-xl p-6
              hover:bg-[#EAEFFB] transition-colors duration-300 group
            "
          >
            <div className="flex items-start space-x-4">
              <img
                src={securityIcon}
                alt="Security Icon"
                className="
                  w-16 h-16 object-contain flex-shrink-0
                  transition-transform duration-300 ease-in-out
                  group-hover:scale-110
                "
              />
              <div>
                <h3 className="text-xl font-bold text-[#0D2153] mb-2">
                  Security Training
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Does your current network align with industry best practices?
                  Are you seeking an optimized design tailored to your
                  organization’s unique requirements? At RivanCyber, we provide
                  comprehensive Network Assessment and Design services to
                  evaluate, optimize, and create robust network topologies that
                  meet the highest standards of efficiency and security.
                </p>
              </div>
            </div>
          </div>

          {/* Network Automation */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="
              bg-white shadow rounded-xl p-6
              hover:bg-[#EAEFFB] transition-colors duration-300 group
            "
          >
            <div className="flex items-start space-x-4">
              <img
                src={automationIcon}
                alt="Automation Icon"
                className="
                  w-16 h-16 object-contain flex-shrink-0
                  transition-transform duration-300 ease-in-out
                  group-hover:scale-110
                "
              />
              <div>
                <h3 className="text-xl font-bold text-[#0D2153] mb-2">
                  Network Automation
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Enhance your network operations with our Network Automation
                  and NetDevOps Programming services. From CLI scripts to
                  web-based applications, we deliver automated solutions for
                  configuration, monitoring, and secure backups. Our expertise
                  ensures your network is always optimized for peak performance.
                  Let RivanCyber make your network efficient and future-ready.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: 6 course cards (2 rows on md if needed) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* PCNSA */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="bg-white shadow rounded-xl p-6 flex flex-col"
          >
            <img
              src={ccnpImg} // Replace with your PCNSA image
              alt="PCNSA"
              className="w-full h-36 object-contain mb-4"
            />
            <h4 className="text-lg font-bold text-[#0D2153] mb-1">PCNSA</h4>
            <p className="text-gray-600 text-sm mb-4">
              Palo Alto Networks Certified Network Security Administrator.
              Learn the essential skills to configure, manage, and monitor
              Palo Alto firewalls for robust threat prevention.
            </p>
            <a
              href="#"
              className="mt-auto text-blue-600 font-medium hover:underline"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* CCNA */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="bg-white shadow rounded-xl p-6 flex flex-col"
          >
            <img
              src={ccnaImg}
              alt="CCNA"
              className="w-full h-36 object-contain mb-4"
            />
            <h4 className="text-lg font-bold text-[#0D2153] mb-1">CCNA</h4>
            <p className="text-gray-600 text-sm mb-4">
              200-301 CCNA v1.1. A comprehensive introduction to networking
              fundamentals, routing, switching, and network security—an ideal
              starting point for your IT career.
            </p>
            <a
              href="#"
              className="mt-auto text-blue-600 font-medium hover:underline"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* COMPTIA Security+ */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="bg-white shadow rounded-xl p-6 flex flex-col"
          >
            <img
              src={ccnpImg2} // Replace with your COMPTIA image
              alt="CompTIA Security+"
              className="w-full h-36 object-contain mb-4"
            />
            <h4 className="text-lg font-bold text-[#0D2153] mb-1">
              CompTIA Security+
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Validate your foundational security skills, covering core topics
              like network security, compliance, threats, and vulnerabilities.
            </p>
            <a
              href="#"
              className="mt-auto text-blue-600 font-medium hover:underline"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* CCNP */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="bg-white shadow rounded-xl p-6 flex flex-col"
          >
            <img
              src={ccnpImg}
              alt="CCNP"
              className="w-full h-36 object-contain mb-4"
            />
            <h4 className="text-lg font-bold text-[#0D2153] mb-1">CCNP</h4>
            <p className="text-gray-600 text-sm mb-4">
              ENCOR x ENARSI. Dive deeper into advanced routing, switching, and
              troubleshooting concepts, equipping you with the expertise to
              manage complex enterprise networks.
            </p>
            <a
              href="#"
              className="mt-auto text-blue-600 font-medium hover:underline"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* ITIL */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="bg-white shadow rounded-xl p-6 flex flex-col"
          >
            <img
              src={ccnpImg2} // Replace with your ITIL image
              alt="ITIL"
              className="w-full h-36 object-contain mb-4"
            />
            <h4 className="text-lg font-bold text-[#0D2153] mb-1">ITIL</h4>
            <p className="text-gray-600 text-sm mb-4">
              Master IT Service Management best practices to optimize service
              delivery, boost efficiency, and align IT with business goals.
            </p>
            <a
              href="#"
              className="mt-auto text-blue-600 font-medium hover:underline"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* CCNP ENCOR */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(30px)" }}
            className="bg-white shadow rounded-xl p-6 flex flex-col"
          >
            <img
              src={ccnpImg2} // Replace with your CCNP ENCOR image
              alt="CCNP ENCOR"
              className="w-full h-36 object-contain mb-4"
            />
            <h4 className="text-lg font-bold text-[#0D2153] mb-1">
              CCNP ENCOR
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Implementing and Operating Cisco Enterprise Network Core
              Technologies. Gain in-depth knowledge of enterprise infrastructure
              including dual-stack architecture, virtualization, and more.
            </p>
            <a
              href="#"
              className="mt-auto text-blue-600 font-medium hover:underline"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
