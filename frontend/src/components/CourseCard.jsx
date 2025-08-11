import React from "react";

const CourseCard = ({ image, title, subtitle, description, alt }) => {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-xl"
      itemScope
      itemType="https://schema.org/Course"
    >
      {/* Media */}
      <div className="relative h-44 w-full overflow-hidden rounded-lg ring-1 ring-white/10 md:h-48">
        <img
          src={image}
          alt={alt || `${title} Training Course - RivanCyber`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          draggable="false"
          loading="lazy"
          itemProp="image"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/35 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
        <h2
          className="text-base md:text-lg font-semibold text-white leading-snug"
          itemProp="name"
        >
          {title}
        </h2>
        <p className="mt-1 text-sm text-white/75" itemProp="provider">
          {subtitle}
        </p>

        <p
          className="mt-3 hidden text-sm text-white/70 md:block"
          itemProp="description"
        >
          {description}
        </p>

        <span
          aria-hidden="true"
          className="mt-4 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-16"
        />
      </div>
    </article>
  );
};

export default CourseCard;
