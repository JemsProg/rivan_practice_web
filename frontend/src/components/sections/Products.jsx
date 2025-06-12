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
        () => {
          animate(el, { opacity: 1, y: 0 }, { duration: 0.6, delay: i * 0.1 });
        },
        { once: true }
      )
    );
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="it-products"
      ref={sectionRef}
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <div className="w-full max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 mb-12 text-left">
        <h2 className="text-base font-semibold text-[#0D2153] uppercase">
          Our Product Lineup
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Top IT Equipment & Services
        </p>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Browse our selection of enterprise-grade switches, firewalls, and
          access points from Cisco, Palo Alto, Fortinet, and more.
        </p>
      </div>

      {/* Carousel (Courses) */}
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="px-3 opacity-0 translate-y-4"
              data-animate
            >
              <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-[#0D2153]">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 flex-grow">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Customers Also Purchased */}
      <div className="max-w-7xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Customers Also Purchased
        </h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="p-4">
                <h4 className="text-sm font-medium text-gray-700">
                  {product.name}
                </h4>
                <p className="mt-1 text-xs text-gray-500">{product.vendor}</p>
                <p className="mt-2 text-sm font-semibold text-gray-900">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
