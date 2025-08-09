import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { inView, animate } from "motion";
import { courses } from "../data/courses";
import { products } from "../data/products";

const Products = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elems = sectionRef.current.querySelectorAll("[data-animate]");
    elems.forEach((el, i) =>
      inView(
        el,
        () =>
          animate(
            el,
            { opacity: 1, y: 0 },
            { duration: 0.6, delay: i * 0.08, easing: "ease-out" }
          ),
        { once: true }
      )
    );
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    cssEase: "ease",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="it-products"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B142B] py-16 sm:py-20"
      aria-labelledby="products-heading"
    >
      {/* subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      >
        <div className="absolute -top-40 left-1/2 h-96 w-[56rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        {/* Heading */}
        <header
          className="mb-10 sm:mb-12"
          data-animate
          style={{ opacity: 0, transform: "translateY(18px)" }}
        >
          <h2
            id="products-heading"
            className="text-sm font-semibold tracking-widest text-white/70 uppercase"
          >
            Our Product Lineup
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Top IT Equipment &amp; Services
          </p>
          <p className="mt-3 max-w-2xl text-white/70">
            Enterprise-grade switches, firewalls, and access points from Cisco,
            Palo Alto, Fortinet, and more.
          </p>
        </header>

        {/* Carousel (Courses) */}
        <div
          role="region"
          aria-label="Featured training courses"
          className="rounded-2xl"
        >
          <Slider {...settings}>
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="px-3"
                data-animate
                style={{ opacity: 0, transform: "translateY(18px)" }}
              >
                <article
                  className="group h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl
                             shadow-[0_10px_40px_-15px_rgba(2,6,23,.6)] transition-transform duration-300
                             hover:-translate-y-1 hover:shadow-[0_18px_50px_-12px_rgba(2,6,23,.7)]"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={course.image}
                      alt={`${course.title} – ${course.subtitle}`}
                      loading="lazy"
                      className="h-44 w-full object-cover"
                    />
                    {/* shine */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute -inset-x-10 -top-10 h-24 rotate-6 bg-white/10 blur-xl" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {course.title}
                  </h3>
                  <p className="text-sm text-white/60">{course.subtitle}</p>
                  <p className="mt-2 line-clamp-3 text-sm text-white/70">
                    {course.description}
                  </p>
                </article>
              </div>
            ))}
          </Slider>
        </div>

        {/* Customers Also Purchased */}
        <div className="mt-14 sm:mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Customers Also Purchased
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, idx) => (
              <article
                key={idx}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                           shadow-[0_10px_40px_-15px_rgba(2,6,23,.6)] transition-transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={`${product.name} by ${product.vendor}`}
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-medium text-white">
                    {product.name}
                  </h4>
                  <p className="mt-1 text-xs text-white/60">{product.vendor}</p>
                  <p className="mt-2 text-sm font-semibold text-white/90">
                    {product.category}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal OfferCatalog JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "RivanCyber IT Products & Services",
            itemListElement: products.slice(0, 12).map((p) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: p.name,
                brand: p.vendor,
                category: p.category,
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default Products;
