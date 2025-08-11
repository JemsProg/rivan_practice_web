// src/pages/CCNA.jsx
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

// Assets
import ccnaLogo from "../../assets/ccna.png";
import img1 from "../../assets/about_1.png";
import img2 from "../../assets/about_2.png";
import img3 from "../../assets/about_3.png";
import img4 from "../../assets/about_2.png";
import img5 from "../../assets/about_1.png";

const galleryImages = [img1, img2, img3, img4, img5];

const CCNA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll("[data-animate]");
    elements.forEach((el, i) =>
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

  // --- JSON-LD data (rich, localized) ---
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "CCNA Training Philippines (200-301)",
    description:
      "Hands-on CCNA 200-301 training in the Philippines with 5-day onsite sessions and 20 days of guided homelabs.",
    url: "https://www.rivanit.com/top-it-training-courses-philippines-2025/ccna-200-301",
    image: "https://www.rivanit.com/og/ccna-200-301.jpg", // swap to a real 1200x630 image if available
    provider: {
      "@type": "Organization",
      name: "RivanCyber Training Institute",
      url: "https://www.rivanit.com",
    },
    educationalCredentialAwarded: "CCNA (200-301)",
    teaches: [
      "Networking fundamentals",
      "Routing and switching",
      "IP connectivity and services",
      "Security fundamentals",
      "Automation and programmability",
    ],
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
        startDate: "2025-09-01", // optional; set real dates if you have them
        endDate: "2025-10-01",
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
        name: "CCNA Training (200-301)",
        item: "https://www.rivanit.com/top-it-training-courses-philippines-2025/ccna-200-301",
      },
    ],
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B142B] text-white py-16 px-4"
      aria-labelledby="ccna-heading"
    >
      {/* Head tags (React 19) */}
      <title>CCNA Training Philippines (200-301) | RivanCyber</title>
      <meta
        name="description"
        content="Hands-on CCNA (200-301) training in the Philippines with live labs, 5-day onsite bootcamp, and 20-day guided homelabs. Weekend schedules available."
      />
      <link
        rel="canonical"
        href="https://www.rivanit.com/top-it-training-courses-philippines-2025/ccna-200-301"
      />
      {/* Social preview (optional) */}
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="CCNA Training Philippines (200-301) | RivanCyber"
      />
      <meta
        property="og:description"
        content="Hands-on CCNA bootcamp with labs, onsite sessions, and guided homelabs in Manila."
      />
      <meta
        property="og:url"
        content="https://www.rivanit.com/top-it-training-courses-philippines-2025/ccna-200-301"
      />
      <meta
        property="og:image"
        content="https://www.rivanit.com/og/ccna-200-301.jpg"
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
        {/* Header / Hero Card */}
        <header
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)] mb-10"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={ccnaLogo}
              alt="CCNA logo"
              className="w-40 md:w-48 flex-shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 p-3"
              loading="eager"
              width={192}
              height={192}
            />
            <div className="flex-1 text-center md:text-left">
              <h1
                id="ccna-heading"
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                CCNA Training Philippines (200-301)
              </h1>
              <p className="text-sm md:text-base text-white/70 mt-1">
                200-301 CCNA v1.1
              </p>
              <p className="mt-4 text-white/90 leading-relaxed">
                A 5-day onsite intensive + 20 days of guided homelabs. Submit
                outputs in a class group with instructor feedback so you build
                real, job-ready networking skills.
              </p>
              {/* SR-only helper for SEO */}
              <p className="sr-only">
                CCNA training in the Philippines: Cisco 200-301 with hands-on
                labs and certification prep.
              </p>
            </div>
          </div>
        </header>

        {/* Main content: 2 columns */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Left: 2/3 content stack */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* About the course */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h2 className="text-2xl font-bold">About the Course</h2>
              <p className="mt-3 text-white/85 leading-relaxed">
                Cisco Certified Network Associate (200-301) validates
                foundational networking, IP connectivity, security, automation,
                and programmability. Perfect for roles like:
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
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
              <p className="mt-3 text-white/85">
                Training goes beyond theory—configure Cisco gear and simulate
                production scenarios so your skills transfer to real projects.
              </p>
            </section>

            {/* What you'll learn */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">What you’ll learn</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Everything needed to pass the latest Cisco CCNA 200-301 v1.1 exam",
                  "Hands-on configuration and troubleshooting via guided labs",
                  "How routing and switching work in real environments",
                  "Skills for enterprise infrastructure and day-2 operations",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-white/90"
                  >
                    <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                      <FaCheck className="text-emerald-400 text-xs" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Hands-on Experience */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Hands-on Experience</h3>
              <p className="mt-3 text-white/85">
                Configure and troubleshoot real equipment:
              </p>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
                {[
                  "Cisco Edge Routers",
                  "Layer 3 Managed Switches",
                  "Wireless Access Points",
                  "Cisco Firewalls & VPNs",
                  "Linux Servers",
                  "Monitoring & Automation Tools",
                ].map((t) => (
                  <li key={t} className="inline-flex items-center gap-2">
                    <FaCheck className="text-emerald-400" /> {t}
                  </li>
                ))}
              </ul>
            </section>

            {/* This training includes */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">This training includes</h3>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-white/90">
                {[
                  [FaPenNib, "Printed training materials"],
                  [FaBook, "CCNA official book (if available)"],
                  [FaUtensils, "Breakfast, lunch & snacks onsite"],
                  [FaDownload, "Software installers for homelab"],
                  [FaFileContract, "CCNA exam reviewers"],
                  [FaHome, "Free dorm access (for far students)"],
                  [FaCloud, "6-month Meraki cloud lab access"],
                  [FaFileContract, "Certificate of Completion"],
                  [FaDownload, "1-year sit-in validity"],
                  [FaDesktop, "Dedicated equipment per student"],
                ].map(([Icon, text]) => (
                  <li key={text} className="flex items-center gap-3">
                    <Icon /> {text}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right: cert, schedule, outline */}
          <aside className="flex flex-col gap-6">
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="font-semibold text-lg mb-3">
                Certification Alignment
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={ccnaLogo}
                  alt="CCNA"
                  className="w-14 h-14 object-contain rounded-lg bg-white/5 ring-1 ring-white/10 p-1.5"
                  width={56}
                  height={56}
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">CCNA</h4>
                  <p className="text-white/70 text-sm">Issued by Cisco</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Schedule</h3>
              <ul className="mt-3 space-y-1 text-white/85">
                <li>
                  <strong>Training Days:</strong> Weekdays (Mon–Fri) & Weekends
                  (Sun)
                </li>
                <li>
                  <strong>Time:</strong> 9:00 AM – 5:00 PM
                </li>
              </ul>
              <p className="mt-2 text-sm text-white/70 italic">
                5-day onsite + 20 homelab days. Submit outputs via class group
                for feedback.
              </p>
            </section>

            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Course Outline</h3>
              <a
                href="https://learningcontent.cisco.com/documents/200_301_CCNA_v1.0_2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-emerald-300 hover:underline"
              >
                <FaLink aria-hidden /> CCNA 200-301 Exam Topics
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
                  alt={`CCNA training photo ${i + 1}`}
                  className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                  draggable="false"
                  width={320}
                  height={160}
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-2 text-xs text-white/90 bg-gradient-to-t from-[#0B142B]/60 to-transparent">
                  CCNA hands-on training
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default CCNA;
