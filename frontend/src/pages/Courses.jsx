// src/pages/Courses.jsx
import React, { useRef, useEffect } from "react";
import { animate, inView } from "motion";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { FiServer, FiShield, FiZap } from "react-icons/fi";

// Images
import pcnsaImg from "../assets/pcnsa.png";
import ccnaImg from "../assets/ccna.png";
import ccnpImg from "../assets/ccnp.png";
import comptiaSecurityImg from "../assets/comptia_security.png";
import itilImg from "../assets/itil.png";
import fullStackImg from "../assets/full-stack.png";

const coursesData = [
  {
    image: ccnaImg,
    imageAlt: "CCNA 200-301 course cover",
    title: "CCNA",
    subtitle: "200-301 CCNA v1.1",
    description:
      "Learn networking fundamentals, routing, switching, and security in this hands-on CCNA course—ideal for beginners and IT pros.",
    link: "/top-it-training-courses-philippines-2025/ccna-200-301",
  },
  {
    image: comptiaSecurityImg,
    imageAlt: "CompTIA Security+ SY0-701 course cover",
    title: "CompTIA Security+",
    subtitle: "SY0-701",
    description:
      "Gain essential cybersecurity skills including threat detection and risk management in our hands-on Security+ training.",
    link: "/top-it-training-courses-philippines-2025/comptia-security-plus-syo-701",
  },
  {
    image: ccnpImg,
    imageAlt: "CCNP Enterprise ENCOR & ENARSI course cover",
    title: "CCNP Enterprise",
    subtitle: "ENCOR × ENARSI",
    description:
      "Advance your career with ENCOR & ENARSI—enterprise routing, switching, security, and network automation.",
    link: "/top-it-training-courses-philippines-2025/ccnp-encor-enarsi",
  },
  {
    image: itilImg,
    imageAlt: "ITIL Foundation course cover",
    title: "ITIL Foundation",
    subtitle: "ITIL v4 / v3",
    description:
      "Master IT service management to improve operations and align services with business goals.",
    link: "/top-it-training-courses-philippines-2025/itil-v4-v3",
  },
  {
    image: fullStackImg,
    imageAlt: "Full Stack Development course cover",
    title: "Full Stack Development",
    subtitle: "React • Django • PostgreSQL",
    description:
      "Front end to back end: React, Django REST, PostgreSQL, and deployment on Linux.",
    link: "/top-it-training-courses-philippines-2025/full-stack-web-development-react-django-postgresql",
  },
  {
    image: pcnsaImg,
    imageAlt: "Palo Alto PCNSA course cover",
    title: "Palo Alto PCNSA",
    subtitle: "Palo Alto Networks",
    description:
      "Configure, secure, and troubleshoot enterprise firewalls with PCNSA-aligned labs.",
    link: "/top-it-training-courses-philippines-2025/palo-alto-network-training",
  },
];

const Courses = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll("[data-animate]");
    elements.forEach((el, index) => {
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: index * 0.08, easing: "ease-in-out" }
        )
      );
    });
  }, []);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: coursesData.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: `${c.title} — ${c.subtitle}`,
        description: c.description,
        url: `https://www.rivanit.com${c.link}`,
        image: `https://www.rivanit.com${c.link}/og.jpg`, // optional: point to a real image if you have one
        provider: {
          "@type": "Organization",
          name: "RivanCyber Training Institute",
          url: "https://www.rivanit.com",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "PHP",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.rivanit.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "IT Training Courses Philippines",
        item: "https://www.rivanit.com/top-it-training-courses-philippines-2025",
      },
    ],
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B142B] text-white py-16 px-4"
      aria-labelledby="courses-heading"
    >
      {/* React 19 head tags */}
      <title>
        IT Training Courses Philippines (2025) | CCNA, CCNP, Security+ |
        RivanCyber
      </title>
      <meta
        name="description"
        content="Explore our top IT training courses in the Philippines: CCNA (200-301), CCNP Enterprise, CompTIA Security+, ITIL, Full Stack, and Palo Alto PCNSA."
      />
      <link
        rel="canonical"
        href="https://www.rivanit.com/top-it-training-courses-philippines-2025"
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* soft blobs */}
      <div aria-hidden="true">
        <div className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Heading: make this your keyworded H1 */}
        <div
          data-animate
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="text-center mb-10"
        >
          <h1
            id="courses-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Top IT Training Courses in the Philippines: CCNA, CCNP, CompTIA
            Security+
          </h1>
          <p className="mt-2 text-white/80">
            Future-proof your skills with industry-leading training, live labs,
            and certification prep.
          </p>

          {/* Internal keyworded links (helps crawling and relevance) */}
          <nav className="mt-3 text-sm text-white/70">
            <Link
              to="/top-it-training-courses-philippines-2025/ccna-200-301"
              className="underline hover:no-underline mr-3"
            >
              CCNA training Philippines
            </Link>
            <Link
              to="/top-it-training-courses-philippines-2025/ccnp-encor-enarsi"
              className="underline hover:no-underline mr-3"
            >
              CCNP training Philippines
            </Link>
            <Link
              to="/top-it-training-courses-philippines-2025/comptia-security-plus-syo-701"
              className="underline hover:no-underline"
            >
              CompTIA Security+ training Philippines
            </Link>
          </nav>
        </div>

        {/* Feature tiles */}
        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12"
        >
          {[
            {
              icon: <FiServer className="h-6 w-6" />,
              title: "Network Training",
              desc: "Cisco-focused tracks from fundamentals to enterprise infrastructure.",
            },
            {
              icon: <FiShield className="h-6 w-6" />,
              title: "Security Training",
              desc: "Defensive skills and cert prep for CompTIA, Palo Alto, and more.",
            },
            {
              icon: <FiZap className="h-6 w-6" />,
              title: "Network Automation",
              desc: "NetDevOps basics—APIs, Python, and automation best practices.",
            },
          ].map(({ icon, title, desc }) => (
            <li
              key={title}
              data-animate
              style={{ opacity: 0, transform: "translateY(24px)" }}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 md:p-6
                         transition-all hover:bg-white/10 hover:translate-y-[-2px]
                         focus-within:ring-white/30"
              tabIndex={0}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                {icon}
              </div>
              <h2 className="mt-3 text-lg font-bold">{title}</h2>
              <p className="mt-1 text-sm text-white/80">{desc}</p>
            </li>
          ))}
        </ul>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {coursesData.map((course, index) => (
            <div
              key={course.title + index}
              data-animate
              style={{ opacity: 0, transform: "translateY(24px)" }}
              className="h-full"
            >
              <Link
                to={course.link}
                aria-label={`${course.title} ${course.subtitle} — view course`}
                className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-3xl"
              >
                <CourseCard
                  image={course.image}
                  imageAlt={course.imageAlt}
                  loading="lazy"
                  width={600} // set real intrinsic size if you know it
                  height={400} // to reduce CLS
                  title={course.title}
                  subtitle={course.subtitle}
                  description={course.description}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
