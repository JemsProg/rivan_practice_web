import React, { useState, useEffect } from "react";

const Quotation = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    customerName: "",
    course: "RivanIT CCNA Network Engineer Training 200-301",
    trainingLocation: "Makati",
    deliveryMode: "Face-to-Face",
    numberOfAttendees: "",
    attendeeNames: "",
    fundingType: "Personal/Individual",
    voucherNeeded: "Yes",
    jobTitle: "",
    email: "",
    contactNumber: "",
    message: "",
    notARobot: false,
  });

  const courseOptions = [
    "RivanIT CCNA Network Engineer Training 200-301",
    "CCNP Enterprise: ENCORxENARSIxSDWAN",
    "COMPTIA SECURITY PLUS+",
    "COMPTIA SEC+ 701 (EXAM) Voucher",
    "RIVAN ITILV3/4",
  ];

  const goToNextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const goToPrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Quotation requested!");
    // Reset form data
    setFormData({
      customerName: "",
      course: "RivanIT CCNA Network Engineer Training 200-301",
      trainingLocation: "Makati",
      deliveryMode: "Face-to-Face",
      numberOfAttendees: "",
      attendeeNames: "",
      fundingType: "Personal/Individual",
      voucherNeeded: "Yes",
      jobTitle: "",
      email: "",
      contactNumber: "",
      message: "",
      notARobot: false,
    });
    setCurrentStep(1);
  };

  // ----- STEP COMPONENTS -----
  const Step1 = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Course Details</h2>
      <div className="mb-4">
        <label className="block mb-1">Customer/Company Name:</label>
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter customer or company name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Course for Quotation:</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          {courseOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Training Location:</label>
        <input
          type="text"
          name="trainingLocation"
          value={formData.trainingLocation}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Delivery Mode:</label>
        <input
          type="text"
          name="deliveryMode"
          value={formData.deliveryMode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );

  const Step2 = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Customer / Company Info</h2>
      <div className="mb-4">
        <label className="block mb-1">Number of Attendees:</label>
        <input
          type="number"
          name="numberOfAttendees"
          value={formData.numberOfAttendees}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          min="1"
          placeholder="Number of Attendees"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Full Names of Attendees:</label>
        <textarea
          name="attendeeNames"
          rows="2"
          value={formData.attendeeNames}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="List of names"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Choose Funding:</label>
        <select
          name="fundingType"
          value={formData.fundingType}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option>Personal/Individual</option>
          <option>Company Sponsored</option>
          <option>Government Funded</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Voucher for Exam:</label>
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
      <div className="mb-4">
        <label className="block mb-1">Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter your job title"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Contact Number:</label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter your contact number"
        />
      </div>
    </div>
  );

  const Step3 = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Message & Confirmation</h2>
      <div className="mb-4">
        <label className="block mb-1">Message:</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter your message (optional)"
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="notARobot"
          checked={formData.notARobot}
          onChange={handleChange}
          className="mr-2"
        />
        <label>I’m not a robot</label>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0D2153]">
            Request a Quotation
          </h2>
        </div>
        {/* Step Indicator */}
        <div className="max-w-2xl mx-auto mb-8">
          <StepIndicator currentStep={currentStep} />
        </div>
        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow">
          <form onSubmit={handleSubmit}>
            {renderStepContent()}
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={goToPrevStep}
                  className="px-5 py-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
                >
                  Back
                </button>
              )}
              {currentStep < 3 && (
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="ml-auto px-5 py-2 bg-[#0D2153] text-white rounded-full hover:bg-[#09193E]"
                >
                  Next
                </button>
              )}
              {currentStep === 3 && (
                <button
                  type="submit"
                  className="ml-auto px-5 py-2 bg-[#0D2153] text-white rounded-full hover:bg-[#09193E]"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <StepCircle step={1} currentStep={currentStep} label="Course Details" />
      <Line step={1} currentStep={currentStep} />
      <StepCircle step={2} currentStep={currentStep} label="Customer Info" />
      <Line step={2} currentStep={currentStep} />
      <StepCircle step={3} currentStep={currentStep} label="Confirmation" />
    </div>
  );
};

const StepCircle = ({ step, currentStep, label }) => {
  const circleColor = currentStep >= step ? "bg-[#0D2153]" : "bg-gray-300";
  return (
    <div className="flex flex-col items-center text-center w-20">
      <div className={`rounded-full w-10 h-10 flex items-center justify-center text-white mb-2 ${circleColor}`}>
        {step}
      </div>
      <span className="text-xs font-medium leading-tight">{label}</span>
    </div>
  );
};

const Line = ({ step, currentStep }) => {
  const lineColor = currentStep > step ? "bg-[#0D2153]" : "bg-gray-300";
  return <div className={`flex-1 h-0.5 mx-2 ${lineColor}`} />;
};

export default Quotation;
