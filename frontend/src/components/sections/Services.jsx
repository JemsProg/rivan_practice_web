// src/components/Services.jsx
import React, { useRef, useEffect } from "react";
import { animate, inView } from "motion";

import service1 from "../../assets/services_1.png";
import service2 from "../../assets/services_2.png";
import service3 from "../../assets/services_3.png";
import service4 from "../../assets/services_4.png";
import service5 from "../../assets/services_5.png";
import service6 from "../../assets/services_6.png";

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll("[data-animate]");
    elements.forEach((el, index) => {
      inView(el, () => {
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: index * 0.1, easing: "ease-in-out" }
        );
      });
    });
  }, []);

  // SEO-optimised service blocks
  const servicesData = [
    {
      title: "Linux Security & Hardening Training Philippines",
      description:
        "Hands-on Linux server hardening course: threat mitigation, SELinux, firewall & user-permission control for Philippine IT teams.",
      img: service1,
    },
    {
      title: "Cyber-Security Analyst Certification Course Manila",
      description:
        "Identify, analyse and mitigate cyber threats with tools and labs aligned to global SOC roles — perfect for aspiring analysts in Manila.",
      img: service2,
    },
    {
      title: "CCNA Network Engineer Bootcamp Philippines",
      description:
        "Full Cisco CCNA training: networking fundamentals, IPv4/IPv6 routing, switching and exam prep — delivered in Makati & Cebu.",
      img: service3,
    },
    {
      title: "Incident Response & Detection Training Philippines",
      description:
        "Learn rapid detection, triage and containment techniques to minimise cyber-attack impact; ideal for corporate CSIRT members.",
      img: service4,
    },
    {
      title: "VMware vSphere 7 Administration Course",
      description:
        "Virtualisation essentials, vMotion management and VM deployment — upskill for data-centre roles in the Philippine market.",
      img: service5,
    },
    {
      title: "Ethical Hacking & Penetration Testing Course PH",
      description:
        "Master vulnerability assessment, exploit frameworks and reporting best-practice in this hands-on ethical hacking class.",
      img: service6,
    },
  ];

  return (
    <section
      id="it-training-services"
      ref={sectionRef}
      className="bg-white py-24 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section heading & intro copy packed with target keywords */}
        <div className="md:text-right mb-12">
          <h2
            data-animate
            className="text-3xl md:text-4xl font-semibold text-[#0D2153]"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            IT&nbsp;Training&nbsp;&amp;&nbsp;Certification Courses in the
            Philippines
          </h2>
          <p
            data-animate
            className="mt-4 text-gray-600 leading-relaxed max-w-2xl md:ml-auto"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            Rivan&nbsp;Cyber Institute delivers career-ready CCNA, CCNP,
            Cyber-Security, Linux Hardening, VMware and Full-Stack developer
            programmes in Manila, Makati and Cebu — complete with exam
            preparation and job-placement support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              data-animate
              className="border border-gray-300 rounded-4xl p-6 flex items-start space-x-4 bg-white transition-colors duration-300 hover:border-blue-300"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              {/* Service Image */}
              <img
                src={service.img}
                alt={`${service.title} Icon`}
                className="w-20 h-20 object-cover flex-shrink-0 rounded"
              />
              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-semibold text-[#0D2153] mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
