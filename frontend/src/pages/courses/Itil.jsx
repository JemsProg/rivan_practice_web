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
} from "react-icons/fa";
import itilLogo from "../../assets/itil.png"; // Replace with actual ITIL logo path

// Example images for the gallery (replace with your actual images)
import img1 from "../../assets/about_1.png";
import img2 from "../../assets/about_2.png";
import img3 from "../../assets/about_3.png";
import img4 from "../../assets/about_2.png";
import img5 from "../../assets/about_1.png";

const galleryImages = [img1, img2, img3, img4, img5];

const ITIL = () => {
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
    src={itilLogo}
    alt="ITIL Logo"
    className="w-48 md:w-56 object-contain rounded-md flex-shrink-0"
  />
  <div className="flex-1">
    <h1 className="text-3xl md:text-4xl font-bold mb-2">ITIL Training Bootcamp</h1>
    <p className="text-sm md:text-base text-gray-300 mb-4 font-medium">Foundation Training</p>
    <p className="leading-relaxed max-w-full">
      Rivan Institute offers comprehensive ITIL v3 and v4 training combining practical and conceptual approaches.
    </p>
  </div>
</div>

        {/* Second section: 3 columns */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto text-[#0D2153]"
        >
          {/* Left 2/3 columns */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* About the Course */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">About the Course</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                ITIL v3/v4 at Rivan Institute is highly practical and job-ready,
                combining hands-on and conceptual learning for service management.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                <strong>ITIL v3</strong>: More practical and hands-on focused for real implementations.<br />
                <strong>ITIL v4</strong>: Conceptual approach and guidelines for service management.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our training covers both to ensure you can pass the exams and apply knowledge effectively.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Service Manager</li>
                <li>IT Consultant</li>
                <li>Process Owner</li>
                <li>IT Analyst</li>
              </ul>
            </section>

            {/* What you will learn */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-6">What you will learn</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Install and configure OTRS service management suite: service desk, agents, tickets, queues</li>
                <li>Manage Enterprise Resource Planning and CRM systems</li>
                <li>Create and use business documents and forms including:</li>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Value creation templates</li>
                  <li>Service availability plan templates</li>
                  <li>Project risk management</li>
                  <li>IT service catalog management</li>
                  <li>Financial management plans</li>
                  <li>Business relationship management</li>
                  <li>Service level agreements</li>
                  <li>Capacity planning</li>
                </ul>
              </ul>
            </section>

            {/* Hands-on Experience */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-6">Hands-on Experience</h3>
              <p className="mb-3 text-gray-700">
                Students will gain hands-on experience working with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>OTRS service management suite: ticketing and queues</li>
                <li>ERP and CRM system management</li>
                <li>Developing and managing business templates and forms</li>
                <li>IT service catalog and SLA management</li>
              </ul>
            </section>

            {/* This training includes */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-6">This training includes:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-gray-700">
                <li className="flex items-center space-x-3">
                  <FaPenNib className="text-xl" />
                  <span>Notebook</span>
                </li>
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
                <li className="flex items-center space-x-3">
                  <FaFileContract className="text-xl" />
                  <span>Certificate of Completion</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaDownload className="text-xl" />
                  <span>Each person has their own set of equipment and devices for hands-on activities</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Right 1/3 column */}
          <div className="flex flex-col gap-8">

            {/* Prepare for your certification */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <p className="font-semibold text-lg mb-2">Prepare for your certification with this course.</p>
              <div className="flex items-center space-x-4 mb-4">
                <img src={itilLogo} alt="ITIL Logo" className="w-14 object-contain" />
                <div>
                  <h4 className="font-semibold text-[#0D2153] text-lg">ITIL v3 & v4</h4>
                  <p className="text-gray-600 text-sm">Issued by AXELOS</p>
                </div>
              </div>
            </section>

            {/* Schedule */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-4">Schedule</h3>
              <p>
                <strong>Training Days:</strong> 3 days (Weekdays or Weekend, Saturday or Sunday)
              </p>
              <p>
                <strong>Time:</strong> 9:00 AM to 4:00 PM
              </p>
            </section>

            {/* Course Outline */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-4">Course Outline</h3>
              <a
                href="https://www.mizekhedmat.com/wp-content/uploads/2022/07/ITILFoundation-ITIL4Edition.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D2153] underline flex items-center space-x-2"
              >
                <FaLink />
                <span>ITIL Foundation v4 Course Outline</span>
              </a>
            </section>

          </div>
        </div>

        {/* Gallery */}
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

export default ITIL;
