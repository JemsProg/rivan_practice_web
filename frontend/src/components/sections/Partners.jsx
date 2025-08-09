// src/components/Partners.jsx
import React, { useRef, useEffect } from "react";
import { animate, inView } from "motion";

import compTIA from "../../assets/comptia.png";
import accenture from "../../assets/accenture.png";
import aws from "../../assets/aws.png";
import bdo from "../../assets/bdo.png";
import smart from "../../assets/smart.png";
import sitel from "../../assets/sitel.png";
import cisco from "../../assets/cisco.png";

const logos = [
  { name: "CompTIA", src: compTIA },
  { name: "Accenture", src: accenture },
  { name: "AWS", src: aws },
  { name: "BDO", src: bdo },
  { name: "Smart Communications", src: smart },
  { name: "Sitel Group", src: sitel },
  { name: "Cisco", src: cisco },
];

const Partners = () => {
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

  // two rows with different ordering
  const row1 = logos;
  const row2 = [...logos].reverse();

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B142B] py-24 px-4 text-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading (right aligned on md+) */}
        <div className="md:text-right">
          <h2
            data-animate
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="text-2xl md:text-4xl font-extrabold tracking-tight"
          >
            Trusted by learners & teams
          </h2>
          <p
            data-animate
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="mt-2 text-white/80 md:ml-auto max-w-2xl"
          >
            Partners and organizations our students come from — across
            networking, cloud, and enterprise IT.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="mt-10 space-y-6">
        {/* Row 1 (faster) */}
        <div
          className="group relative overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
          aria-label="Partner logos marquee row 1"
        >
          <ul
            role="list"
            className="flex items-center gap-4 md:gap-8 animate-marquee-fast will-change-transform group-hover:[animation-play-state:paused]"
          >
            {[...row1, ...row1].map((logo, i) => (
              <li key={`r1-${i}`} className="min-w-[180px] md:min-w-[240px]">
                <div
                  className="flex h-24 md:h-28 items-center justify-center 
    rounded-2xl bg-white/15 backdrop-blur-xl ring-1 ring-white/20 
    px-6 md:px-10 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    draggable="false"
                    className="h-20 md:h-25 w-auto object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2 (slower, opposite direction) */}
        <div
          className="group relative overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
          aria-label="Partner logos marquee row 2"
        >
          <ul
            role="list"
            className="flex items-center gap-4 md:gap-8 animate-marquee-slow will-change-transform group-hover:[animation-play-state:paused]"
          >
            {[...row2, ...row2].map((logo, i) => (
              <li key={`r2-${i}`} className="min-w-[180px] md:min-w-[240px]">
                <div
                  className="flex h-24 md:h-28 items-center justify-center 
    rounded-2xl bg-white/15 backdrop-blur-xl ring-1 ring-white/20 
    px-6 md:px-10 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    draggable="false"
                    className="h-20 md:h-25 w-auto object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* animations + reduced motion */}
      <style>{`
        @keyframes marqueeL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeR {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-fast { animation: marqueeL 22s linear infinite; }
        .animate-marquee-slow { animation: marqueeR 32s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-fast, .animate-marquee-slow { animation: none !important; }
        }
      `}</style>

      {/* JSON-LD for a tiny SEO boost */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: logos.map((l, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "Organization", name: l.name },
            })),
          }),
        }}
      />
    </section>
  );
};

export default Partners;
