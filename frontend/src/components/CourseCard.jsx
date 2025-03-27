import React from 'react'

const CourseCard = ({ image, title, subtitle, description, link }) => {
  return (
    <div
      className="relative bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow"
      style={{ minHeight: '260px' }} // Adjust as needed
    >
      {/* Top Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-contain mb-4"
      />

      {/* Title, Subtitle, Description (left-aligned) */}
      <h3 className="text-xl font-bold text-[#0D2153] mb-1">
        {title}
      </h3>
      <p className="text-gray-600 mb-2">
        {subtitle}
      </p>
      <p className="text-gray-500 text-sm">
        {description}
      </p>

      {/* "Learn More" link at bottom-right */}
      <a
        href={link}
        className="text-blue-600 font-medium hover:underline absolute bottom-6 right-6"
      >
        Learn More &rarr;
      </a>
    </div>
  )
}

export default CourseCard
