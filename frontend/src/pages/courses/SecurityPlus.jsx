import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import {
  FaCheck,
  FaPenNib,
  FaBook,
  FaUtensils,
  FaFileContract,
  FaDownload,
  FaLink,
  FaDesktop,
} from "react-icons/fa";
import secLogo from "../../assets/comptia_security.png"; // Replace with actual Security+ logo path

// Example images for the gallery (replace with your actual images)
import img1 from "../../assets/about_1.png";
import img2 from "../../assets/about_2.png";
import img3 from "../../assets/about_3.png";
import img4 from "../../assets/about_2.png";
import img5 from "../../assets/about_1.png";

const galleryImages = [img1, img2, img3, img4, img5];

const SecurityPlus = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll("[data-animate]");
    elements.forEach((el, index) => {
      inView(el, () => {
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: index * 0.15, easing: "ease-in-out" }
        );
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F9FAFF] py-12 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="bg-[#0D2153] rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mb-12 text-white"
        >
          <img
            src={secLogo}
            alt="Security+ Logo"
            className="w-48 md:w-56 object-contain rounded-md flex-shrink-0"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">CompTIA Security+ Training</h1>
            <p className="text-sm md:text-base text-gray-300 mb-4">Exam SY0-601 (Current Version)</p>
            <p className="leading-relaxed max-w-full mb-4">
              This Security+ training prepares you to secure networks, devices, and data. It covers threat management, cryptography, identity management, and risk mitigation.
            </p>
          </div>
        </div>

        {/* Second section: 3 columns */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto text-[#0D2153]"
        >
          {/* Left 2/3 columns combined: About the Course, What you'll learn, Hands-on Experience, This training includes */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* About the Course */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">About the Course</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                CompTIA Security+ is a globally recognized certification validating baseline skills needed to perform core security functions and pursue an IT security career.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                This course is ideal for IT professionals seeking roles such as security specialist, analyst, or administrator.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Security Specialist</li>
                <li>Systems Administrator</li>
                <li>Security Analyst</li>
                <li>Network Administrator</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Training combines theoretical knowledge and practical exercises using industry-standard tools.
              </p>
            </section>

            {/* What you'll learn */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-6">What you'll learn</h3>
              <ul className="list-none space-y-4">
                {[
                  "Identify and mitigate network threats and vulnerabilities",
                  "Implement access control and identity management",
                  "Understand cryptography concepts and secure protocols",
                  "Perform risk management and incident response",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-800">
                    <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Hands-on Experience */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-6">Hands-on Experience</h3>
              <p className="mb-3 text-gray-700">
                During the training, students will work with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Security threat identification and mitigation</li>
                <li>Network security appliances and firewalls</li>
                <li>Encryption and cryptographic tools</li>
                <li>Identity and access management systems</li>
                <li>Incident response simulation</li>
              </ul>
            </section>

            {/* This training includes */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-6">This training includes:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-gray-700">
                <li className="flex items-center space-x-3">
                  <FaPenNib className="text-xl" />
                  <span>Pens</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaBook className="text-xl" />
                  <span>Book (stocks may vary but every enrollee receives one)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaUtensils className="text-xl" />
                  <span>Lunch</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaFileContract className="text-xl" />
                  <span>Reviewers for the exam</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaDownload className="text-xl" />
                  <span>Installers for homelab</span>
                </li>

                {/* New additions */}
                <li className="flex items-center space-x-3">
                  <FaFileContract className="text-xl" />
                  <span>Certificate of Completion</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaDesktop className="text-4xl" />
                  <span>Each person has their own set of equipment to be used during hands-on activities</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Right 1/3 column: Prepare for your certification, Schedule, & Course Outline */}
          <div className="flex flex-col gap-8">

            {/* Prepare for your certification */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <p className="font-semibold text-lg mb-2">Prepare for your certification with this course.</p>
              <div className="flex items-center space-x-4 mb-4">
                <img src={secLogo} alt="Security+ Logo" className="w-14 object-contain" />
                <div>
                  <h4 className="font-semibold text-[#0D2153] text-lg">CompTIA Security+</h4>
                  <p className="text-gray-600 text-sm">Issued by CompTIA</p>
                </div>
              </div>
            </section>

            {/* Schedule Section */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-4">Schedule</h3>
              <p>
                <strong>Training Days:</strong> 4 days (Weekdays or Weekend, Saturday or Sunday)
              </p>
              <p>
                <strong>Time:</strong> 9:00 AM to 4:00 PM
              </p>
            </section>

            {/* Course Outline */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-4">Course Outline</h3>
              <a
                href="https://assets.ctfassets.net/82ripq7fjls2/6TYWUym0Nudqa8nGEnegjG/0f9b974d3b1837fe85ab8e6553f4d623/CompTIA-Security-Plus-SY0-701-Exam-Objectives.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D2153] underline flex items-center space-x-2"
              >
                <FaLink />
                <span>Security+ SY0-701 Exam Objectives</span>
              </a>
            </section>
          </div>
        </div>

        {/* Gallery Section below second section */}
        <section
          data-animate
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <h3 className="text-[#0D2153] font-semibold text-2xl mb-6">Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-24 object-cover rounded-md border border-gray-300"
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default SecurityPlus;
