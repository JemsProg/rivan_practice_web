// src/pages/Reviewer.jsx

import React, { useRef, useEffect } from 'react';
import { animate, inView } from 'motion';
import { Link } from 'react-router-dom';
import { FaUserCheck } from 'react-icons/fa';

const Reviewers = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('[data-animate]');
    els.forEach((el, i) =>
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
        )
      )
    );
  }, []);

  return (
    <section
      id="reviewer"
      ref={sectionRef}
      className="bg-[#F9FAFF] min-h-screen flex items-start justify-center px-4 pt-32 pb-16"
    >
      <div
        data-animate
        className="text-center max-w-md mx-auto"
        style={{ opacity: 0, transform: 'translateY(30px)' }}
      >
        <FaUserCheck className="mx-auto mb-6 text-[#0D2153] text-6xl" />
        <h1 className="text-3xl md:text-4xl font-semibold text-[#0D2153] mb-4">
          Reviewer Feature Coming Soon
        </h1>
        <p className="text-gray-600 mb-8">
          We’re hard at work building the Reviewers page. Check back soon for updates!
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47] transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default Reviewers;
