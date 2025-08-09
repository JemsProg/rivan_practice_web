// src/components/Services.jsx
import React, { useRef, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { animate, inView } from "motion";
import {
  ShieldCheckIcon,
  CpuChipIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Slider from "react-slick";

import service_video from "../../assets/service_video.mp4";
import { courses } from "../data/courses";

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) =>
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.08, easing: "ease-in-out" }
        )
      )
    );
  }, []);

  const features = [
    {
      name: "Cisco Networking (Philippines)",
      description:
        "Catalyst & Meraki switches, routers, and Wi-Fi—designed for reliable, secure enterprise networks.",
      icon: CpuChipIcon,
    },
    {
      name: "Palo Alto NGFW & SD-WAN",
      description:
        "Next-gen firewalls, VPN, and secure SD-WAN to stop advanced threats and protect remote users.",
      icon: ShieldCheckIcon,
    },
    {
      name: "Fortinet FortiGate Solutions",
      description:
        "High-performance UTM: IPS, web filtering, and AV—integrated security for branch to data center.",
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
    autoplaySpeed: 3200,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="it-training-services"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B142B] text-white"
      aria-labelledby="services-heading"
    >
      {/* soft blobs to match hero */}
      <div aria-hidden="true">
        <div className="pointer-events-none absolute top-20 -left-2 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Copy + features */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2
                id="services-heading"
                data-animate
                style={{ opacity: 0, transform: "translateY(24px)" }}
                className="text-sm font-semibold tracking-wide text-white/70"
              >
                NETWORK & SECURITY APPLIANCES
              </h2>

              <p
                data-animate
                style={{ opacity: 0, transform: "translateY(24px)" }}
                className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight"
              >
                Products We Offer in the Philippines
              </p>

              <p
                data-animate
                style={{ opacity: 0, transform: "translateY(24px)" }}
                className="mt-6 text-white/80"
              >
                We supply enterprise-grade hardware from Cisco, Palo Alto
                Networks, and Fortinet—built to harden your network, simplify
                operations, and scale with your business.
              </p>

              <dl className="mt-10 max-w-xl space-y-7 text-white/80 lg:max-w-none">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    data-animate
                    style={{ opacity: 0, transform: "translateY(16px)" }}
                    className="relative pl-11"
                  >
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-0 top-0 size-6 text-white/90"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>

              <div
                data-animate
                style={{ opacity: 0, transform: "translateY(24px)" }}
                className="mt-10"
              >
                <RouterLink
                  to="/it-products-available"
                  className="inline-flex items-center justify-center rounded-full 
             bg-white/10 backdrop-blur-md border border-white/20 
             px-6 py-3 text-sm font-semibold text-white 
             shadow-lg hover:scale-[1.05] hover:bg-white/20 
             transition-all duration-300 ease-in-out"
                >
                  View All Products
                </RouterLink>
              </div>
            </div>
          </div>

          {/* Video + carousel column */}
          <div className="space-y-10">
            {/* Video card */}
            <div
              data-animate
              style={{ opacity: 0, transform: "translateY(24px)" }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)] p-2"
            >
              <video
                src={service_video}
                className="w-full rounded-xl ring-1 ring-white/10"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>

            {/* Courses slider on dark cards */}
            <div
              data-animate
              style={{ opacity: 0, transform: "translateY(24px)" }}
              className="w-full"
            >
              <Slider {...settings}>
                {courses.map((course, index) => (
                  <div key={index} className="px-3">
                    <article className="h-full rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 shadow-[0_12px_30px_-14px_rgba(2,6,23,.6)] transition-transform hover:-translate-y-0.5">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-56 object-cover rounded-lg ring-1 ring-white/10 mb-4"
                        loading="lazy"
                        draggable="false"
                      />
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <p className="text-sm text-white/80 mt-2">
                        {course.description}
                      </p>
                    </article>
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
