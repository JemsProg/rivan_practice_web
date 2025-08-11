// src/components/Courses.jsx
import React, { useRef, useEffect, useState, useMemo } from "react";
import { animate, inView } from "motion";
import { Link } from "react-router-dom";
import CourseCard from "../CourseCard";

import pcnsaImg from "../../assets/pcnsa.png";
import ccnaImg from "../../assets/ccna.png";
import ccnpImg from "../../assets/ccnp.png";
import comptiaSecurityImg from "../../assets/comptia_security.png";
import itilImg from "../../assets/itil.png";
import fullStackImg from "../../assets/full-stack.png";

const SITE = "https://www.rivanit.com";

const Courses = () => {
  const sectionRef = useRef(null);
  const hoverRef = useRef(false);

  const [pageSize, setPageSize] = useState(() =>
    window.innerWidth < 768 ? 1 : 3
  );
  const [currentPage, setCurrentPage] = useState(0);

  const coursesData = useMemo(
    () => [
      {
        title: "CCNA Training",
        subtitle: "200-301 CCNA v1.1",
        description:
          "Networking fundamentals, routing, switching, and security—hands-on labs aligned with the CCNA exam.",
        img: ccnaImg,
        link: "/top-it-training-courses-philippines-2025/ccna-200-301",
      },
      {
        title: "CompTIA Security+",
        subtitle: "SY0-701",
        description:
          "Threat detection, hardening, and risk management—Security+ prep with practical exercises.",
        img: comptiaSecurityImg,
        link: "/top-it-training-courses-philippines-2025/comptia-security-plus-syo-701",
      },
      {
        title: "Full Stack Development",
        subtitle: "React • Django • PostgreSQL",
        description:
          "React frontend, Django REST APIs, PostgreSQL database, and Ubuntu deployment.",
        img: fullStackImg,
        link: "/top-it-training-courses-philippines-2025/full-stack-web-development-react-django-postgresql",
      },
      {
        title: "ITIL Foundation",
        subtitle: "Service Management Essentials",
        description:
          "Learn ITIL best practices to align IT services with business goals.",
        img: itilImg,
        link: "/top-it-training-courses-philippines-2025/itil-v4-v3",
      },
      {
        title: "CCNP ENCOR",
        subtitle: "Enterprise Core",
        description:
          "Enterprise infrastructure, security, and automation for CCNP ENCOR.",
        img: ccnpImg,
        link: "/top-it-training-courses-philippines-2025/ccnp-encor-enarsi",
      },
      {
        title: "PCNSA",
        subtitle: "Palo Alto Networks",
        description:
          "Configure and secure networks with Palo Alto Networks technologies.",
        img: pcnsaImg,
        link: "/top-it-training-courses-philippines-2025/palo-alto-network-training",
      },
    ],
    []
  );

  const pageCount = Math.ceil(coursesData.length / pageSize);
  const visibleCourses = coursesData.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) =>
      inView(el, () =>
        animate(el, { opacity: 1, y: 0 }, { duration: 0.6, delay: i * 0.1 })
      )
    );
  }, []);

  useEffect(() => {
    const onResize = () => {
      const newSize = window.innerWidth < 768 ? 1 : 3;
      setPageSize(newSize);
      setCurrentPage(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoverRef.current) {
        setCurrentPage((p) => (p + 1) % pageCount);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [pageCount]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0B142B] text-white pt-16 pb-28 px-4"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      aria-labelledby="courses-heading"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            id="courses-heading"
            data-animate
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            Explore Our IT Training Courses
          </h2>
          <p
            data-animate
            className="text-gray-300"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            Networking, cybersecurity, and development — all taught by experts
            in the Philippines.
          </p>
          {/* sr-only keyword helper */}
          <p className="sr-only">
            IT training Philippines including CCNA training, CCNP training, and
            CompTIA Security+ courses.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {visibleCourses.map((course, idx) => (
            <div
              key={idx}
              data-animate
              style={{ opacity: 0, transform: "translateY(30px)" }}
              className="max-w-[350px] mx-auto h-full flex"
            >
              <Link
                to={course.link}
                className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all duration-300 shadow-lg h-full flex flex-col"
              >
                <CourseCard
                  image={course.img}
                  title={course.title}
                  subtitle={course.subtitle}
                  description={course.description}
                  alt={`${course.title} training Philippines – RivanCyber`}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Dot Pagination */}
        <div
          className="flex justify-center mt-8 space-x-3"
          role="tablist"
          aria-label="Courses pagination"
        >
          {Array.from({ length: pageCount }).map((_, page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`h-3 w-3 rounded-full transition-all ${
                currentPage === page
                  ? "bg-white scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${page + 1}`}
              aria-selected={currentPage === page}
              role="tab"
            />
          ))}
        </div>

        {/* Browse All */}
        <div
          data-animate
          className="mt-12 text-center"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <Link
            to="/top-it-training-courses-philippines-2025"
            className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-white/15 transition-colors"
          >
            Browse All Courses
          </Link>
        </div>

        {/* JSON-LD: ItemList of the courses on this section */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: coursesData.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE}${c.link}`,
                item: {
                  "@type": "Course",
                  name: c.title,
                  description: c.description,
                  provider: {
                    "@type": "Organization",
                    name: "RivanCyber Training Institute",
                    url: SITE,
                  },
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default Courses;
