// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((v) => !v);

  const handleNavClick = (target) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: target } });
    }
  };

  // Styles
  const linkBase = "cursor-pointer text-sm font-medium transition-colors";
  const linkIdle = "text-white/70 hover:text-white";
  const linkActive =
    "!text-white relative after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-white/80";

  const commonLinkProps = {
    spy: true,
    smooth: true,
    duration: 500,
    offset: -80,
    activeClass: linkActive,
    className: `${linkBase} ${linkIdle}`,
  };

  return (
    // Not sticky — just a normal block at the top of the page
    <nav
      className="w-full bg-[#0B142B] text-white"
      role="navigation"
      aria-label="Primary"
    >
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-[#0B142B]"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <RouterLink to="/" className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                <img
                  src={logo}
                  alt="RivanCyber logo"
                  className="h-8 w-8"
                  loading="lazy"
                  draggable="false"
                />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                RivanCyber
              </span>
            </RouterLink>
          </div>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-6">
            <ScrollLink
              to="home"
              onClick={() => handleNavClick("home")}
              {...commonLinkProps}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              onClick={() => handleNavClick("about")}
              {...commonLinkProps}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="services"
              onClick={() => handleNavClick("services")}
              {...commonLinkProps}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="courses"
              onClick={() => handleNavClick("courses")}
              {...commonLinkProps}
            >
              Courses
            </ScrollLink>
            <ScrollLink
              to="reviews"
              onClick={() => handleNavClick("reviews")}
              {...commonLinkProps}
            >
              Reviews
            </ScrollLink>
            <ScrollLink
              to="contact"
              onClick={() => handleNavClick("contact")}
              {...commonLinkProps}
            >
              Contact
            </ScrollLink>
          </div>

          {/* Desktop actions */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href="https://www.youtube.com/@teamrivanit?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open RivanCyber YouTube channel"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <FaYoutube className="h-6 w-6" />
              YouTube
            </a>
            <RouterLink
              to="/training-quotation-philippines"
              className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0B142B] hover:scale-[1.02] transition-transform focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              Request a Quote
            </RouterLink>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="xl:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M6 6L18 18M6 18L18 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Divider line for structure */}
      <div className="h-px w-full bg-white/10" />

      {/* Mobile fullscreen overlay menu (solid, no glass) */}
      <div
        id="mobile-menu"
        className={`xl:hidden fixed inset-0 z-50 bg-[#0B142B] transition-opacity duration-200 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <span className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                <img src={logo} alt="" className="h-6 w-6" />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                RivanCyber
              </span>
            </span>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M6 6L18 18M6 18L18 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-2 h-px w-full bg-white/10" />

          <div className="py-6">
            <nav className="flex flex-col gap-2">
              {[
                ["home", "Home"],
                ["about", "About"],
                ["services", "Services"],
                ["courses", "Courses"],
                ["reviews", "Reviews"],
                ["contact", "Contact"],
              ].map(([to, label]) => (
                <ScrollLink
                  key={to}
                  to={to}
                  onClick={() => handleNavClick(to)}
                  spy
                  smooth
                  duration={500}
                  offset={-80}
                  className="block rounded-lg px-3 py-3 text-lg text-white/80 hover:text-white hover:bg-white/5"
                  activeClass="!text-white"
                >
                  {label}
                </ScrollLink>
              ))}

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="https://www.youtube.com/@teamrivanit?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 text-white hover:bg-white/10"
                >
                  <FaYoutube className="h-5 w-5" />
                  YouTube
                </a>
                <RouterLink
                  to="/training-quotation-philippines"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-base font-semibold text-[#0B142B]"
                >
                  Request a Quote
                </RouterLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
