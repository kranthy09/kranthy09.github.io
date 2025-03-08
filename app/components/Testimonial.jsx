"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      quote:
        "What sets InfluenceAI apart is its ability to tailor strategies to my unique brand. They understand my audience and create campaigns that truly reflect my personality I have complete trust in Influence AI. They're not just an agency; they're true partners who genuinely care about my success as an influencer.",
      author: "Priyanka",
      title: "Lifestyle Influencer",
      avatar: "/priyanka.jpg",
    },
    {
      quote:
        "I've had the pleasure of participating in some of the most innovative campaigns, thanks to InfluenceAI. Their out-of-the-box ideas always keep my content fresh and exciting. The support and guidance I receive from InfluenceAI are invaluable. They're always there to answer my questions and provide insights to help me grow.",
      author: "Srilatha",
      title: "Actor/Lifestyle Influencer",
      avatar: "/srilaltha.jpg",
    },
    {
      quote:
        "Our marketing campaigns have never been this creative and engaging. Influence AI's innovative ideas have breathed new life into our brand, capturing the attention of our target audience.",
      author: "Dora Raju",
      title: "Chairman, Olive",
      avatar: "/file.svg",
    },
    {
      quote:
        "Their deep understanding of our industry and audience has helped us craft campaigns that resonate and drive growth.",
      author: "Naga Kumar",
      title: "Political Incharge",
      avatar: "/globe.svg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const goToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const goToPrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <AnimatedSection animation="fade" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out`}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <svg
                          className="h-10 w-10 text-blue-500 mb-2"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                        >
                          <path d="M10 8v12H0V8h10zm2 0h10v12H12V8z"></path>
                        </svg>
                        <p className="text-gray-700 text-lg italic">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      <div className="mt-auto flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={
                              testimonial.avatar ||
                              "https://via.placeholder.com/100"
                            }
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.author}
                          </h4>
                          <p className="text-blue-600">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors"
            disabled={isAnimating}
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors"
            disabled={isAnimating}
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 600);
                  }
                }}
                className={`h-2 w-8 mx-1 rounded-full transition-colors ${
                  activeIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialCarousel;
