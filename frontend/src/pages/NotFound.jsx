// src/pages/NotFound.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const { pathname } = useLocation();
  const pretty = pathname === "/" ? "/" : pathname;

  return (
    <section className="min-h-[80vh] bg-[#0B142B] text-white px-6 flex items-center justify-center">
      <Helmet>
        <title>404 – Page not found | RivanCyber</title>
        <meta
          name="description"
          content="Oops! The page you’re looking for doesn’t exist. Head back to the homepage or explore our courses."
        />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://rivanit.com/404" />
      </Helmet>

      <div className="relative w-full max-w-3xl text-center">
        {/* floating stars */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {[...Array(16)].map((_, i) => (
            <span
              key={i}
              className="absolute h-[3px] w-[3px] rounded-full bg-white/30"
              style={{
                top: `${Math.random() * 90 + 5}%`,
                left: `${Math.random() * 90 + 5}%`,
                animation: `twinkle ${
                  2 + Math.random() * 2
                }s ease-in-out infinite`,
                opacity: 0.5,
              }}
            />
          ))}
        </div>

        {/* 404 + rocket animation */}
        <div className="mx-auto mb-6 grid place-items-center">
          <div className="relative">
            <h1 className="text-[82px] leading-none font-black tracking-tight">
              <span className="text-white/20">4</span>
              <span className="text-white">0</span>
              <span className="text-white/20">4</span>
            </h1>

            {/* rocket */}
            <svg
              viewBox="0 0 120 120"
              className="absolute -right-12 -top-10 w-24 drop-shadow-[0_8px_24px_rgba(0,0,0,.35)]"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              <defs>
                <linearGradient id="fire" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FFB703" />
                  <stop offset="100%" stopColor="#FB5607" />
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M68 58c12-26 10-38 10-38s-12-2-38 10l-8 20 16 16 20-8z"
                  fill="#9AE6B4"
                  stroke="#0B142B"
                  strokeWidth="2"
                />
                <circle cx="60" cy="40" r="8" fill="#1F2937" />
                <path
                  d="M44 82l-6-6 20-8 8 8-22 6z"
                  fill="url(#fire)"
                  style={{ animation: "flicker 0.8s infinite" }}
                />
              </g>
            </svg>
          </div>
        </div>

        {/* copy */}
        <p className="text-xl md:text-2xl font-semibold mb-2">
          Dude… we don’t have <span className="text-[#9AE6B4]">“{pretty}”</span>{" "}
          on our site.
        </p>
        <p className="text-white/80 mb-8">
          Maybe try <span className="text-white">/courses</span> or{" "}
          <span className="text-white">/contact</span>? Meanwhile, here’s a big
          friendly button:
        </p>

        {/* actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-md
                       hover:bg-white/20 transition"
          >
            ⬅ Go back home
          </Link>
          <Link
            to="/top-it-training-courses-philippines-2025"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#9AE6B4] text-[#0B142B] font-semibold hover:scale-[1.02] transition"
          >
            Browse Courses
          </Link>
        </div>

        {/* little tooltip/joke */}
        <p className="mt-6 text-sm text-white/60">
          Pro tip: spaces and typos can yeet you into space. 🚀
        </p>
      </div>

      {/* local keyframes */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0) rotate(-6deg); }
          50%     { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes twinkle {
          0%,100% { opacity: .2; transform: scale(1); }
          50%     { opacity: .8; transform: scale(1.4); }
        }
        @keyframes flicker {
          0%,100% { transform: scaleY(1); opacity: .9; }
          50%     { transform: scaleY(1.15); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default NotFound;
