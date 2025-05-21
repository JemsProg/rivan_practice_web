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
    document.title = "RivanCyber | Best Training";

    if (location.state && location.state.scrollTo) {
      const target = location.state.scrollTo;
      // Delay scrolling to allow sections to render
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
        // Clear the state so the URL remains clean
        navigate(location.pathname, { replace: true, state: {} });
      }, 300);
    } else {
      // No scroll target passed, so scroll to top
      window.scrollTo(0, 0);
    }
  }, [location, navigate]);

  return (
    <>
      <Hero /> {/* Hero already has id="home" */}
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
