// src/components/ContactUs.jsx
import React, { useRef, useEffect, useState } from "react";
import { animate, inView } from "motion";
import { FaCheck } from "react-icons/fa";
import { BASE_URL } from "../../api/Apikey";

const ContactUs = () => {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    hp: "", // honeypot
  });

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) =>
      inView(el, () =>
        animate(el, { opacity: 1, y: 0 }, { duration: 0.6, delay: i * 0.08 })
      )
    );
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (form.hp) return; // bots fill hidden field -> ignore

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please fill out all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "", hp: "" });
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.241281374461!2d121.0069741!3d14.569347699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9cc95c7616b%3A0xbb5c65d7ce316fd0!2sRivanCyber%20Training%20Institute%20-%20Makati%20Bldg!5e0!3m2!1sen!2sph!4v1697094991496!5m2!1sen!2sph";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#0B142B] text-white px-4 pt-20 pb-28"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT: Map + stats in one column */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="flex flex-col gap-3"
          >
            {/* Map card */}
            <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-2 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                <iframe
                  title="RivanCyber Training Institute — Makati"
                  src={mapSrc}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Open in Maps chip (stays inside card) */}
              <a
                href="https://maps.google.com/?q=RivanCyber+Training+Institute+Makati"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full
                           bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 text-sm
                           text-white hover:bg-white/20 transition"
              >
                Open in Google Maps <span aria-hidden>↗</span>
              </a>
            </div>

            {/* Stats strip below the map */}
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
              <div className="flex flex-wrap flex-col gap-3">
                <div className="flex flex-wrap gap-5">
                  <div className="flex min-w-[46%] flex-1 items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 md:min-w-[22%]">
                    <span className="inline-grid h-7 w-7 place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
                      🏛️
                    </span>
                    <div className="leading-tight">
                      <div className="text-xs text-white/70">Established</div>
                      <div className="font-semibold text-white">Since 2000</div>
                    </div>
                  </div>

                  <div className="flex min-w-[46%] flex-1 items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 md:min-w-[22%]">
                    <span className="inline-grid h-7 w-7 place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
                      🎓
                    </span>
                    <div className="leading-tight">
                      <div className="text-xs text-white/70">
                        Cert. Pass Rate*
                      </div>
                      <div className="font-semibold text-white">99%</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-5">
                  <div className="flex min-w-[46%] flex-1 items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 md:min-w-[22%]">
                    <span className="inline-grid h-7 w-7 place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
                      👥
                    </span>
                    <div className="leading-tight">
                      <div className="text-xs text-white/70">
                        Learners Trained
                      </div>
                      <div className="font-semibold text-white">20,000+</div>
                    </div>
                  </div>

                  <div className="flex min-w-[46%] flex-1 items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 md:min-w-[22%]">
                    <span className="inline-grid h-7 w-7 place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
                      🗓️
                    </span>
                    <div className="leading-tight">
                      <div className="text-xs text-white/70">Schedules</div>
                      <div className="font-semibold text-white">
                        Weekend & Evening
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-white/60">
                *Pass rate based on students who completed training and sat the
                exam.
              </p>
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div
            data-animate
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)]"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Contact RivanCyber
            </h2>
            <p className="mt-2 text-white/80">
              Ask about course schedules, company training, or certification
              prep.
            </p>

            {/* quick contact chips (crawlable for SEO) */}
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <a
                href="teamrivan@rvci.org"
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-white/90 hover:bg-white/20"
              >
                teamrivan@rvci.org
              </a>
              <a
                href="tel:+639493760000"
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-white/90 hover:bg-white/20"
              >
                +63 949-376-0000
              </a>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              {/* Honeypot (hidden from users) */}
              <input
                type="text"
                name="hp"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                value={form.hp}
                onChange={onChange}
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="Jane Dela Cruz"
                  className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50
                             focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="you@company.com"
                  className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50
                             focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  placeholder="Tell us what you need help with (course, schedule, team training, etc.)"
                  className="mt-1 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 h-32 resize-none text-white placeholder-white/50
                             focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              {errorMsg && <p className="text-sm text-red-300">{errorMsg}</p>}

              <button
                type="submit"
                disabled={loading || submitted}
                className="inline-flex w-full items-center justify-center rounded-full
                           bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 font-semibold text-white
                           shadow-lg transition-all hover:bg-white/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="relative inline-flex items-center">
                    <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending…
                  </span>
                ) : submitted ? (
                  <span className="inline-flex items-center">
                    <FaCheck className="mr-2" /> Submitted
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ContactPoint + org facts JSON-LD (edit phone/email to canonical) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "RivanCyber Training Institute",
            foundingDate: "2000",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "teamrivan@rvci.org",
                telephone: "+63 949 376 0000",
                areaServed: "PH",
                availableLanguage: ["en"],
              },
            ],
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Certification pass rate",
                value: "99%",
              },
              {
                "@type": "PropertyValue",
                name: "Learners trained",
                value: "10000+",
              },
            ],
          }),
        }}
      />
    </section>
  );
};

export default ContactUs;
