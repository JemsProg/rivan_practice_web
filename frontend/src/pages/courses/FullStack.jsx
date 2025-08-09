// src/pages/FullStackDevelopment.jsx
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

// Assets
import fsdLogo from "../../assets/full-stack.png";
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
    window.scrollTo(0, 0);
    document.title = "Full Stack Web Development Bootcamp | RivanCyber";
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B142B] text-white py-16 px-4"
      aria-labelledby="fsd-heading"
    >
      {/* soft gradient accents */}
      <div aria-hidden="true">
        <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Header / Hero Card */}
        <header
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)] mb-10"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={fsdLogo}
              alt="Full Stack Web Development"
              className="w-40 md:w-48 flex-shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 p-3"
              loading="eager"
            />
            <div className="flex-1 text-center md:text-left">
              <h1
                id="fsd-heading"
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                Full Stack Web Development Bootcamp
              </h1>
              <p className="text-sm md:text-base text-white/70 mt-1">
                React • Django • PostgreSQL
              </p>
              <p className="mt-4 text-white/90 leading-relaxed">
                Build production-ready apps from front end to back end. Learn
                React for UI, Django REST for APIs, PostgreSQL for data, and
                deploy on Linux.
              </p>
              <p className="sr-only">
                Full Stack developer training in the Philippines: React, Django,
                PostgreSQL with hands-on projects.
              </p>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Left: 2/3 stack */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* About */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h2 className="text-2xl font-bold">About the Course</h2>
              <p className="mt-3 text-white/85 leading-relaxed">
                Become a job-ready Full Stack Developer. You’ll learn modern
                patterns, clean code, and deployment workflows used by real
                teams.
              </p>
              <p className="mt-3 text-white/85">
                Ideal for aspiring developers, software engineers, and IT pros
                transitioning to web dev.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
                {[
                  "Frontend Developer",
                  "Backend Developer",
                  "Full Stack Developer",
                  "Software Engineer",
                ].map((role) => (
                  <li key={role} className="inline-flex items-center gap-2">
                    <span className="inline-grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                      <FaCheck className="text-emerald-400 text-xs" />
                    </span>
                    {role}
                  </li>
                ))}
              </ul>
            </section>

            {/* What you'll learn */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">What you’ll learn</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Build dynamic UIs with React (hooks, state, routing)",
                  "Design RESTful APIs and services with Django & DRF",
                  "Model & query data with PostgreSQL (indexes, migrations)",
                  "AuthN/AuthZ flows (JWT/sessions), form handling, security basics",
                  "Deploy to Linux servers (systemd, Nginx, SSL) and CI-friendly setups",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/90">
                    <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                      <FaCheck className="text-emerald-400 text-xs" />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Hands-on */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Hands-on Experience</h3>
              <p className="mt-3 text-white/85">
                You’ll build and ship practice projects:
              </p>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
                {[
                  "React components, state mgmt, routing",
                  "Django REST API with auth & testing",
                  "PostgreSQL schema design & migrations",
                  "App deployment, logs & troubleshooting",
                ].map((t) => (
                  <li key={t} className="inline-flex items-center gap-2">
                    <FaCheck className="text-emerald-400" /> {t}
                  </li>
                ))}
              </ul>
            </section>

            {/* Includes */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">This training includes</h3>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <FaPenNib /> Notebook & pens
                </li>
                <li className="flex items-center gap-3">
                  <FaBook /> Course book/materials
                </li>
                <li className="flex items-center gap-3">
                  <FaUtensils /> Lunch & snacks (onsite)
                </li>
                <li className="flex items-center gap-3">
                  <FaDownload /> Installers & setup guides
                </li>
                <li className="flex items-center gap-3">
                  <FaFileContract /> Reviewers & exercises
                </li>
                <li className="flex items-center gap-3">
                  <FaFileContract /> Certificate of Completion
                </li>
                <li className="flex items-center gap-3">
                  <FaDesktop /> Dedicated workstation per student
                </li>
              </ul>
            </section>
          </div>

          {/* Right: schedule / outline */}
          <aside className="flex flex-col gap-6">
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Schedule</h3>
              <ul className="mt-3 space-y-1 text-white/85">
                <li>
                  <strong>Duration:</strong> 4 days
                </li>
                <li>
                  <strong>Days:</strong> Weekdays or Weekends (Sat/Sun)
                </li>
                <li>
                  <strong>Time:</strong> 9:00 AM – 5:00 PM
                </li>
              </ul>
              <p className="mt-2 text-sm text-white/70">
                Includes guided labs and take-home exercises with feedback.
              </p>
            </section>

            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Course Outline</h3>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="mt-3 inline-flex items-center gap-2 text-emerald-300 hover:underline"
              >
                <FaLink aria-hidden /> Full Stack Web Development — Detailed
                Outline
              </a>
            </section>
          </aside>
        </div>

        {/* Gallery */}
        <section
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold">Gallery</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {galleryImages.map((src, i) => (
              <figure
                key={i}
                className="group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10"
                tabIndex={0}
              >
                <img
                  src={src}
                  alt={`Full Stack training photo ${i + 1}`}
                  className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                  draggable="false"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-2 text-xs text-white/90 bg-gradient-to-t from-[#0B142B]/60 to-transparent">
                  Full Stack hands-on labs
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Full Stack Web Development Bootcamp (React • Django • PostgreSQL)",
              description:
                "Hands-on full stack developer training in the Philippines covering React, Django REST, and PostgreSQL with deployment.",
              provider: {
                "@type": "Organization",
                name: "RivanCyber Training Institute",
                sameAs: "https://rivanit.com",
              },
            }),
          }}
        />
      </div>
    </section>
  );
};

export default FullStackDevelopment;
