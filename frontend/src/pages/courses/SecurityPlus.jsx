// src/pages/SecurityPlus.jsx
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

import secLogo from "../../assets/comptia_security.png";

// Demo gallery (swap with your own)
import img1 from "../../assets/about_1.png";
import img2 from "../../assets/about_2.png";
import img3 from "../../assets/about_3.png";
import img4 from "../../assets/about_2.png";
import img5 from "../../assets/about_1.png";

const galleryImages = [img1, img2, img3, img4, img5];

const SecurityPlus = () => {
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
    document.title = "CompTIA Security+ (SY0-701) Training | RivanCyber";
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B142B] text-white py-16 px-4"
      aria-labelledby="sec-heading"
    >
      {/* soft gradient accents for depth */}
      <div aria-hidden="true">
        <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Header / Hero card */}
        <header
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)] mb-10"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={secLogo}
              alt="CompTIA Security+"
              className="w-40 md:w-48 flex-shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 p-3"
              loading="eager"
            />
            <div className="flex-1 text-center md:text-left">
              <h1
                id="sec-heading"
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                CompTIA Security+ Training (SY0-701)
              </h1>
              <p className="text-sm md:text-base text-white/70 mt-1">
                Threats • Cryptography • IAM • Risk • SecOps
              </p>
              <p className="mt-4 text-white/90 leading-relaxed">
                Learn to secure networks, endpoints, and cloud resources with
                hands-on labs. Practice incident response, access control,
                secure protocols, and real-world troubleshooting aligned to the
                latest SY0-701 objectives.
              </p>
              {/* SEO helper without visual clutter */}
              <p className="sr-only">
                Security+ training in the Philippines with hands-on
                cybersecurity labs and SY0-701 exam prep.
              </p>
            </div>
          </div>
        </header>

        {/* Main: 2/3 + 1/3 */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Left stack */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* About */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h2 className="text-2xl font-bold">About the Course</h2>
              <p className="mt-3 text-white/85 leading-relaxed">
                CompTIA Security+ validates baseline cybersecurity skills for
                roles in SOC, network security, and systems administration. This
                cohort blends essentials with guided labs so you can actually do
                the work—then pass the exam.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
                {[
                  "Security Specialist",
                  "Security Analyst (SOC)",
                  "Systems / Network Administrator",
                  "IT Support with Security Focus",
                ].map((r) => (
                  <li key={r} className="inline-flex items-center gap-2">
                    <span className="inline-grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                      <FaCheck className="text-emerald-400 text-xs" />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </section>

            {/* What you'll learn */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">What you’ll learn</h3>
              <ul className="mt-4 space-y-3 text-white/90">
                {[
                  "Identify and mitigate network threats & vulnerabilities",
                  "Implement access control, IAM, and zero-trust concepts",
                  "Use cryptography, PKI, and secure protocols correctly",
                  "Perform risk management and incident response workflows",
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
              <p className="mt-3 text-white/85">You’ll practice with:</p>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
                {[
                  "Network security devices & firewalls",
                  "Vulnerability scanning & hardening",
                  "Encryption tools & key management",
                  "IAM systems & policy tuning",
                  "Incident response tabletop & drills",
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
                  <FaPenNib /> Pens & notebook
                </li>
                <li className="flex items-center gap-3">
                  <FaBook /> Course book (stocks may vary)
                </li>
                <li className="flex items-center gap-3">
                  <FaUtensils /> Lunch & snacks (onsite)
                </li>
                <li className="flex items-center gap-3">
                  <FaFileContract /> Reviewers & practice sets
                </li>
                <li className="flex items-center gap-3">
                  <FaDownload /> Lab installers & setup guides
                </li>
                <li className="flex items-center gap-3">
                  <FaFileContract /> Certificate of Completion
                </li>
                <li className="flex items-center gap-3">
                  <FaDesktop className="text-lg" /> Dedicated hands-on gear per
                  student
                </li>
              </ul>
            </section>
          </div>

          {/* Right column */}
          <aside className="flex flex-col gap-6">
            {/* Cert pill */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="font-semibold mb-3">
                Prepare for your certification
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={secLogo}
                  alt="Security+ Logo"
                  className="w-14 h-14 object-contain rounded-lg bg-white/5 ring-1 ring-white/10 p-1"
                />
                <div>
                  <h4 className="font-semibold text-white">
                    CompTIA Security+
                  </h4>
                  <p className="text-white/70 text-sm">Issued by CompTIA</p>
                </div>
              </div>
            </section>

            {/* Schedule */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Schedule</h3>
              <ul className="mt-3 space-y-1 text-white/85">
                <li>
                  <strong>Duration:</strong> 4 days
                </li>
                <li>
                  <strong>Days:</strong> Weekdays or Weekend (Sat/Sun)
                </li>
                <li>
                  <strong>Time:</strong> 9:00 AM – 4:00 PM
                </li>
              </ul>
            </section>

            {/* Outline */}
            <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-2xl font-bold">Course Outline</h3>
              <a
                href="https://assets.ctfassets.net/82ripq7fjls2/6TYWUym0Nudqa8nGEnegjG/0f9b974d3b1837fe85ab8e6553f4d623/CompTIA-Security-Plus-SY0-701-Exam-Objectives.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-emerald-300 hover:underline"
              >
                <FaLink aria-hidden /> Security+ SY0-701 Exam Objectives (PDF)
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
                  alt={`Security+ training photo ${i + 1}`}
                  className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                  draggable="false"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-2 text-xs text-white/90 bg-gradient-to-t from-[#0B142B]/60 to-transparent">
                  Hands-on cyber labs
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
              name: "CompTIA Security+ Training (SY0-701)",
              description:
                "Hands-on Security+ course covering threats, cryptography, IAM, risk, and incident response. Aligned to SY0-701. Includes labs and exam prep.",
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

export default SecurityPlus;
