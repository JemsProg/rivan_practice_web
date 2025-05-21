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
import fsdLogo from "../../assets/full-stack.png"; // Replace waith your Full Stack logo path

// Example images for the gallery (replace with your actual images)
import img1 from "../../assets/about_1.png";
import img2 from "../../assets/about_2.png";
import img3 from "../../assets/about_3.png";
import img4 from "../../assets/about_2.png";
import img5 from "../../assets/about_1.png";

const galleryImages = [img1, img2, img3, img4, img5];

const FullStackDevelopment = () => {
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
            src={fsdLogo}
            alt="Full Stack Development Logo"
            className="w-48 md:w-56 object-contain rounded-md flex-shrink-0"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">Full Stack Web Development Bootcamp</h1>
            <p className="text-sm md:text-base text-gray-300 mb-4">React.js, Django, PostgreSQL</p>
            <p className="leading-relaxed max-w-full">
              Master building dynamic web applications using React.js, Django, and PostgreSQL. This course equips you with both frontend and backend skills to launch your developer career.
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
                This course prepares you for roles as a full stack developer by teaching modern web technologies and best practices.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Ideal for aspiring developers, software engineers, and IT professionals seeking a solid foundation in web development.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Frontend Developer</li>
                <li>Backend Developer</li>
                <li>Full Stack Developer</li>
                <li>Software Engineer</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                The training combines practical projects with core concepts ensuring you are job-ready.
              </p>
            </section>

            {/* What you will learn */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-6">What you will learn</h3>
              <ul className="list-none space-y-4">
                {[
                  "Build dynamic user interfaces with React.js",
                  "Develop RESTful APIs and backend services using Django",
                  "Manage relational databases using PostgreSQL",
                  "Implement user authentication and authorization",
                  "Deploy full stack applications to production"
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
                You will work on real projects involving:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>React component development and state management</li>
                <li>Django backend API creation and database integration</li>
                <li>PostgreSQL database schema design and querying</li>
                <li>Application deployment and troubleshooting</li>
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
                  <span>Book (course materials)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaUtensils className="text-xl" />
                  <span>Lunch</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaFileContract className="text-xl" />
                  <span>Reviewers and practice exercises</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaDownload className="text-xl" />
                  <span>Software installers and setup guides</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaFileContract className="text-xl" />
                  <span>Certificate of Completion</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaDesktop className="text-4xl" />
                  <span>Each person has their own set of equipment and devices for hands-on activities</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Right 1/3 column */}
          <div className="flex flex-col gap-8">
            {/* Schedule */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-4">Schedule</h3>
              <p>
                <strong>Training Days:</strong> 4 days (Weekdays or Weekend, Saturday or Sunday)
              </p>
              <p>
                <strong>Time:</strong> 9:00 AM to 5:00 PM
              </p>
            </section>

            {/* Course Outline */}
            <section className="border border-gray-300 bg-white rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-4">Course Outline</h3>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D2153] underline flex items-center space-x-2"
              >
                <FaLink />
                <span>Full Stack Web Development Course Outline</span>
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

export default FullStackDevelopment;
