// src/pages/Reviewer.jsx
import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import Accordion from "../components/reviewers/Accordion";

export default function Reviewers() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Rivan | Cisco Training";
  }, []);

  return (
    <section
      id="reviewer"
      className="bg-[#F9FAFF] min-h-screen px-6 pt-32 pb-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className="flex items-start gap-6 flex-wrap md:flex-nowrap"
          data-animate
        >
          <FaUserCheck className="text-[#0D2153] text-5xl mt-1" />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0D2153] mb-3">
              Reviewer CCNA
            </h1>
            <p className="text-gray-700 mb-6 max-w-2xl">
              This is a temporary preview for all visitors to our website. Our
              Rivan Membership program will be launching soon — thank you for
              your patience and support!
            </p>
          </div>
        </div>

        {/* Accordion with built-in defaultSections */}
        <div className="mt-12">
          <Accordion className="space-y-1" />
        </div>

        {/* Back button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47] transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
