// src/components/Quotation.jsx
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

import { Fragment } from "react";
import { BASE_URL } from "../api/Apikey";

const Quotation = () => {
  const navigate = useNavigate();

  // Page setup
  useEffect(() => {
    document.title = "RivanCyber | Training Quotation";
    window.scrollTo(0, 0);
  }, []);

  // State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState({ open: false, title: "", body: "" });

  const [formData, setFormData] = useState({
    customerName: "",
    course: "RivanIT CCNA Network Engineer Training 200-301",
    trainingLocation: "Makati",
    deliveryMode: "Face-to-Face",
    numberOfAttendees: "",
    attendeeNames: [],
    fundingType: "Personal/Individual",
    voucherNeeded: "No",
    jobTitle: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  // UI class helpers
  const inputClass =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30";
  const btnPrimary =
    "inline-flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 font-semibold text-white hover:bg-white/20 transition";
  const btnSecondary =
    "inline-flex items-center rounded-full bg-white/5 border border-white/15 px-5 py-2 text-white hover:bg-white/15 transition";

  // Options
  const courseOptions = useMemo(
    () => [
      "RivanIT CCNA Network Engineer Training 200-301",
      "CCNP Enterprise: ENCORxENARSIxSDWAN",
      "CompTIA Security+ (SY0-701)",
    ],
    []
  );
  const fundingOptions = ["Personal/Individual", "Sponsor/Corporate"];

  // Handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleAttendeeInputChange = (index, value) => {
    setFormData((p) => {
      const names = [...(p.attendeeNames || [])];
      names[index] = value;
      return { ...p, attendeeNames: names };
    });
  };

  // Sync attendee names with count
  useEffect(() => {
    const raw = String(formData.numberOfAttendees || "").replace(/[^\d]/g, "");
    const num = raw ? Math.max(0, parseInt(raw, 10)) : 0;

    if (String(num) !== formData.numberOfAttendees) {
      setFormData((p) => ({ ...p, numberOfAttendees: raw ? String(num) : "" }));
      return;
    }
    if (num === 0) {
      if (formData.attendeeNames.length) {
        setFormData((p) => ({ ...p, attendeeNames: [] }));
      }
      return;
    }
    let names = Array.isArray(formData.attendeeNames)
      ? [...formData.attendeeNames]
      : [];
    if (names.length < num)
      names = [...names, ...Array(num - names.length).fill("")];
    if (names.length > num) names = names.slice(0, num);
    if (names.length !== formData.attendeeNames.length) {
      setFormData((p) => ({ ...p, attendeeNames: names }));
    }
  }, [formData.numberOfAttendees]); // eslint-disable-line

  // Validation
  const isEmail = (v) => /^\S+@\S+\.\S+$/.test(v);
  const validateStep = () => {
    const err = {};
    if (currentStep === 1) {
      if (!formData.customerName.trim())
        err.customerName = "Customer/Company name is required.";
    } else if (currentStep === 2) {
      if (!formData.numberOfAttendees)
        err.numberOfAttendees = "Number of attendees is required.";
      if (
        !Array.isArray(formData.attendeeNames) ||
        formData.attendeeNames.some((n) => !n.trim())
      ) {
        err.attendeeNames = "Please provide the full names of all attendees.";
      }
      if (!formData.jobTitle.trim()) err.jobTitle = "Job title is required.";
      if (!formData.email.trim()) err.email = "Email is required.";
      else if (!isEmail(formData.email))
        err.email = "Please enter a valid email address.";
      if (!formData.contactNumber.trim())
        err.contactNumber = "Contact number is required.";
    } else if (currentStep === 3) {
      if (!formData.message.trim())
        err.message = "Please include a short message.";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // Step nav
  const goToNextStep = () => validateStep() && setCurrentStep((s) => s + 1);
  const goToPrevStep = () => currentStep > 1 && setCurrentStep((s) => s - 1);

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !validateStep()) return;

    setIsSubmitting(true);
    try {
      const r = await fetch(`${BASE_URL}api/quotation/request-quotation/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const d = await r.json().catch(() => ({}));

      if (r.ok && d?.message) {
        setModal({
          open: true,
          title: "Success!",
          body: "Your quotation request has been sent successfully.",
        });
      } else {
        setModal({
          open: true,
          title: "Error",
          body:
            d?.error || `We couldn’t submit your request (code ${r.status}).`,
        });
        setIsSubmitting(false);
      }
    } catch (err) {
      setModal({
        open: true,
        title: "Error",
        body: "An error occurred while submitting the form. Please try again.",
      });
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    const ok = modal.title === "Success!";
    setModal({ open: false, title: "", body: "" });
    if (ok) navigate("/");
  };

  // Step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Course Details
            </h2>

            <Field label="Customer/Company Name" error={errors.customerName}>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="e.g., Acme Corp."
                className={inputClass}
              />
            </Field>

            <Field label="Course for Quotation">
              <Listbox
                value={formData.course}
                onChange={(v) => setFormData((p) => ({ ...p, course: v }))}
              >
                <div className="relative">
                  <Listbox.Button
                    className="w-full px-4 py-3 rounded-lg border border-white/15
                 bg-white/10 backdrop-blur text-white text-left
                 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30
                 flex items-center justify-between"
                  >
                    <span>{formData.course || "Choose a course…"}</span>
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-white/60"
                      aria-hidden="true"
                    />
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Listbox.Options
                      className="absolute z-20 mt-2 w-full max-h-60 overflow-auto
                    rounded-lg border border-white/10 bg-[#0B142B] text-white
                    shadow-xl focus:outline-none"
                    >
                      {courseOptions.map((o) => (
                        <Listbox.Option
                          key={o}
                          value={o}
                          className="cursor-pointer px-4 py-2 hover:bg-white/10 ui-selected:bg-white/15"
                        >
                          {o}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Training Location">
                <input
                  type="text"
                  name="trainingLocation"
                  value={formData.trainingLocation}
                  readOnly
                  className={`${inputClass} bg-white/5`}
                />
              </Field>
              <Field label="Delivery Mode">
                <input
                  type="text"
                  name="deliveryMode"
                  value={formData.deliveryMode}
                  readOnly
                  className={`${inputClass} bg-white/5`}
                />
              </Field>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Customer / Company Info
            </h2>

            <Field label="Number of Attendees" error={errors.numberOfAttendees}>
              <input
                type="number"
                name="numberOfAttendees"
                inputMode="numeric"
                min="1"
                value={formData.numberOfAttendees}
                onChange={handleChange}
                placeholder="Enter a number"
                className={inputClass}
              />
            </Field>

            <Field label="Full Names of Attendees" error={errors.attendeeNames}>
              <div className="space-y-2">
                {(formData.attendeeNames || []).map((n, i) => (
                  <input
                    key={i}
                    type="text"
                    value={n}
                    onChange={(e) =>
                      handleAttendeeInputChange(i, e.target.value)
                    }
                    placeholder={`Attendee ${i + 1} name`}
                    className={inputClass}
                  />
                ))}
              </div>
            </Field>

            <Field label="Choose Funding">
              <Listbox
                value={formData.fundingType}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, fundingType: value }))
                }
              >
                <div className="relative">
                  {/* Button */}
                  <Listbox.Button
                    className="w-full px-4 py-3 rounded-lg border border-white/15
                 bg-white/10 backdrop-blur text-white text-left
                 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30
                 flex items-center justify-between"
                  >
                    <span>{formData.fundingType}</span>
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-white/60"
                      aria-hidden="true"
                    />
                  </Listbox.Button>

                  {/* Dropdown Options */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Listbox.Options
                      className="absolute z-20 mt-2 w-full max-h-60 overflow-auto
                   rounded-lg border border-white/10 bg-[#0B142B] text-white
                   shadow-xl focus:outline-none"
                    >
                      {fundingOptions.map((option) => (
                        <Listbox.Option
                          key={option}
                          value={option}
                          className="cursor-pointer px-4 py-2 hover:bg-white/10 ui-selected:bg-white/15"
                        >
                          {option}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </Field>

            {formData.course.includes("Security+") && (
              <Field label="Voucher for Exam">
                <select
                  name="voucherNeeded"
                  value={formData.voucherNeeded}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Field>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Job Title" error={errors.jobTitle}>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="e.g., IT Manager"
                  className={inputClass}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Contact Number" error={errors.contactNumber}>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="e.g., +63 9XX XXX XXXX"
                className={inputClass}
              />
            </Field>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Message & Confirmation
            </h2>

            <Field label="Message" error={errors.message}>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your schedule, goals, or special requests."
                className={`${inputClass} min-h-[120px] resize-y`}
              />
            </Field>

            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 text-white/80 text-sm">
              We’ll email you a quotation within 1–2 business days. By
              submitting, you agree to be contacted about training and
              schedules.
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Render
  return (
    <section className="bg-[#0B142B] text-white min-h-screen py-14">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Request a Quotation
          </h1>
          <p className="mt-2 text-white/80">
            Tell us a bit about your team and course needs.
          </p>
        </header>

        <StepIndicator currentStep={currentStep} />

        <div className="max-w-2xl mx-auto rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 shadow-[0_12px_40px_-12px_rgba(2,6,23,.6)]">
          <form onSubmit={handleSubmit} noValidate>
            {renderStepContent()}

            <div className="mt-8 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={goToPrevStep}
                  className={btnSecondary}
                >
                  Back
                </button>
              ) : (
                <span />
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={goToNextStep}
                  className={btnPrimary}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${btnPrimary} ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting…" : "Submit"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {modal.open && (
        <Modal title={modal.title} body={modal.body} onClose={closeModal} />
      )}
    </section>
  );
};

/* ---------- Reusable bits ---------- */
const Field = ({ label, error, children }) => (
  <div className="mb-5">
    <label className="block mb-1 text-sm font-medium text-white/90">
      {label}
    </label>
    {children}
    {error ? <p className="mt-1 text-xs text-red-300">{error}</p> : null}
  </div>
);

const StepIndicator = ({ currentStep }) => (
  <div className="max-w-2xl mx-auto mb-8">
    {/* progress bar */}
    <div className="mb-4 h-1.5 w-full rounded-full bg-white/10">
      <div
        className="h-1.5 rounded-full bg-white"
        style={{ width: `${(currentStep - 1) * 50}%` }} // 0%, 50%, 100%
      />
    </div>
    {/* dots & labels */}
    <div className="flex items-center justify-between">
      <StepCircle step={1} currentStep={currentStep} label="Course Details" />
      <Line active={currentStep > 1} />
      <StepCircle step={2} currentStep={currentStep} label="Customer Info" />
      <Line active={currentStep > 2} />
      <StepCircle step={3} currentStep={currentStep} label="Confirmation" />
    </div>
  </div>
);

const StepCircle = ({ step, currentStep, label }) => {
  const active = currentStep >= step;
  return (
    <div className="flex w-28 flex-col items-center text-center">
      <div
        className={`grid h-10 w-10 place-items-center rounded-full text-sm font-semibold ${
          active ? "bg-white text-[#0B142B]" : "bg-white/10 text-white"
        }`}
      >
        {step}
      </div>
      <span className="mt-2 text-xs text-white/80">{label}</span>
    </div>
  );
};

const Line = ({ active }) => (
  <div className={`h-0.5 flex-1 mx-2 ${active ? "bg-white" : "bg-white/10"}`} />
);

const Modal = ({ title, body, onClose }) => (
  <div className="fixed inset-0 z-50 grid place-items-center p-4">
    <div className="absolute inset-0 bg-black/60" onClick={onClose} />
    <div className="relative w-full max-w-sm rounded-2xl bg-white text-[#0B142B] p-6 shadow-xl">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-700">{body}</p>
      <div className="mt-4 text-right">
        <button
          onClick={onClose}
          className="inline-flex items-center rounded-full bg-[#0B142B] px-4 py-2 text-white hover:opacity-90"
        >
          OK
        </button>
      </div>
    </div>
  </div>
);

export default Quotation;
