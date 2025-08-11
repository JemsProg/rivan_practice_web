import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Courses from "../components/sections/Courses";
import VideosSection from "../components/sections/Videos";
import Partners from "../components/sections/Partners";
import Reviews from "../components/sections/Reviews";
import ContactUs from "../components/sections/ContactUs";

const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // keep your smooth-scroll behavior
    if (location.state && location.state.scrollTo) {
      const target = location.state.scrollTo;
      setTimeout(() => {
        scroller.scrollTo(target, { smooth: true, duration: 500, offset: -70 });
        navigate(location.pathname, { replace: true, state: {} });
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, navigate]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best IT training in the Philippines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RivanCyber offers hands-on courses including CCNA, CCNP and CompTIA Security+ with live labs, weekend schedules, and exam preparation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer CCNA training in Manila?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our CCNA (200-301) bootcamps run in Metro Manila with lab practice and certification-focused mentoring.",
        },
      },
      {
        "@type": "Question",
        name: "Do you have CompTIA Security+ training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide Security+ (SY0-701) training with practice labs, exam tips, and optional voucher guidance.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer CCNP ENCOR/ENARSI training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our CCNP tracks include ENCOR and ENARSI with scenario-based labs suited for network engineers.",
        },
      },
    ],
  };

  return (
    <>
      {/* React 19 head tags */}
      <title>IT Training Philippines | RivanCyber</title>
      <meta
        name="description"
        content="Hands-on IT training in the Philippines: CCNA (200-301), CCNP, and CompTIA Security+ with real labs, weekend schedules, and certification prep."
      />
      <link rel="canonical" href="https://www.rivanit.com/" />
      {/* Social preview (optional but recommended) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.rivanit.com/" />
      <meta
        property="og:title"
        content="IT Training Philippines | RivanCyber"
      />
      <meta
        property="og:description"
        content="Hands-on CCNA, CCNP & CompTIA Security+ bootcamps in the Philippines. Expert instructors. Enroll now!"
      />
      <meta
        property="og:image"
        content="https://www.rivanit.com/og-banner-1200x630.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      {/* FAQPage JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Page sections */}
      <Hero />{" "}
      {/* Ensure Hero contains ONE <h1> like: IT Training Philippines: CCNA, CCNP, Security+ */}
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="courses">
        <Courses />
      </section>
      <section id="videos">
        <VideosSection />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </>
  );
};

export default LandingPage;
