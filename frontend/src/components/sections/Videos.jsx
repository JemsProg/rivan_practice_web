import React, { useRef, useEffect, useState } from 'react';
import { animate, inView } from 'motion';
import { FaPlay, FaYoutube } from 'react-icons/fa';

const VideosSection = () => {
  const sectionRef = useRef(null);
  const [playing, setPlaying] = useState({});
  const [featuredPlaying, setFeaturedPlaying] = useState(false);

  const videos = [
    'iv0mkEx91Mc',  // featured
    'ROTt5GsPECw',
    '5Y_ray2dldU',
    'Wb-2aP6y-RU'
  ];

  const featuredVideo = videos[0];
  const sideVideos    = videos.slice(1);

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('[data-animate]');
    els.forEach((el, i) => {
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
        )
      );
    });
  }, []);

  const handleClick = idx =>
    setPlaying(prev => ({ ...prev, [idx]: true }));

  return (
    <section
      id="videos"
      ref={sectionRef}
      className="bg-white pt-12 pb-32 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div
          data-animate
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0D2153] mb-4 md:mb-0">
            Want a Sneak Peek of Our Training?
          </h2>
          <a
            href="https://www.youtube.com/@teamrivanit?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border border-[#0D2153] text-[#0D2153] rounded-full hover:bg-[#EAEFFB] transition-colors"
          >
            <FaYoutube className="mr-2 w-5 h-5" />
            Subscribe
          </a>
        </div>

        {/* Subtitle */}
        <p
          data-animate
          className="text-gray-600 mb-12"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          Watch real lessons from our YouTube channel and see what our training is all about.
        </p>

        {/* Two‐column: featured (¾) + side (¼), children stretched */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Featured video (3/4) */}
          <div
            data-animate
            onClick={() => setFeaturedPlaying(true)}
            style={{ opacity: 0, transform: 'translateY(30px)' }}
            className="w-full lg:w-3/4 bg-white rounded-lg overflow-hidden cursor-pointer transition-shadow duration-200 hover:shadow-[0_0_15px_rgba(13,33,83,0.8)]"
          >
            {featuredPlaying ? (
              <iframe
                className="w-full h-full aspect-video"
                src={`https://www.youtube.com/embed/${featuredVideo}?autoplay=1&controls=1`}
                title="Featured video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full aspect-video">
                <img
                  src={`https://img.youtube.com/vi/${featuredVideo}/hqdefault.jpg`}
                  alt="Featured video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlay className="text-white text-5xl" />
                </div>
              </div>
            )}
          </div>

          {/* Side videos (1/4), with gaps */}
          <div className="w-full lg:w-1/4 flex flex-col space-y-6">
            {sideVideos.map((id, i) => {
              const idx = i + 1;
              return (
                <div
                  key={id}
                  data-animate
                  onClick={() => handleClick(idx)}
                  style={{ opacity: 0, transform: 'translateY(30px)' }}
                  className="bg-white rounded-lg overflow-hidden cursor-pointer transition-shadow duration-200 hover:shadow-[0_0_15px_rgba(13,33,83,0.8)]"
                >
                  {playing[idx] ? (
                    <iframe
                      className="w-full aspect-video"
                      src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1`}
                      title={`Video ${idx + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="relative w-full aspect-video">
                      <img
                        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                        alt={`Video thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaPlay className="text-white text-4xl" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
