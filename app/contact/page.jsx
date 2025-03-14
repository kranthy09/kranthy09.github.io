"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/app/components/AnimatedSection";
import ScrollProgressIndicator from "@/app/components/ScrollProgress";
import GetInTouch from "../components/GetInTouchComponent";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    userType: "brand", // Default selection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // In a real implementation, you would make an API call here
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
          userType: "brand",
        });
      }, 3000);
    }, 1500);
  };

  // Contact information
  const contactInfo = [
    {
      title: "Email Us",
      info: "team@influenceai.in",
      description: "For general inquiries",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Support",
      info: "support@influenceai.in",
      description: "Technical assistance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Office",
      info: "Hyderabad, TG",
      description: "5th Phase, Kphb",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="glowing-dots"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <AnimatedSection
            animation="fade"
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Have questions about our platform? Our team is here to help you
              succeed with your influencer marketing strategy.
            </p>
          </AnimatedSection>
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="slide-up"
                options={{ delay: index * 100 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{item.info}</p>
                <p className="text-gray-500">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <GetInTouch />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our platform.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="slide-up" className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  How quickly can I start working with influencers?
                </h3>
                <p className="text-gray-600">
                  Once your account is verified, you can immediately start
                  searching for influencers and sending collaboration requests.
                  Most brands find suitable matches within the first week.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  How do payments work on the platform?
                </h3>
                <p className="text-gray-600">
                  We offer secure escrow payments. Brands deposit funds when
                  contracts are signed, and influencers receive payment once
                  deliverables are approved, ensuring security for both parties.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  Can I integrate with my existing marketing tools?
                </h3>
                <p className="text-gray-600">
                  Yes, our platform offers API integration with popular
                  marketing tools including CRM systems, analytics platforms,
                  and content management systems.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
