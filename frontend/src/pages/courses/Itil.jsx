// src/pages/ITIL.jsx
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
} from "react-icons/fa";

import itilLogo from "../../assets/itil.png";

// Example gallery (swap with your own)
import img1 from "../../assets/about_1.png";
import img2 from "../../assets/about_2.png";
import img3 from "../../assets/about_3.png";
import img4 from "../../assets/about_2.png";
import img5 from "../../assets/about_1.png";

const galleryImages = [img1, img2, img3, img4, img5];

const ITIL = () => {
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
    document.title = "ITIL Foundation Training (v3/v4) | RivanCyber";
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B142B] text-white py-16 px-4"
      aria-labelledby="itil-heading"
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
              src={itilLogo}
              alt="ITIL"
              className="w-40 md:w-48 flex-shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 p-3"
              loading="eager"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 id="itil-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight">
                ITIL Foundation Training Bootcamp
              </h1>
              <p className="text-sm md:text-base text-white/70 mt-1">ITIL v3 & ITIL 4</p>
              <p className="mt-4 text-white/90 leading-relaxed">
                Practical, job-ready service management. Learn ITIL v3’s hands-on processes and ITIL 4’s
                modern service value system so you can pass the exam and apply it at work.
              </p>
              <p className="sr-only">
                ITIL training in the Philippines with ITIL v3 and ITIL 4 foundations, hands-on templates, and exam prep.
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
                ITIL aligns IT services with business value. We cover ITIL v3 (process-driven, practical)
                and ITIL 4 (service value chain, practices, guiding principles) so you can implement and communicate both.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
                {["Service Manager", "IT Consultant", "Process Owner", "IT Analyst"].map((role) => (
                  <li key={role} className="inline-flex items-center gap-2">
                    <span className="inline-grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                      <FaCheck className="text-emerald-400 text-xs" />
                    </span>
                    {role}
                  </li>
                ))}
              </ul>
            </section>

            {/* What you will learn (fixed nesting) */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">What you’ll learn</h3>
              <ul className="mt-4 space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                    <FaCheck className="text-emerald-400 text-xs" />
                  </span>
                  <span>Install and configure OTRS/((ITSM)) for tickets, queues, SLAs, and service desk flows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                    <FaCheck className="text-emerald-400 text-xs" />
                  </span>
                  <span>Map ITIL practices to ERP/CRM processes and measure value delivery.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                    <FaCheck className="text-emerald-400 text-xs" />
                  </span>
                  <span>
                    Build and use working templates:
                    <ul className="mt-2 list-disc ml-6 space-y-1 text-white/85">
                      <li>Service catalog & SLA/OLA documents</li>
                      <li>Service availability & capacity plans</li>
                      <li>Risk register & change enablement forms</li>
                      <li>Financial management and BRM artifacts</li>
                    </ul>
                  </span>
                </li>
              </ul>
            </section>

            {/* Hands-on Experience */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Hands-on Experience</h3>
              <p className="mt-3 text-white/85">Practice with real workflows and tools:</p>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
                {[
                  "OTRS/((ITSM)) service desk configuration",
                  "ERP/CRM alignment with service processes",
                  "Service catalog & SLA lifecycle",
                  "Incident, problem, change enablement flows",
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
                <li className="flex items-center gap-3"><FaPenNib /> Notebook & pens</li>
                <li className="flex items-center gap-3"><FaBook /> Course book/materials</li>
                <li className="flex items-center gap-3"><FaUtensils /> Lunch & snacks (onsite)</li>
                <li className="flex items-center gap-3"><FaFileContract /> Exam reviewers</li>
                <li className="flex items-center gap-3"><FaDownload /> Installers & sample templates</li>
                <li className="flex items-center gap-3"><FaFileContract /> Certificate of Completion</li>
                <li className="flex items-center gap-3"><FaDownload /> Take-home practice files</li>
              </ul>
            </section>
          </div>

          {/* Right: certification + schedule + outline */}
          <aside className="flex flex-col gap-6">
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="font-semibold text-lg mb-3">Certification Alignment</p>
              <div className="flex items-center gap-4">
                <img
                  src={itilLogo}
                  alt="ITIL Foundation"
                  className="w-14 h-14 object-contain rounded-lg bg-white/5 ring-1 ring-white/10 p-1.5"
                />
                <div>
                  <h4 className="font-bold">ITIL v3 & v4</h4>
                  <p className="text-white/70 text-sm">Issued by AXELOS</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Schedule</h3>
              <ul className="mt-3 space-y-1 text-white/85">
                <li><strong>Duration:</strong> 3 days</li>
                <li><strong>Days:</strong> Weekdays or Weekends (Sat/Sun)</li>
                <li><strong>Time:</strong> 9:00 AM – 4:00 PM</li>
              </ul>
            </section>

            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Course Outline</h3>
              <a
                href="https://www.mizekhedmat.com/wp-content/uploads/2022/07/ITILFoundation-ITIL4Edition.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-emerald-300 hover:underline"
              >
                <FaLink aria-hidden /> ITIL 4 Foundation — Outline (PDF)
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
                  alt={`ITIL training photo ${i + 1}`}
                  className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                  draggable="false"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-2 text-xs text-white/90 bg-gradient-to-t from-[#0B142B]/60 to-transparent">
                  ITIL hands-on activities
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
              name: "ITIL Foundation Training (v3 & v4)",
              description:
                "ITIL Foundation training in the Philippines covering ITIL v3 processes and ITIL 4 service value system, with hands-on templates and exam prep.",
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

export default ITIL;
