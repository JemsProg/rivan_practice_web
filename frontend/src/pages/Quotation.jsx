import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // for redirect

const Quotation = () => {
  /* ---------------- basic state ---------------- */
  useEffect(
    () => {
      document.title = "Rivan | Training Quotation";
    },
    window.scrollTo(0, 0),
    []
  );

  const navigate = useNavigate();
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

  /* ---------------- static options ---------------- */
  const courseOptions = [
    "RivanIT CCNA Network Engineer Training 200-301",
    "CCNP Enterprise: ENCORxENARSIxSDWAN",
    "COMPTIA SECURITY PLUS+",
  ];
  const fundingOptions = ["Personal/Individual", "Sponsor/Corporate"];

  /* ---------------- handlers ---------------- */
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
      const names = [...p.attendeeNames];
      names[index] = value;
      return { ...p, attendeeNames: names };
    });
  };

  /* sync attendeeNames length with numberOfAttendees */
  useEffect(() => {
    const num = parseInt(formData.numberOfAttendees, 10);
    if (!isNaN(num) && num > 0) {
      let names = Array.isArray(formData.attendeeNames)
        ? formData.attendeeNames
        : [];
      if (names.length < num)
        names = [...names, ...Array(num - names.length).fill("")];
      if (names.length > num) names = names.slice(0, num);
      if (names.length !== formData.attendeeNames.length)
        setFormData((p) => ({ ...p, attendeeNames: names }));
    } else {
      setFormData((p) => ({ ...p, attendeeNames: [] }));
    }
  }, [formData.numberOfAttendees]);

  /* ---------------- validation ---------------- */
  const validateStep = () => {
    const err = {};
    if (currentStep === 1) {
      if (!formData.customerName.trim())
        err.customerName = "Customer/Company Name is required.";
    } else if (currentStep === 2) {
      if (!formData.numberOfAttendees)
        err.numberOfAttendees = "Number of Attendees is required.";
      if (
        !Array.isArray(formData.attendeeNames) ||
        formData.attendeeNames.some((n) => n.trim() === "")
      )
        err.attendeeNames = "Full Names of Attendees are required.";
      if (!formData.jobTitle.trim()) err.jobTitle = "Job Title is required.";
      if (!formData.email.trim()) err.email = "Email is required.";
      if (!formData.contactNumber.trim())
        err.contactNumber = "Contact Number is required.";
    } else if (currentStep === 3) {
      if (!formData.message.trim()) err.message = "Message is required.";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* ---------------- navigation ---------------- */
  const goToNextStep = () => {
    if (validateStep()) setCurrentStep((s) => s + 1);
  };
  const goToPrevStep = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  /* ---------------- submit ---------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting || !validateStep()) return;
    setIsSubmitting(true);

    fetch("https://rivanit.com/api/quotation/request-quotation/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.message) {
          setModal({
            open: true,
            title: "Success!",
            body: "Your quotation request has been sent successfully.",
          });
        } else {
          setModal({
            open: true,
            title: "Error",
            body: d.error || "Unknown error.",
          });
          setIsSubmitting(false);
        }
      })
      .catch(() =>
        setModal({
          open: true,
          title: "Error",
          body: "An error occurred while submitting the form.",
        })
      );
  };

  /* close modal and redirect on success */
  const closeModal = () => {
    const wasSuccess = modal.title === "Success!";
    setModal({ open: false, title: "", body: "" });
    if (wasSuccess) navigate("/");
  };

  /* ---------------- step content (unchanged) ---------------- */
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Course Details
            </h2>
            <div className="mb-4">
              <label className="block mb-1 text-[#0D2153]">
                Customer/Company Name:
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Enter customer or company name"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              {errors.customerName && (
                <span className="text-red-500 text-xs">
                  {errors.customerName}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-[#0D2153]">
                Course for Quotation:
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                {courseOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-[#0D2153]">
                Training Location:
              </label>
              <input
                type="text"
                name="trainingLocation"
                value={formData.trainingLocation}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-[#0D2153]">
                Delivery Mode:
              </label>
              <input
                type="text"
                name="deliveryMode"
                value={formData.deliveryMode}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Customer / Company Info
            </h2>
            <div className="mb-4">
              <label className="block mb-1 text-[#0D2153]">
                Number of Attendees:
              </label>
              <input
                type="number"
                name="numberOfAttendees"
                value={formData.numberOfAttendees}
                onChange={handleChange}
                min="1"
                placeholder="Number of Attendees"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              {errors.numberOfAttendees && (
                <span className="text-red-500 text-xs">
                  {errors.numberOfAttendees}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-[#0D2153]">
                Full Names of Attendees:
              </label>
              {formData.attendeeNames.map((n, i) => (
                <input
                  key={i}
                  type="text"
                  name={`attendee_${i}`}
                  value={n}
                  onChange={(e) => handleAttendeeInputChange(i, e.target.value)}
                  placeholder={`Attendee ${i + 1} name`}
                  className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                />
              ))}
              {errors.attendeeNames && (
                <span className="text-red-500 text-xs">
                  {errors.attendeeNames}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-[#0D2153]">
                Choose Funding:
              </label>
              <select
                name="fundingType"
                value={formData.fundingType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                {fundingOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {(formData.course === "COMPTIA SECURITY PLUS+" ||
              formData.course === "COMPTIA SEC+ 701 (EXAM) Voucher") && (
              <div className="mb-4" id="voucher_option">
                <label className="block mb-1 text-[#0D2153]">
                  Voucher for Exam:
                </label>
                <select
                  name="voucherNeeded"
                  value={formData.voucherNeeded}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            )}

            <div className="mb-4">
              <label className="block mb-1 text-[#0D2153]">Job Title:</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Enter your job title"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              {errors.jobTitle && (
                <span className="text-red-500 text-xs">{errors.jobTitle}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-[#0D2153]">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
              {errors.email && (
                <span className="text-red-500 text-xs">{errors.email}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-[#0D2153]">
                Contact Number:
              </label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              {errors.contactNumber && (
                <span className="text-red-500 text-xs">
                  {errors.contactNumber}
                </span>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Message & Confirmation
            </h2>
            <div className="mb-4">
              <label className="block mb-1 text-[#0D2153]">Message:</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message (optional)"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              {errors.message && (
                <span className="text-red-500 text-xs">{errors.message}</span>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  /* ---------------- JSX ---------------- */
  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0D2153]">
            Request a Quotation
          </h2>
        </div>

        <StepIndicator currentStep={currentStep} />

        <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow">
          <form onSubmit={handleSubmit}>
            {renderStepContent()}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={goToPrevStep}
                  className="px-5 py-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 cursor-pointer"
                >
                  Back
                </button>
              )}
              {currentStep < 3 && (
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="ml-auto px-5 py-2 bg-[#0D2153] text-white rounded-full hover:bg-[#09193E] cursor-pointer"
                >
                  Next
                </button>
              )}
              {currentStep === 3 && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={
                    "ml-auto px-5 py-2 rounded-full " +
                    (isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#0D2153] hover:bg-[#09193E] cursor-pointer text-white")
                  }
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

/* ---------------- helper visuals (unchanged) ---------------- */
const StepIndicator = ({ currentStep }) => (
  <div className="max-w-2xl mx-auto flex items-center justify-between mb-8">
    <StepCircle step={1} currentStep={currentStep} label="Course Details" />
    <Line step={1} currentStep={currentStep} />
    <StepCircle step={2} currentStep={currentStep} label="Customer Info" />
    <Line step={2} currentStep={currentStep} />
    <StepCircle step={3} currentStep={currentStep} label="Confirmation" />
  </div>
);

const StepCircle = ({ step, currentStep, label }) => (
  <div className="flex flex-col items-center text-center w-20">
    <div
      className={`${
        currentStep >= step ? "bg-[#0D2153]" : "bg-gray-300"
      } rounded-full w-10 h-10 flex items-center justify-center text-white mb-2`}
    >
      {step}
    </div>
    <span className="text-xs font-medium">{label}</span>
  </div>
);

const Line = ({ step, currentStep }) => (
  <div
    className={`flex-1 h-0.5 mx-2 ${
      currentStep > step ? "bg-[#0D2153]" : "bg-gray-300"
    }`}
  />
);

/* ---------------- new modal component ---------------- */
const Modal = ({ title, body, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
    <div className="bg-white rounded-lg shadow-lg p-8 relative z-10 max-w-sm mx-auto">
      <h3 className="text-2xl font-semibold mb-4 text-[#09193E]">{title}</h3>
      <p className="mb-4">{body}</p>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-[#0D2153] text-white rounded hover:bg-[#09193E]"
      >
        OK
      </button>
    </div>
  </div>
);

export default Quotation;
