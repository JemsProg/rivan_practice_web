// src/pages/Reviewer.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animate, inView } from "motion";
import { FaUserCheck } from "react-icons/fa";
import Accordion from "../components/reviewers/Accordion";

export default function Reviewers() {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "CCNA Reviewer (Free Preview) | RivanCyber Philippines";

    // fade/slide in
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
  }, []);

  return (
    <section
      id="reviewer"
      ref={sectionRef}
      className="relative bg-[#0B142B] text-white min-h-screen px-6 pt-28 pb-16"
    >
      {/* soft gradient blobs for depth */}
      <div aria-hidden="true">
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <header
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="flex items-start gap-5 flex-wrap md:flex-nowrap"
        >
          <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
            <FaUserCheck className="text-white text-2xl" aria-hidden />
          </span>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              CCNA Reviewer — Free Preview
            </h1>
            <p className="text-white/80 mt-2 max-w-2xl">
              A limited public preview of our CCNA (200-301) question bank and
              notes. Our full{" "}
              <span className="font-semibold text-white">Rivan Membership</span>{" "}
              is launching soon—thanks for your patience and support!
            </p>

            {/* crumb/back */}
            <div className="mt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Go back home"
              >
                ← Home
              </Link>
            </div>
          </div>
        </header>

        {/* Glass card wrapper for the accordion */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="mt-10 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 sm:p-6 md:p-8 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)]"
        >
          {/* tiny top hairline accent */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent -mt-1 mb-4" />
          <Accordion className="space-y-2" />
        </div>

        {/* SR-only SEO helper (keeps UI minimal) */}
        <p className="sr-only">
          CCNA reviewer free preview from RivanCyber Training Institute in the
          Philippines with 200-301 CCNA practice questions and notes.
        </p>
      </div>

      {/* JSON-LD (FAQ-ish teaser about the reviewer) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "CCNA 200-301 Reviewer (Free Preview)",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Subnetting & IP" },
              { "@type": "ListItem", position: 2, name: "Routing & Switching" },
              { "@type": "ListItem", position: 3, name: "Security" },
              { "@type": "ListItem", position: 4, name: "Automation" },
            ],
            provider: {
              "@type": "Organization",
              name: "RivanCyber Training Institute",
              url: "https://rivanit.com",
            },
          }),
        }}
      />
    </section>
  );
}
