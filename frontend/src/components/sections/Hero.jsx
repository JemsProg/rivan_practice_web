import React from 'react'
import { Link } from 'react-router-dom'

// Update these imports with the correct paths to your images
import heroLogo from '../../assets/hero_logo.png'
import developIcon from '../../assets/we_develop.png'
import discoverIcon from '../../assets/we_discover.png'
import nurtureIcon from '../../assets/we_nurture.png'

const Hero = () => {
  return (
    <section className="bg-[#F9FAFF] py-12">
      {/* Top Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Left: Big Logo */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={heroLogo}
            alt="Rivan Technological Institute Logo"
            className="max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right: Text + CTA */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg md:text-xl font-medium text-gray-500">
            Rivan Technological Institute
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Nurturing <span className="text-[#0D2153]">Tech Skills</span> and Fostering{' '}
            <span className="text-[#0D2153]">Professional Growth</span> for Tomorrow's Leaders.
          </h1>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/quotation"
              className="px-6 py-3 bg-[#0D2153] text-white rounded-full hover:bg-[#0B1C47]"
            >
              Request a Quote
            </Link>
            <Link
              to="/courses"
              className="px-6 py-3 border border-[#0D2153] text-[#0D2153] rounded-full hover:bg-[#EAEFFB]"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Info Row: We Develop, We Nurture, We Discover */}
      <div className="container mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: We Develop */}
        <div className="flex items-start space-x-4">
          <img
            src={developIcon}
            alt="We Develop Icon"
            className="h-12 w-12 flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#0D2153]">We Develop</h3>
            <p className="text-gray-600">
              Empowering IT individuals to reach their full potential.
            </p>
          </div>
        </div>

        {/* Card 2: We Nurture */}
        <div className="flex items-start space-x-4">
          <img
            src={nurtureIcon}
            alt="We Nurture Icon"
            className="h-12 w-12 flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#0D2153]">We Nurture</h3>
            <p className="text-gray-600">
              Fostering growth and innovation in the ever-evolving world of Information Technology.
            </p>
          </div>
        </div>

        {/* Card 3: We Discover */}
        <div className="flex items-start space-x-4">
          <img
            src={discoverIcon}
            alt="We Discover Icon"
            className="h-12 w-12 flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#0D2153]">We Discover</h3>
            <p className="text-gray-600">
              Uncovering the brightest minds in the IT landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
