// src/pages/PaloAlto.jsx
import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import {
  FaCheck,
  FaPenNib,
  FaBook,
  FaUtensils,
  FaFileContract,
  FaDownload,
  FaHome,
  FaCloud,
  FaLink,
} from "react-icons/fa";

import paloAltoLogo from "../../assets/pcnsa.png";

// Example gallery (swap with your own)
import img1 from "../../assets/about_1.png";
import img2 from "../../assets/about_2.png";
import img3 from "../../assets/about_3.png";
import img4 from "../../assets/about_2.png";
import img5 from "../../assets/about_1.png";

const galleryImages = [img1, img2, img3, img4, img5];

const PaloAlto = () => {
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
    document.title = "Palo Alto Networks Training (PCNSA) | RivanCyber";
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B142B] text-white py-16 px-4"
      aria-labelledby="pa-heading"
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
              src={paloAltoLogo}
              alt="Palo Alto Networks"
              className="w-40 md:w-48 flex-shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 p-3"
              loading="eager"
            />
            <div className="flex-1 text-center md:text-left">
              <h1
                id="pa-heading"
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                Palo Alto Networks Training Bootcamp (PCNSA)
              </h1>
              <p className="text-sm md:text-base text-white/70 mt-1">
                Next-Generation Firewall • Security Policies • Automation
              </p>
              <p className="mt-4 text-white/90 leading-relaxed">
                Configure, secure, and operate Palo Alto NGFWs and Panorama with
                real lab time. Learn App-ID, User-ID, NAT, IPS, Threat
                Prevention, and API-driven automation.
              </p>
              <p className="sr-only">
                Palo Alto Networks PCNSA training in the Philippines with
                hands-on firewall labs and exam prep.
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
                Build job-ready skills for roles that manage enterprise security
                at scale. This course blends essential theory with guided labs
                on actual firewall workflows.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
                {[
                  "Network Security Engineer",
                  "SOC Analyst",
                  "Systems Administrator",
                  "IT Security Specialist",
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

            {/* What you’ll learn */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">What you’ll learn</h3>
              <ul className="mt-4 space-y-3 text-white/90">
                {[
                  "Deploy and harden Palo Alto NGFWs (interfaces, zones, policies, NAT)",
                  "Identity-aware controls with User-ID and application controls with App-ID",
                  "Traffic analysis, logging, and Threat Prevention tuning",
                  "Centralized management with Panorama (templates, device groups, commits)",
                  "Automate tasks with XML/REST APIs and best-practice configs",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
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
              <p className="mt-3 text-white/85">Guided labs include:</p>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
                {[
                  "Base install & initial security posture",
                  "Security/NAT policies with app/identity context",
                  "Threat & malware prevention tuning",
                  "Panorama management & commits",
                  "Log analysis & troubleshooting methodology",
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
                  <FaPenNib /> Printed materials & pens
                </li>
                <li className="flex items-center gap-3">
                  <FaBook /> Official book (when available)
                </li>
                <li className="flex items-center gap-3">
                  <FaUtensils /> Lunch & snacks (onsite)
                </li>
                <li className="flex items-center gap-3">
                  <FaDownload /> Lab software & environment access
                </li>
                <li className="flex items-center gap-3">
                  <FaFileContract /> Reviewers & practice tests
                </li>
                <li className="flex items-center gap-3">
                  <FaHome /> Free dorm access (qualified students)
                </li>
                <li className="flex items-center gap-3">
                  <FaCloud /> 6-month virtual lab access
                </li>
                <li className="flex items-center gap-3">
                  <FaFileContract /> Certificate of Completion
                </li>
                <li className="flex items-center gap-3">
                  <FaDownload /> Dedicated gear for hands-on labs
                </li>
              </ul>
            </section>
          </div>

          {/* Right: schedule + outline */}
          <aside className="flex flex-col gap-6">
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Schedule</h3>
              <ul className="mt-3 space-y-1 text-white/85">
                <li>
                  <strong>Duration:</strong> 5 days
                </li>
                <li>
                  <strong>Days:</strong> Weekdays or Weekends (Sat/Sun)
                </li>
                <li>
                  <strong>Time:</strong> 9:00 AM – 5:00 PM
                </li>
              </ul>
              <p className="mt-2 text-sm text-white/70">
                Includes take-home labs with instructor feedback.
              </p>
            </section>

            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Course Outline</h3>
              <a
                href="https://www.paloaltonetworks.com/resources/datasheets/palo-alto-networks-cybersecurity-certification-overview.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-emerald-300 hover:underline"
              >
                <FaLink aria-hidden /> Palo Alto Networks Certification Overview
                (PDF)
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
                  alt={`Palo Alto training photo ${i + 1}`}
                  className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                  draggable="false"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-2 text-xs text-white/90 bg-gradient-to-t from-[#0B142B]/60 to-transparent">
                  Hands-on firewall labs
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
              name: "Palo Alto Networks Training Bootcamp (PCNSA)",
              description:
                "Hands-on Palo Alto Networks firewall training covering NGFW configuration, security policies, Panorama, and automation. PCNSA-aligned.",
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

export default PaloAlto;
