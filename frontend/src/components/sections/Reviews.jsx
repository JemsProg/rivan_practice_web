// src/components/Reviews.jsx
import React, { useRef, useEffect } from "react";
import { animate, inView } from "motion";
import { FaStar } from "react-icons/fa";

import student_1 from "../../assets/student_1.jpg";
import student_3 from "../../assets/student_2.jpg";
import student_2 from "../../assets/student_3.jpg";

const Reviews = () => {
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

  const reviewsData = [
    {
      quote:
        "Best learning experience! Got my CCNA bootcamp here and the instructors are top-notch. Don’t hesitate to enroll—worth every penny.",
      name: "Christian Temporado",
      rating: 5,
      profile: student_1,
    },
    {
      quote:
        "Rivan has the best instructors, support team, and up-to-date topics and equipment. Zero-to-hero experience—highly recommended!",
      name: "Mervin-Jenny Lota",
      rating: 5,
      profile: student_2,
    },
    {
      quote:
        "They provide the best, updated IT trainings! Took my CCNA and VMware classes and passed my certifications. Thank you #teamrivan.",
      name: "Earl Kent Justine Togonon",
      rating: 5,
      profile: student_3,
    },
  ];

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="bg-[#0B142B] text-white py-24 px-4"
      aria-labelledby="reviews-heading"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="text-center"
        >
          <h2
            id="reviews-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Student Reviews
          </h2>
          <p className="mt-2 text-white/80">
            Real feedback from IT professionals who trained with us in the
            Philippines.
          </p>
        </div>

        {/* Reviews Grid */}
        <ul role="list" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((r, i) => (
            <li key={i}>
              <article
                data-animate
                style={{ opacity: 0, transform: "translateY(24px)" }}
                className="group relative h-full rounded-2xl bg-white/7 ring-1 ring-white/10 p-5 md:p-6 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)] transition-transform hover:-translate-y-1"
                onMouseMove={(e) => {
                  const t = e.currentTarget.getBoundingClientRect();
                  const rx = (e.clientX - t.left) / t.width - 0.5;
                  const ry = (e.clientY - t.top) / t.height - 0.5;
                  e.currentTarget.style.transform = `translateY(-4px) rotateX(${
                    ry * 2
                  }deg) rotateY(${rx * -2}deg)`;
                }}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
              >
                {/* quote */}
                <p className="text-white/90 leading-relaxed">“{r.quote}”</p>

                {/* footer */}
                <div className="mt-6 flex items-center">
                  <img
                    src={r.profile}
                    alt={`${r.name} profile`}
                    className="h-12 w-12 rounded-full object-cover ring-1 ring-white/20"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    width={48}
                    height={48}
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{r.name}</p>
                    <div
                      className="flex items-center"
                      aria-label={`${r.rating} out of 5 stars`}
                    >
                      {Array.from({ length: r.rating }).map((_, s) => (
                        <FaStar
                          key={s}
                          className="h-4 w-4 text-yellow-400 mr-1"
                          aria-hidden="true"
                        />
                      ))}
                      <span className="sr-only">{r.rating} out of 5 stars</span>
                    </div>
                  </div>
                </div>

                {/* subtle glow on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/8 to-transparent"
                />
              </article>
            </li>
          ))}
        </ul>

        {/* JSON-LD: reviews as an ItemList (safe for homepage) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: reviewsData.map((r, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                item: {
                  "@type": "Review",
                  reviewBody: r.quote,
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: String(r.rating),
                    bestRating: "5",
                  },
                  author: { "@type": "Person", name: r.name },
                  itemReviewed: {
                    "@type": "Organization",
                    name: "RivanCyber Training Institute",
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

export default Reviews;
