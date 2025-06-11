// src/components/Services.jsx
import React, { useRef, useEffect } from "react";
import { animate, inView } from "motion";
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

import service_video from "../../assets/service_video.mp4";

import Slider from "react-slick";
import { courses } from "../data/courses";

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll("[data-animate]");
    elements.forEach((el, index) => {
      inView(
        el,
        () => {
          animate(
            el,
            { opacity: 1, y: 0 },
            { duration: 0.6, delay: index * 0.1, easing: "ease-in-out" }
          );
        },
        { once: false } // optional: re-trigger animation on re-entry
      );
    });
  }, []);

  const features = [
    {
      name: "CCNA Training",
      description:
        "Get hands-on training for Cisco Certified Network Associate (CCNA). Learn networking fundamentals, IP connectivity, security basics, and automation.",
      icon: AcademicCapIcon,
    },
    {
      name: "CCNP Training",
      description:
        "Advance your networking career with Cisco Certified Network Professional (CCNP) training. Deep dive into routing, switching, and enterprise networking.",
      icon: CpuChipIcon,
    },
    {
      name: "CompTIA Security+",
      description:
        "Master cybersecurity fundamentals with our CompTIA Security+ program. Learn threat detection, network security, compliance, and risk management.",
      icon: ShieldCheckIcon,
    },
    {
      name: "Full-Stack Development",
      description:
        "Become a full-stack web developer. Learn HTML, CSS, JavaScript, React, Node.js, Django, REST APIs, and PostgreSQL from front-end to back-end.",
      icon: CodeBracketIcon,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="it-training-services"
      ref={sectionRef}
      className="bg-white py-24 px-4"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-[#0D2153]">
                BEST IT TRAINING
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Service we offer
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                We specialize in providing top-tier IT training programs
                designed to empower learners with real-world skills in
                networking, cybersecurity, and full-stack web development.
                Whether you're starting out or upskilling, our courses are built
                for career success.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    data-animate
                    className="relative pl-9 opacity-0 translate-y-4"
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 size-5 text-[#5ed8ff]"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              {/* <div className="mt-8">
                <a
                  href="/services" // or the route you want to link to
                  className="inline-block rounded-md bg-[#0D2153] px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition"
                >
                  View All Services
                </a>
              </div> */}
            </div>
          </div>
          <div>
            <video
              src={service_video}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:max-w-full md:max-w-3xl lg:-ml-0"
              controls
              autoPlay
              muted
              loop
            />

            <div className="mt-10 w-[48rem] max-w-none  sm:max-w-full md:max-w-3xl lg:-ml-0">
              <Slider {...settings}>
                {courses.map((course, index) => (
                  <div key={index} className="px-3">
                    <div className="bg-white rounded-lg shadow-lg p-4 h-90 border border-gray-200">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <h3 className="text-lg font-semibold text-[#0D2153]">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {course.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
