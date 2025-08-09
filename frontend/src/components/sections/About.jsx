// src/components/About.jsx
import React, { useRef, useEffect, useState } from "react";
import { animate, inView } from "motion";
import aboutImg1 from "../../assets/about_1.png";
import aboutImg2 from "../../assets/about_2.png";
import aboutImg3 from "../../assets/about_3.png";
import aboutImg4 from "../../assets/about_4.png";

const About = () => {
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);
  const [spot, setSpot] = useState({ x: "50%", y: "50%" });

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

  const handleMouseMove = (e) => {
    const rect = spotlightRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpot({ x: `${x}%`, y: `${y}%` });
  };

  const aboutImages = [
    { src: aboutImg1, cap: "Hands-On Labs" },
    { src: aboutImg2, cap: "Certification Prep" },
    { src: aboutImg3, cap: "Mentor-Led Sessions" },
    { src: aboutImg4, cap: "Career Tracks" },
  ];

  return (
    // Component section (not a full page)
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B142B] text-white py-12"
      aria-labelledby="about-heading"
      onMouseMove={handleMouseMove}
    >
      {/* Gentle navy gradients for depth */}
      <div aria-hidden="true">
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-50 -right-2 h-[22rem] w-[22rem] rounded-full bg-blue-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl  py-20">
        {/* Heading + short copy */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="max-w-full"
        >
          <div className="text-right pb-10">
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
            >
              IT Certification Exam Readiness
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/80">
              Practitioner-led training and projects that mirror real work—built
              to help you pass and perform.
            </p>
          </div>

          {/* small chips; dark theme */}
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              "Cisco • CompTIA • CCNA • CCNP • Fullstack",
              "Weekend & Evening Schedules",
              "Portfolio Projects",
            ].map((t) => (
              <li key={t}>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive grid with dark cards + cursor spotlight */}
        <div
          ref={spotlightRef}
          className="relative mt-12"
          style={{
            background: `radial-gradient(280px at ${spot.x} ${spot.y}, rgba(255,255,255,0.08), transparent 40%)`,
            transition: "background-position 120ms ease-out",
          }}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {aboutImages.map(({ src, cap }) => (
              <figure
                key={cap}
                data-animate
                style={{ opacity: 0, transform: "translateY(32px)" }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)]"
              >
                <img
                  src={src}
                  alt={`${cap} at RivanCyber`}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  draggable="false"
                />

                {/* caption pill */}
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <span className="inline-flex rounded-full bg-black/40 px-3 py-1 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur">
                    {cap}
                  </span>
                </figcaption>

                {/* micro parallax on hover */}
                <div
                  className="pointer-events-none absolute inset-0 transition-transform duration-200 ease-out"
                  onMouseMove={(e) => {
                    const r = e.currentTarget.getBoundingClientRect();
                    const rx = (e.clientX - r.left) / r.width - 0.5;
                    const ry = (e.clientY - r.top) / r.height - 0.5;
                    e.currentTarget.style.transform = `translate(${rx * 6}px, ${
                      ry * 6
                    }px)`;
                  }}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translate(0,0)")
                  }
                />
              </figure>
            ))}
          </div>
        </div>

        {/* sr-only SEO helper; stays invisible */}
        <p className="sr-only">
          RivanCyber provides IT certification exam training in the Philippines,
          including Cisco, CompTIA, and cloud tracks.
        </p>
      </div>
    </section>
  );
};

export default About;
