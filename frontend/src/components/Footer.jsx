// src/components/Footer.jsx
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaChevronUp,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0B142B] text-white pt-16 pb-8 px-4">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand & socials */}
          <div>
            <h2 className="text-xl font-extrabold tracking-tight">
              RivanCyber Training Institute, Inc.
            </h2>
            <p className="mt-2 text-white/80">
              Network engineering & IT training in the Philippines — hands-on
              courses, mentor-led labs, and certification prep.
            </p>

            <ul
              className="mt-4 flex items-center gap-3"
              aria-label="Social links"
            >
              <li>
                <a
                  href="https://www.facebook.com/RivanInstitute"
                  aria-label="RivanCyber on Facebook"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://m.me/RivanInstitute"
                  aria-label="Message us on Messenger"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition"
                >
                  <FaFacebookMessenger className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rivancyberinstitute"
                  aria-label="RivanCyber on Instagram"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@teamrivanit?sub_confirmation=1"
                  aria-label="RivanCyber on YouTube"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition"
                >
                  <FaYoutube className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links (SEO-friendly internal links) */}
          <nav aria-label="Footer navigation" className="md:mx-auto">
            <h3 className="text-lg font-semibold">Explore</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>
                <RouterLink
                  to="/top-it-training-courses-philippines-2025"
                  className="hover:underline"
                >
                  IT Training Courses Philippines
                </RouterLink>
              </li>
              {/* Exact-match anchors to key money pages */}
              <li>
                <RouterLink
                  to="/top-it-training-courses-philippines-2025/ccna-200-301"
                  className="hover:underline"
                >
                  CCNA training Philippines
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/top-it-training-courses-philippines-2025/ccnp-encor-enarsi"
                  className="hover:underline"
                >
                  CCNP training Philippines
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/top-it-training-courses-philippines-2025/comptia-security-plus-syo-701"
                  className="hover:underline"
                >
                  CompTIA Security+ training Philippines
                </RouterLink>
              </li>
              {/* Smooth-scroll only makes sense on the homepage */}
              <li>
                <ScrollLink
                  to="about"
                  smooth
                  offset={-80}
                  duration={500}
                  className="cursor-pointer hover:underline"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="reviews"
                  smooth
                  offset={-80}
                  duration={500}
                  className="cursor-pointer hover:underline"
                >
                  Reviews
                </ScrollLink>
              </li>
              <li>
                <RouterLink
                  to="/training-quotation-philippines"
                  className="hover:underline"
                >
                  Request a Quote
                </RouterLink>
              </li>
            </ul>
          </nav>

          {/* Contact (use semantic address) */}
          <div className="md:ml-auto">
            <h3 className="text-lg font-semibold">Contact</h3>
            <address className="not-italic mt-3 space-y-2 text-white/85">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 shrink-0" />
                <a
                  href="https://maps.google.com/?q=Rivan+Building,+18D+Mola,+Makati,+1200+Metro+Manila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Rivan Building, 18D Mola, Makati, 1200 Metro Manila
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:rivaninstitute@gmail.com"
                  className="hover:underline"
                >
                  rivaninstitute@gmail.com{" "}
                </a>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+639493760000" className="hover:underline">
                  +63 949-376-0000
                </a>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+63284252848" className="hover:underline">
                  +63 2-8425-2848 (Landline)
                </a>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                Mon–Fri, 9:00 AM–5:00 PM
              </div>
            </address>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm text-white/70 md:flex-row">
          <p>© {new Date().getFullYear()} RivanCyber. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll-to-top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-lg transition hover:bg-white/20"
        >
          <FaChevronUp className="h-5 w-5" />
        </button>
      )}

      {/* LocalBusiness JSON-LD for local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "RivanCyber Training Institute, Inc.",
            url: "https://www.rivanit.com",
            email: "rivaninstitute@gmail.com",
            telephone: "+63 949-376-0000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rivan Building, 18D Mola",
              addressLocality: "Makati",
              addressRegion: "NCR",
              postalCode: "1200",
              addressCountry: "PH",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 14.569348,
              longitude: 121.009549,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "17:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/RivanInstitute",
              "https://m.me/RivanInstitute",
              "https://www.instagram.com/rivancyberinstitute",
              "https://youtube.com/@teamrivanit",
            ],
          }),
        }}
      />
    </footer>
  );
};

export default Footer;
