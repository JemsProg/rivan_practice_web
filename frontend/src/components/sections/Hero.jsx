// src/components/Hero.jsx
import React, { useRef, useEffect } from "react";
import { animate, inView } from "motion";
import { Link } from "react-router-dom";
import { FiCode, FiShield, FiBriefcase } from "react-icons/fi";

// Assets
import buildingImage from "../../assets/building_dragon.png";
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
          { duration: 0.6, delay: i * 0.08, easing: "ease-in-out" }
        )
      )
    );
  }, []);

  return (
    <header
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B142B] text-white"
      role="banner"
    >
      {/* Soft gradient blobs for depth */}
      <div aria-hidden="true">
        <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pt-20 md:pt-28">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Copy + CTAs */}

          {/* Visual */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="relative w-full md:w-1/2"
          >
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
              {" "}
              <img
                src={buildingImage}
                alt="RivanCyber Training Institute Building"
                className="w-full h-auto rounded-3xl"
                loading="eager"
                fetchpriority="high"
                draggable="false"
              />
            </div>
          </div>
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Top IT Training in the Philippines
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/80">
              Hands-on courses in cybersecurity, programming, and modern tech—
              taught by practitioners, built for real jobs.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-stretch gap-3">
              <Link
                to="/top-it-training-courses-philippines-2025"
                className="group inline-flex items-center justify-center rounded-full bg-white text-[#0B142B] px-6 py-3 font-semibold transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Browse IT courses in the Philippines"
              >
                Browse Courses
                <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                to="/cisco-training-philippines"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur px-6 py-3 font-semibold text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="See exam reviewers"
              >
                Exam Reviewers
              </Link>
            </div>

            {/* Trust pills — tiny, scannable, good keywords without clutter */}
            <ul className="mt-6 flex flex-nowrap overflow-x-auto items-center gap-2 scrollbar-hide">
              {[
                { icon: developIcon, label: "Job-Ready Skills" },
                { icon: nurtureIcon, label: "Mentor-Led Labs" },
                { icon: discoverIcon, label: "Industry Certificates" },
              ].map(({ icon, label }) => (
                <li key={label} className="flex-shrink-0">
                  <span className="inline-flex gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 backdrop-blur">
                    <img
                      src={icon}
                      alt=""
                      loading="lazy"
                      className="h-4 w-4 opacity-90"
                    />
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            {/* SEO helper for SR only (keeps hero minimal visually) */}
            <p className="sr-only">
              RivanCyber Training Institute in Manila offers IT training, Cisco
              training, and cybersecurity courses in the Philippines.
            </p>
          </div>
        </div>
      </section>
      {/* --- HERO: Features strip (dark surface) --- */}

      <div className="relative w-full py-10 bg-white/5 ring-1 ring-white/10 supports-[backdrop-filter]:backdrop-blur-sm">
        <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-white/10 text-white"
        >
          {/* Hands-on IT Courses */}
          <li className="group flex items-start gap-4 p-6 md:p-8 transition-colors hover:bg-white/5">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <FiCode aria-hidden="true" className="h-7 w-7 text-white" />
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-1.5">
                Hands-On IT Courses (Philippines)
              </h3>
              <p className="text-white/75 leading-relaxed">
                Project-based training in web development & cybersecurity, led
                by industry practitioners.
              </p>
            </div>
          </li>

          {/* Certification Prep */}
          <li className="group flex items-start gap-4 p-6 md:p-8 transition-colors hover:bg-white/5">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <FiShield aria-hidden="true" className="h-7 w-7 text-white" />
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-1.5">
                Cisco & CompTIA Certification Prep
              </h3>
              <p className="text-white/75 leading-relaxed">
                Reviewers, labs, and mock exams for CCNA, CompTIA
                (A+/Net+/Sec+), and cloud fundamentals.
              </p>
            </div>
          </li>

          {/* Career Outcomes */}
          <li className="group flex items-start gap-4 p-6 md:p-8 transition-colors hover:bg-white/5">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <FiBriefcase aria-hidden="true" className="h-7 w-7 text-white" />
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-1.5">
                Job-Ready Projects & Career Support
              </h3>
              <p className="text-white/75 leading-relaxed">
                Real client projects, portfolio reviews, and interview coaching
                to land IT roles faster.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Hero;
