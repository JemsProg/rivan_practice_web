// src/components/Services.jsx
import React, { useRef, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
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
  const [autoplay, setAutoplay] = useState(true);

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
    autoplay,
    autoplaySpeed: 3200,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const linkedCourses = courses.filter((c) => !!c.link);

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
                aria-label="RivanCyber services overview video"
              />
            </div>

            {/* Courses slider on dark cards */}
            <div
              data-animate
              style={{ opacity: 0, transform: "translateY(24px)" }}
              className="w-full"
              role="region"
              aria-roledescription="carousel"
              aria-label="Featured training courses"
            >
              <div className="flex items-center justify-end gap-2 mb-2">
                <button
                  type="button"
                  onClick={() => setAutoplay(false)}
                  className="text-xs rounded-full border border-white/20 px-2.5 py-1 text-white/80 hover:bg-white/10"
                  aria-label="Pause carousel autoplay"
                >
                  Pause
                </button>
                <button
                  type="button"
                  onClick={() => setAutoplay(true)}
                  className="text-xs rounded-full border border-white/20 px-2.5 py-1 text-white/80 hover:bg-white/10"
                  aria-label="Play carousel autoplay"
                >
                  Play
                </button>
              </div>

              <Slider {...settings}>
                {courses.map((course, index) => {
                  const hasLink = !!course.link;
                  const Wrapper = hasLink ? RouterLink : "div";
                  const wrapperProps = hasLink
                    ? {
                        to: course.link,
                        className:
                          "block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-2xl",
                      }
                    : {};

                  return (
                    <div key={index} className="px-3">
                      <Wrapper {...wrapperProps}>
                        <article className="h-full rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 shadow-[0_12px_30px_-14px_rgba(2,6,23,.6)] transition-transform hover:-translate-y-0.5">
                          <img
                            src={course.image}
                            alt={`${course.title} – ${
                              course.subtitle || "training course"
                            }`}
                            className="w-full h-56 object-cover rounded-lg ring-1 ring-white/10 mb-4"
                            loading="lazy"
                            decoding="async"
                            width={800}
                            height={448}
                            draggable="false"
                          />
                          <h3 className="text-lg font-semibold">
                            {course.title}
                          </h3>
                          {course.subtitle && (
                            <p className="text-xs text-white/60 mt-0.5">
                              {course.subtitle}
                            </p>
                          )}
                          <p className="text-sm text-white/80 mt-2">
                            {course.description}
                          </p>
                        </article>
                      </Wrapper>
                    </div>
                  );
                })}
              </Slider>

              {/* Crawlable fallback without JS */}
              <noscript>
                <ul>
                  {linkedCourses.slice(0, 6).map((c, i) => (
                    <li key={i}>
                      <a href={c.link}>{c.title}</a>
                    </li>
                  ))}
                </ul>
              </noscript>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD: Services list + linked courses */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Network & Security Services",
            itemListElement: features.map((f, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: f.name,
                description: f.description,
              },
            })),
          }),
        }}
      />
      {linkedCourses.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Featured IT Training Courses",
              itemListElement: linkedCourses.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: c.link,
                item: {
                  "@type": "Course",
                  name: c.title,
                  description: c.description,
                },
              })),
            }),
          }}
        />
      )}
    </section>
  );
};

export default Services;
