// src/components/VideosSection.jsx
import React, { useRef, useEffect, useState } from "react";
import { animate, inView } from "motion";
import { FaPlay, FaYoutube } from "react-icons/fa";

const YT = (id, autoplay = false) =>
  `https://www.youtube-nocookie.com/embed/${id}?${[
    autoplay ? "autoplay=1" : "autoplay=0",
    "mute=1",
    "controls=1",
    "playsinline=1",
    "rel=0",
    "modestbranding=1",
  ].join("&")}`;

const VideosSection = () => {
  const sectionRef = useRef(null);
  const [playing, setPlaying] = useState({ featured: false, sides: {} });

  const videos = [
    { id: "iv0mkEx91Mc", title: "Rivan CCNA Training — Day 1 Preview" }, // featured
    { id: "ROTt5GsPECw", title: "CCNA Routing & Switching Demo" },
    { id: "5Y_ray2dldU", title: "Full-Stack: React + Django Walkthrough" },
    { id: "Wb-2aP6y-RU", title: "Security+: Threats & Hardening Basics" },
  ];

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) =>
      inView(el, () =>
        animate(el, { opacity: 1, y: 0 }, { duration: 0.6, delay: i * 0.08 })
      )
    );
  }, []);

  return (
    <section
      id="videos"
      ref={sectionRef}
      className="bg-[#0B142B] px-4 pt-14 pb-28"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Want a Sneak Peek of Our IT Training?
          </h2>
          <a
            href="https://www.youtube.com/@teamrivanit?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-700 transition-colors shadow-md"
          >
            <FaYoutube className="h-5 w-5" />
            Subscribe on YouTube
          </a>
        </div>

        <p
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="text-white/80 mb-8 max-w-3xl"
        >
          Short clips from our CCNA, Security+, and Full-Stack classes—see how
          we teach and the projects you’ll build.
        </p>

        {/* Layout: 3/4 featured + 1/4 list */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Featured */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="lg:col-span-3"
          >
            <div className="group relative rounded-2xl ring-1 ring-white/10 bg-white/5 p-2 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)]">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                {playing.featured ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={YT(videos[0].id, true)}
                    title={videos[0].title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setPlaying((p) => ({ ...p, featured: true }))
                    }
                    className="absolute inset-0"
                    aria-label={`Play: ${videos[0].title}`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videos[0].id}/maxresdefault.jpg`}
                      alt={`Preview: ${videos[0].title}`}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                      draggable="false"
                    />
                    {/* overlay & play ripple */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="relative inline-flex items-center justify-center">
                        <span className="absolute inline-block h-16 w-16 rounded-full bg-white/20 animate-ping" />
                        <FaPlay className="relative text-white text-4xl drop-shadow-lg" />
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Side list */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="flex flex-col gap-4"
          >
            {videos.slice(1).map((v, i) => {
              const isPlaying = playing.sides?.[i];
              return (
                <div
                  key={v.id}
                  className="group rounded-xl ring-1 ring-white/10 bg-white/5 p-1 hover:ring-white/20 transition"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    {isPlaying ? (
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={YT(v.id, true)}
                        title={v.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setPlaying((p) => ({
                            ...p,
                            sides: { ...p.sides, [i]: true },
                          }))
                        }
                        className="absolute inset-0 text-left"
                        aria-label={`Play: ${v.title}`}
                        title={v.title}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                          alt={`Preview: ${v.title}`}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          loading="lazy"
                          draggable="false"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                        <span className="absolute inset-0 grid place-items-center">
                          <FaPlay className="text-white text-3xl drop-shadow-md" />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* JSON-LD for video SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: videos.map((v, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                item: {
                  "@type": "VideoObject",
                  name: v.title,
                  thumbnailUrl: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
                  embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
                  publisher: {
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

export default VideosSection;
