import React from 'react'

const CourseCard = ({ image, title, subtitle, description }) => {
  return (
    <div
      className="w-full relative bg-white border border-black rounded-4xl shadow p-6 flex flex-row md:flex-col transition-transform duration-300 hover:scale-105"
      style={{ minHeight: '150px' }}
    >
      {/* Image on mobile takes 1/3 width, full width on md+ */}
      <img
        src={image}
        alt={title}
        className="w-1/3 md:w-full object-contain mr-4 md:mr-0"
      />
      {/* Right side: Title and Subtitle (description hidden on mobile) */}
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-[#0D2153] mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{subtitle}</p>
        <p className="text-gray-500 text-sm mb-6 hidden md:block">{description}</p>
      </div>
    </div>
  )
}

export default CourseCard
