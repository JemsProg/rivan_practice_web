import React, { useRef, useEffect, useState } from 'react'
import { animate, inView } from 'motion'
import { FaPlay, FaYoutube } from 'react-icons/fa'

const VideosSection = () => {
  const sectionRef = useRef(null)
  const [playing, setPlaying] = useState({})

  const videos = [
    'iv0mkEx91Mc',
    'ROTt5GsPECw',
    '5Y_ray2dldU',
    'Wb-2aP6y-RU'
  ]

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('[data-animate]')
    els.forEach((el, i) => {
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
        )
      )
    })
  }, [])

  const handleClick = idx =>
    setPlaying(prev => ({ ...prev, [idx]: true }))

  return (
    <section
      id="videos"
      ref={sectionRef}
      className="bg-[#F9FAFF] pt-12 pb-32 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Title + Subscribe */}
        <div
          data-animate
          className="flex justify-between items-center mb-4"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0D2153]">
          Want a Sneak Peek of Our Training?
          </h2>
          <a
            href="https://www.youtube.com/@teamrivanit?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center px-6 py-3 border border-[#0D2153] text-[#0D2153] rounded-full hover:bg-[#EAEFFB] transition-colors"
          >
            <FaYoutube className="mr-2 w-5 h-5" />
            Subscribe
          </a>
        </div>

        {/* Subtitle */}
        <p
          data-animate
          className="text-gray-600 mb-8"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          Watch real lessons from our YouTube channel and see what our training is all about.
        </p>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((id, idx) => (
            <div
              key={id}
              data-animate
              className="bg-white rounded-lg overflow-hidden cursor-pointer"
              style={{ opacity: 0, transform: 'translateY(30px)' }}
              onClick={() => handleClick(idx)}
            >
              {playing[idx] ? (
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1`}
                    title={`Video ${idx + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative w-full pt-[56.25%]">
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaPlay className="text-white text-4xl" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideosSection
