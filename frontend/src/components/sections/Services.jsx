// src/components/Services.jsx
import React, { useRef, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import { animate, inView } from "motion";
import {
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
      name: "Cisco Networking Solutions",
      description:
        "Enterprise-grade switches, routers, and access points from Cisco’s Catalyst and Meraki lines to keep your network fast, reliable, and secure.",
      icon: CpuChipIcon,
    },
    {
      name: "Palo Alto Security Appliances",
      description:
        "Next-generation firewalls, VPNs, and secure SD-WAN from Palo Alto Networks to protect your data and users against advanced threats.",
      icon: ShieldCheckIcon,
    },
    {
      name: "Fortinet Firewall Solutions",
      description:
        "High-performance FortiGate firewalls with integrated UTM features—antivirus, web filtering, and intrusion prevention—to shield your organization.",
      icon: CodeBracketIcon,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
                BEST NETWORKING EQUIPMENT
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Products We Offer
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                We supply the latest enterprise-grade hardware from Cisco, Palo
                Alto Networks, and Fortinet—switches, firewalls, and access
                points—to fortify your network and security posture.
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
              <div className="mt-20">
                <RouterLink
                  to="/it-products-available"
                  className="inline-block rounded-md bg-[#0D2153] px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#0d2153bf] transition"
                >
                  View All Products
                </RouterLink>
              </div>
            </div>
          </div>
          <div>
            <video
              src={service_video}
              height={1442}
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:max-w-full md:max-w-3xl lg:-ml-0"
              controls
              autoPlay
              muted
              loop
            />

            <div className="mt-10 w-full max-w-none  sm:max-w-full md:max-w-3xl lg:-ml-0">
              <Slider {...settings}>
                {courses.map((course, index) => (
                  <div key={index} className="px-3">
                    <div className="bg-white rounded-lg shadow-lg p-4 h-110 border border-gray-200">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-60 object-cover rounded-md mb-4"
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
