import React from 'react'

const CourseCard = ({ image, title, subtitle, description }) => {
  return (
    <div
      className="relative bg-white border border-black rounded-4xl shadow p-6 flex flex-col transition-transform duration-300 hover:scale-105"
      style={{ minHeight: '260px' }}
    >
      {/* Top Image with border */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain mb-4 border border-black"
      />
      {/* Title, Subtitle, Description */}
      <h3 className="text-xl font-semibold text-[#0D2153] mb-1">{title}</h3>
      <p className="text-gray-600 mb-2">{subtitle}</p>
      <p className="text-gray-500 text-sm mb-6">{description}</p>
    </div>
  )
}

export default CourseCard
