// GetInTouch.jsx
"use client";
import { useState } from "react";

export default function GetInTouch() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    representing: "Brand",
    message: "",
  });

  // Form status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // This is a placeholder for the actual Google Sheets API integration
      // You'll need to replace this with your actual API endpoint
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Reset form and show success message
      setSubmitted(true);

      // Optional: Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        representing: "Brand",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-indigo-900 to-indigo-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Title and Heading */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let us harness the potential of influencer marketing together!!
            </h2>
            <div className="space-y-6 mt-10">
              <div className="flex items-start">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-md">
                  Technology driven Analystics help brands decrease user
                  aquisition cost and increase ROI.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-md">
                  Hassel free collaboration with brands for influencers and
                  similar niche type brand collaboration for improving
                  viewersship.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-16 w-16 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="mt-4 text-xl font-medium text-gray-900">
                  Thank you!
                </h3>
                <p className="mt-2 text-gray-600">
                  Your information has been submitted successfully. Our team
                  will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In touch with our experts
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  {/* Representing Dropdown */}
                  <div>
                    <label
                      htmlFor="representing"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Are you representing?
                    </label>
                    <select
                      id="representing"
                      name="representing"
                      value={formData.representing}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="Brand">Brand</option>
                      <option value="Agency">Agency</option>
                      <option value="Influencer">Influencer</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Please tell us how we can help you..."
                    ></textarea>
                  </div>

                  {/* Error message */}
                  {error && <div className="text-red-600 text-sm">{error}</div>}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-orange-500 hover:from-indigo-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
