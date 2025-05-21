import React, { useRef, useEffect, useState } from "react";
import { animate, inView } from "motion";
import { Link } from "react-router-dom";
import CourseCard from "../CourseCard";

// Course images
import pcnsaImg from "../../assets/pcnsa.png";
import ccnaImg from "../../assets/ccna.png";
import ccnpImg from "../../assets/ccnp.png";
import comptiaSecurityImg from "../../assets/comptia_security.png";
import itilImg from "../../assets/itil.png";
import fullStackImg from "../../assets/full-stack.png";

const Courses = () => {
  const sectionRef = useRef(null);

  // 0-based index of the first item on the current “page”
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine how many cards per page: 1 on mobile (<768px), else 3
  const [pageSize, setPageSize] = useState(() =>
    window.innerWidth < 768 ? 1 : 3
  );

  useEffect(() => {
    // Animate in when scrolled into view
    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) => {
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: "ease-in-out" }
        )
      );
    });
  }, []);

  useEffect(() => {
    // Listen for resizes and update pageSize
    const onResize = () => setPageSize(window.innerWidth < 768 ? 1 : 3);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const coursesData = [
    {
      title: "CCNA",
      subtitle: "200-301 CCNA v1.1",
      description:
        "Learn networking fundamentals, routing, switching, and security in our hands-on CCNA course—ideal for beginners and IT pros.",
      img: ccnaImg,
      link: "/courses/ccna-training",
    },
    {
      title: "CompTIA Security+",
      subtitle: "CompTIA Security+",
      description:
        "Gain essential cybersecurity skills including threat detection and risk management in our hands-on Security+ training.",
      img: comptiaSecurityImg,
      link: "/courses/comptia-security-plus-training",
    },
    {
      title: "Full Stack Development",
      subtitle: "React.js, Django, PostgreSQL",
      description:
        "Become a full stack developer with hands-on training on React.js frontend, Django backend, PostgreSQL database, and Ubuntu for deployment.",
      img: fullStackImg,
      link: "/courses/full-stack-web-development-training",
    },
    {
      title: "ITIL",
      subtitle: "ITIL Foundation",
      description:
        "Master IT service management best practices to improve IT operations and align services with business goals.",
      img: itilImg,
      link: "/courses/itil-training",
    },
    {
      title: "CCNP ENCOR",
      subtitle: "Cisco CCNP ENCOR",
      description:
        "Gain in-depth knowledge of enterprise infrastructure and network automation through CCNP ENCOR training.",
      img: ccnpImg,
      link: "/courses/ccnp-training",
    },
    {
      title: "PCNSA",
      subtitle: "Palo Alto Networks",
      description:
        "Gain hands-on experience configuring and securing networks with Palo Alto Networks technologies.",
      img: pcnsaImg,
      link: "/courses/palo-alto-training",
    },
  ];

  // Compute pagination
  const pageCount = Math.ceil(coursesData.length / pageSize);
  const currentPage = Math.floor(currentIndex / pageSize);

  // Slice out only the cards for the current page
  const visibleCourses = coursesData.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  const goToPage = (page) => {
    setCurrentIndex(page * pageSize);
  };

  return (
    <section ref={sectionRef} className="bg-[#F9FAFF] pt-12 pb-32 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            data-animate
            className="text-3xl md:text-4xl font-semibold text-[#0D2153] mb-2"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            What courses we have
          </h2>
          <p
            data-animate
            className="text-gray-600"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            Enhance Your Skills with Our Expert-Led Courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {visibleCourses.map((course, idx) => (
            <div
              key={idx}
              data-animate
              style={{
                opacity: 0,
                transform: "translateY(30px)",
              }}
              className="max-w-[350px] mx-auto h-full flex"
            >
              <Link
                to={course.link}
                className="rounded-4xl transition-shadow duration-300 hover:shadow-lg h-full flex flex-col"
              >
                <CourseCard
                  image={course.img}
                  title={course.title}
                  subtitle={course.subtitle}
                  description={course.description}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Dot Pagination */}
        <div className="flex justify-center mt-8 space-x-3 md:space-x-2">
          {Array.from({ length: pageCount }).map((_, page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              aria-label={`Go to page ${page + 1}`}
              className={`
                rounded-full transition-transform duration-200
                ${
                  currentPage === page
                    ? "bg-[#0D2153] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }
                w-4 h-4 md:w-3 md:h-3
              `}
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
            className="px-6 py-3 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47] transition-colors"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
