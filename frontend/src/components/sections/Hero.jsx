// src/components/Hero.jsx

import React, { useRef, useEffect } from "react";
import { animate, inView } from "motion";
import { Link } from "react-router-dom";

// Building image
import buildingImage from "../../assets/building_dragon.png";

// Bottom icons
import developIcon from "../../assets/we_develop.png";
import nurtureIcon from "../../assets/we_nurture.png";
import discoverIcon from "../../assets/we_discover.png";

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) =>
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: "ease-in-out" }
        )
      )
    );
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative bg-[#F9FAFF] pb-16 overflow-visible"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* BUILDING */}
        <div
          data-animate
          style={{ opacity: 0 }}
          className="
            relative flex-shrink-0 
            w-[250px] sm:w-[350px] md:w-[700px]
            mx-auto md:mx-0
            md:-ml-[200px]
          "
        >
          <img
            src={buildingImage}
            alt="Rivan Technological Institute Building"
            className="w-full h-auto"
          />
        </div>

        {/* TEXT & CTAs */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="
            flex-1
            text-center md:text-left
            mt-8 md:mt-0
            md:ml-8
          "
        >
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            IT Training Philippines
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-500">
            RivanCyber Training Institute, Inc. offers top-tier IT training in
            the Philippines, empowering individuals with hands-on skills in
            cybersecurity, programming, and digital solutions tailored for the
            modern tech landscape.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Primary blue button */}
            <Link
              to="/top-it-training-courses-philippines-2025"
              className="px-6 py-3 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47] transition-colors"
            >
              Browse Courses
            </Link>
            {/* Secondary white button */}
            <Link
              to="/cisco-training-philippines "
              className="px-6 py-3 border border-[#0D2153] text-[#0D2153] rounded-full hover:bg-[#EAEFFB] transition-colors"
            >
              Check Reviewers
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom row: We Develop / We Nurture / We Discover */}
      <div
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="bg-white mt-12 py-8 px-4 md:px-8"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* We Develop */}
          <div className="flex items-start space-x-4">
            <img
              src={developIcon}
              alt="We Develop Icon"
              className="h-12 w-12 flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#0D2153]">
                IT Training Philippines
              </h3>
              <p className="text-gray-600">
                Empowering IT individuals to reach their full potential.
              </p>
            </div>
          </div>
          {/* We Nurture */}
          <div className="flex items-start space-x-4">
            <img
              src={nurtureIcon}
              alt="We Nurture Icon"
              className="h-12 w-12 flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#0D2153]">
                Tech Skills Development
              </h3>
              <p className="text-gray-600">
                Fostering growth and innovation in the ever-evolving world of
                IT.
              </p>
            </div>
          </div>
          {/* We Discover */}
          <div className="flex items-start space-x-4">
            <img
              src={discoverIcon}
              alt="We Discover Icon"
              className="h-12 w-12 flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#0D2153]">
                Train for IT Careers
              </h3>
              <p className="text-gray-600">
                Uncovering the brightest minds in the IT landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
