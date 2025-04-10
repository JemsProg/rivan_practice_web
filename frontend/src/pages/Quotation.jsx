import React, { useState, useEffect } from "react";

const Quotation = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    customerName: "",
    course: "RivanIT CCNA Network Engineer Training 200-301",
    trainingLocation: "Makati",
    deliveryMode: "Face-to-Face",
    numberOfAttendees: "",
    attendeeNames: [],
    fundingType: "Personal/Individual",
    voucherNeeded: "Yes",
    jobTitle: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  // Options for the course select
  const courseOptions = [
    "RivanIT CCNA Network Engineer Training 200-301",
    "CCNP Enterprise: ENCORxENARSIxSDWAN",
    "COMPTIA SECURITY PLUS+",
    "COMPTIA SEC+ 701 (EXAM) Voucher",
    "RIVAN ITILV3/4",
  ];

  // Funding options
  const fundingOptions = ["Personal/Individual", "Sponsor/Corporate"];

  // Update form data on change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field when user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handler for updating individual attendee names
  const handleAttendeeInputChange = (index, value) => {
    setFormData((prev) => {
      const updatedNames = [...prev.attendeeNames];
      updatedNames[index] = value;
      return { ...prev, attendeeNames: updatedNames };
    });
  };

  // Update attendeeNames array when numberOfAttendees changes
  useEffect(() => {
    const num = parseInt(formData.numberOfAttendees, 10);
    if (!isNaN(num) && num > 0) {
      let currentNames = Array.isArray(formData.attendeeNames)
        ? formData.attendeeNames
        : [];
      if (currentNames.length < num) {
        currentNames = [
          ...currentNames,
          ...Array(num - currentNames.length).fill(""),
        ];
      } else if (currentNames.length > num) {
        currentNames = currentNames.slice(0, num);
      }
      if (currentNames.length !== formData.attendeeNames.length) {
        setFormData((prev) => ({
          ...prev,
          attendeeNames: currentNames,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        attendeeNames: [],
      }));
    }
  }, [formData.numberOfAttendees]);

  // Validate required fields for each step
  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.customerName.trim()) {
        newErrors.customerName = "Customer/Company Name is required.";
      }
    } else if (currentStep === 2) {
      if (!formData.numberOfAttendees) {
        newErrors.numberOfAttendees = "Number of Attendees is required.";
      }
      if (
        !Array.isArray(formData.attendeeNames) ||
        formData.attendeeNames.some((name) => name.trim() === "")
      ) {
        newErrors.attendeeNames = "Full Names of Attendees are required.";
      }
      if (!formData.jobTitle.trim()) {
        newErrors.jobTitle = "Job Title is required.";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
      }
      if (!formData.contactNumber.trim()) {
        newErrors.contactNumber = "Contact Number is required.";
      }
    } else if (currentStep === 3) {
      if (!formData.message.trim()) {
        newErrors.message = "Message is required.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation functions
  const goToNextStep = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateStep()) {
      console.log("Sending data:", formData);
  
      fetch("http://localhost:8000/quotation-request/api/quotation/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            alert(data.message);
          } else if (data.error) {
            alert("Error: " + data.error);
          }
        })
        .catch((err) => {
          console.error("Submission error:", err);
          alert("An error occurred while submitting the form.");
        });
    }
  };
  // Render content for each step
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
                {courseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
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
              {formData.attendeeNames.map((name, index) => (
                <input
                  key={index}
                  type="text"
                  name={`attendee_${index}`}
                  value={name}
                  onChange={(e) =>
                    handleAttendeeInputChange(index, e.target.value)
                  }
                  placeholder={`Attendee ${index + 1} name`}
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
                {fundingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
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
              ></textarea>
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
                  className="ml-auto px-5 py-2 bg-[#0D2153] text-white rounded-full hover:bg-[#09193E] cursor-pointer"
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

const StepIndicator = ({ currentStep }) => (
  <div className="max-w-2xl mx-auto flex items-center justify-between mb-8">
    <StepCircle step={1} currentStep={currentStep} label="Course Details" />
    <Line step={1} currentStep={currentStep} />
    <StepCircle step={2} currentStep={currentStep} label="Customer Info" />
    <Line step={2} currentStep={currentStep} />
    <StepCircle step={3} currentStep={currentStep} label="Confirmation" />
  </div>
);

const StepCircle = ({ step, currentStep, label }) => {
  const bgColor = currentStep >= step ? "bg-[#0D2153]" : "bg-gray-300";
  return (
    <div className="flex flex-col items-center text-center w-20">
      <div
        className={`${bgColor} rounded-full w-10 h-10 flex items-center justify-center text-white mb-2`}
      >
        {step}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
};

const Line = ({ step, currentStep }) => {
  const bgColor = currentStep > step ? "bg-[#0D2153]" : "bg-gray-300";
  return <div className={`flex-1 h-0.5 mx-2 ${bgColor}`}></div>;
};

export default Quotation;
