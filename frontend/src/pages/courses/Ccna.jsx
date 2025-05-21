import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import {
  FaCheck,
  FaPenNib,
  FaBook,
  FaUtensils,
  FaFileContract,
  FaDownload,
  FaHome,
  FaCloud,
  FaLink,
  FaDesktop,
} from "react-icons/fa";
import ccnaLogo from "../../assets/ccna.png"; // adjust path as needed

// Example images for the last section (replace with your actual images)
import img1 from "../../assets/about_1.png";
import img2 from "../../assets/about_2.png";
import img3 from "../../assets/about_3.png";
import img4 from "../../assets/about_2.png";
import img5 from "../../assets/about_1.png";

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

const CCNA = () => {
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
            src={ccnaLogo}
            alt="CCNA Logo"
            className="w-48 md:w-56 object-contain rounded-md flex-shrink-0"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">CCNA Training Bootcamp</h1>
            <p className="text-sm md:text-base text-gray-300 mb-4">200-301 CCNA v1.1</p>
            <p className="leading-relaxed max-w-full mb-4">
              The CCNA-200-301 training is a 5-day onsite training and 20 days homelab,
              wherein the enrollee will have take home activities and outputs must be sent to the
              group chat created by our team to easily communicate with your classmates and the instructors as well.
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

            {/* About the Course (moved to top) */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">About the Course</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                The Cisco Certified Network Associate (CCNA 200-301) is an industry-recognized certification
                for entry-level network engineers. This course provides a solid foundation in networking
                concepts, infrastructure, security, automation, and programmability. It is ideal for
                individuals pursuing a career in IT, especially in roles like:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Network Engineer</li>
                <li>Systems Administrator</li>
                <li>IT Support Specialist</li>
                <li>Infrastructure Technician</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                At RivanIT, our training is designed to go beyond theory. You’ll get real-world,
                hands-on experience with professional-grade Cisco devices and network configurations—
                just like the work you’ll face in actual IT environments.
              </p>
            </section>

            {/* What you'll learn */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-6">What you'll learn</h3>
              <ul className="list-none space-y-4">
                {[
                  "Get what you need to pass the up-to-date Cisco CCNA 200-301 v1.1 exam",
                  "Gain hands-on Cisco CCNA configuration and troubleshooting experience through practice labs",
                  "Explore how routing and switching technologies work in real world environments",
                  "Develop skills to work on enterprise production networks",
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
                During the training, students will configure and troubleshoot real equipment:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Cisco Edge Routers</li>
                <li>Layer 3 Managed Switches</li>
                <li>Wireless Access Points</li>
                <li>Cisco Firewalls and VPNs</li>
                <li>Linux-based Servers</li>
                <li>Network monitoring and automation tools</li>
              </ul>
            </section>

            {/* This training includes with icons and two columns */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-6">This training includes:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-gray-700">
                <li className="flex items-center space-x-3">
                  <FaPenNib className="text-xl" />
                  <span>Printed training materials and pens</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaBook className="text-xl" />
                  <span>CCNA official book (subject to availability)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaUtensils className="text-xl" />
                  <span>Daily breakfast, lunch, and snacks during onsite sessions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaDownload className="text-xl" />
                  <span>Software installers for your home lab setup</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaFileContract className="text-xl" />
                  <span>CCNA exam reviewers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaHome className="text-4xl" />
                  <span>Free dormitory access for students living far from the institution</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCloud className="text-4xl" />
                  <span>6-month access to Cisco Meraki cloud-managed networking lab</span>
                </li>

                {/* New items added below */}
                <li className="flex items-center space-x-3">
                  <FaFileContract className="text-xl" />
                  <span>Certificate of Completion</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaDownload className="text-xl" />
                  <span>1 year validity for sit-in in classes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaDesktop className="text-4xl" />
                  <span>Each person has their own set of equipment and devices for hands-on activities</span>
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
                <img src={ccnaLogo} alt="CCNA Logo" className="w-14 object-contain" />
                <div>
                  <h4 className="font-semibold text-[#0D2153] text-lg">CCNA</h4>
                  <p className="text-gray-600 text-sm">Issued by Cisco</p>
                </div>
              </div>
            </section>

            {/* Schedule Section */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-4">Schedule</h3>
              <p>
                <strong>Training Days:</strong> Weekdays (Monday to Friday) and Weekends (Every Sunday)
              </p>
              <p>
                <strong>Time:</strong> 9:00 AM to 5:00 PM
              </p>
              <p className="mt-2 text-gray-600 italic">
                Note: 5-day onsite training plus 20 days of homelab activities with outputs submitted via group chat.
              </p>
            </section>

            {/* Course Outline */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-4">Course Outline</h3>
              <a
                href="https://learningcontent.cisco.com/documents/200_301_CCNA_v1.0_2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D2153] underline flex items-center space-x-2"
              >
                <FaLink />
                <span>CCNA 200-301 Exam Topics</span>
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

export default CCNA;
