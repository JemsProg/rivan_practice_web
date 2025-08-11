// src/pages/CCNP.jsx
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
  FaDesktop,
} from "react-icons/fa";

import ccnpLogo from "../../assets/ccnp.png";

// Example gallery assets (swap with your own)
import img1 from "../../assets/about_1.png";
import img2 from "../../assets/about_2.png";
import img3 from "../../assets/about_3.png";
import img4 from "../../assets/about_2.png";
import img5 from "../../assets/about_1.png";

const galleryImages = [img1, img2, img3, img4, img5];

const CCNP = () => {
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
  }, []);

  // ---- JSON-LD ----
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "CCNP Enterprise Training Philippines (ENCOR • ENARSI)",
    description:
      "Advanced CCNP Enterprise training in the Philippines with hands-on labs for ENCOR (350-401) and ENARSI (300-410).",
    url: "https://www.rivanit.com/top-it-training-courses-philippines-2025/ccnp-encor-enarsi",
    image: "https://www.rivanit.com/og/ccnp-enterprise.jpg", // replace with a real 1200x630 image
    provider: {
      "@type": "Organization",
      name: "RivanCyber Training Institute",
      url: "https://www.rivanit.com",
    },
    teaches: [
      "Enterprise core networking (ENCOR 350-401)",
      "Advanced routing (OSPF, EIGRP, BGP)",
      "VPN, security policies, and SD-WAN",
      "Automation, monitoring, and operations",
      "Troubleshooting enterprise infrastructure (ENARSI 300-410)",
    ],
    educationalCredentialAwarded: "CCNP Enterprise",
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "Onsite + Homelab",
        location: {
          "@type": "Place",
          name: "Metro Manila, Philippines",
          address: {
            "@type": "PostalAddress",
            addressCountry: "PH",
            addressRegion: "NCR",
            addressLocality: "Manila",
          },
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "PHP",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.rivanit.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "IT Training Courses Philippines",
        item: "https://www.rivanit.com/top-it-training-courses-philippines-2025",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "CCNP Enterprise (ENCOR • ENARSI)",
        item: "https://www.rivanit.com/top-it-training-courses-philippines-2025/ccnp-encor-enarsi",
      },
    ],
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B142B] text-white py-16 px-4"
      aria-labelledby="ccnp-heading"
    >
      {/* Head tags (React 19) */}
      <title>CCNP Training Philippines (ENCOR • ENARSI) | RivanCyber</title>
      <meta
        name="description"
        content="CCNP Enterprise training in the Philippines covering ENCOR (350-401) and ENARSI (300-410). Hands-on labs, onsite bootcamp, and guided homelabs."
      />
      <link
        rel="canonical"
        href="https://www.rivanit.com/top-it-training-courses-philippines-2025/ccnp-encor-enarsi"
      />
      {/* Social preview */}
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="CCNP Training Philippines (ENCOR • ENARSI) | RivanCyber"
      />
      <meta
        property="og:description"
        content="Advanced CCNP Enterprise course with real lab gear and instructor feedback."
      />
      <meta
        property="og:url"
        content="https://www.rivanit.com/top-it-training-courses-philippines-2025/ccnp-encor-enarsi"
      />
      <meta
        property="og:image"
        content="https://www.rivanit.com/og/ccnp-enterprise.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* soft gradient accents */}
      <div aria-hidden="true">
        <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Header */}
        <header
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)] mb-10"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={ccnpLogo}
              alt="CCNP Enterprise logo"
              className="w-40 md:w-48 flex-shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 p-3"
              loading="eager"
              width={192}
              height={192}
            />
            <div className="flex-1 text-center md:text-left">
              <h1
                id="ccnp-heading"
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                CCNP Training Philippines (ENCOR • ENARSI)
              </h1>
              <p className="text-sm md:text-base text-white/70 mt-1">
                ENCOR • ENARSI • SD-WAN
              </p>
              <p className="mt-4 text-white/90 leading-relaxed">
                A 5-day onsite intensive + 20 days of guided homelabs. Build
                advanced enterprise networking skills with instructor feedback
                and real gear.
              </p>
              <p className="sr-only">
                CCNP Enterprise training in the Philippines covering ENCOR and
                ENARSI with hands-on labs.
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
                CCNP Enterprise validates skills to plan, implement, verify, and
                troubleshoot large-scale enterprise networks— plus collaborate
                with specialists across security, wireless, voice, and
                automation.
              </p>
              <p className="mt-3 text-white/85">
                Ideal for network engineers who want to deepen expertise and
                step into senior roles.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
                {[
                  "Network Engineer",
                  "Systems Administrator",
                  "IT Support Specialist",
                  "Infrastructure Technician",
                ].map((role) => (
                  <li key={role} className="inline-flex items-center gap-2">
                    <FaCheck className="text-emerald-400" /> {role}
                  </li>
                ))}
              </ul>
            </section>

            {/* What you'll learn */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">What you’ll learn</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Deep understanding of enterprise networking concepts (ENCOR/ENARSI)",
                  "Configure and troubleshoot core enterprise infrastructure",
                  "Implement advanced routing: OSPF, EIGRP, BGP",
                  "Secure, automate, and monitor enterprise networks (incl. SD-WAN)",
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
                Work with enterprise-grade gear and tooling:
              </p>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
                {[
                  "Enterprise routers & Layer 3 switches",
                  "Advanced routing protocols (OSPF, EIGRP, BGP)",
                  "Software-defined WAN (SD-WAN)",
                  "Security appliances & policies",
                  "Automation & monitoring tools",
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
                  <FaPenNib /> Printed training materials
                </li>
                <li className="flex items-center gap-3">
                  <FaBook /> CCNP official book (if available)
                </li>
                <li className="flex items-center gap-3">
                  <FaUtensils /> Breakfast, lunch & snacks onsite
                </li>
                <li className="flex items-center gap-3">
                  <FaDownload /> Software installers for homelab
                </li>
                <li className="flex items-center gap-3">
                  <FaFileContract /> Exam reviewers
                </li>
                <li className="flex items-center gap-3">
                  <FaHome /> Free dorm access (for far students)
                </li>
                <li className="flex items-center gap-3">
                  <FaCloud /> 6-month Meraki cloud lab access
                </li>
                <li className="flex items-center gap-3">
                  <FaFileContract /> Certificate of Completion
                </li>
                <li className="flex items-center gap-3">
                  <FaDownload /> 1-year sit-in validity
                </li>
                <li className="flex items-center gap-3">
                  <FaDesktop /> Dedicated equipment per student
                </li>
              </ul>
            </section>
          </div>

          {/* Right: certification, schedule, outlines */}
          <aside className="flex flex-col gap-6">
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="font-semibold text-lg mb-3">
                Certification Alignment
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={ccnpLogo}
                  alt="CCNP Enterprise"
                  className="w-14 h-14 object-contain rounded-lg bg-white/5 ring-1 ring-white/10 p-1.5"
                  width={56}
                  height={56}
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">CCNP Enterprise</h4>
                  <p className="text-white/70 text-sm">Issued by Cisco</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Schedule</h3>
              <ul className="mt-3 space-y-1 text-white/85">
                <li>
                  <strong>Training Days:</strong> Weekends (Saturdays)
                </li>
                <li>
                  <strong>Time:</strong> 9:00 AM – 5:00 PM
                </li>
              </ul>
              <p className="mt-2 text-sm text-white/70 italic">
                5-day onsite + 20 homelab days. Submit outputs for instructor
                feedback.
              </p>
            </section>

            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Course Outline</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="https://www.cisco.com/c/dam/en_us/training-events/le31/le46/cln/marketing/exam-topics/350-401-ENCOR.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-300 hover:underline"
                  >
                    <FaLink aria-hidden /> ENCOR (350-401) Exam Topics
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cisco.com/c/dam/en_us/training-events/le31/le46/cln/marketing/exam-topics/300-410-ENARSI.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-300 hover:underline"
                  >
                    <FaLink aria-hidden /> ENARSI (300-410) Exam Topics
                  </a>
                </li>
              </ul>
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
                  alt={`CCNP training photo ${i + 1}`}
                  className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                  draggable="false"
                  width={320}
                  height={160}
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-2 text-xs text-white/90 bg-gradient-to-t from-[#0B142B]/60 to-transparent">
                  CCNP enterprise labs
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default CCNP;
