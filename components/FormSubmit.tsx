"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";

interface FormData {
  fullName: string;
  email: string;
  message: string;
  interests: string[];
}

const FormSubmit: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // State to manage form data
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
    interests: [],
  });

  // Handle changes in input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // Update form data based on input type
    if (type === "checkbox") {
      setFormData((prevData) => {
        const interests = checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value);
        return { ...prevData, interests };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const fullNamePlaceholder = useTypingEffect(isVisible ? "Type your full name here..." : "");
  const emailPlaceholder = useTypingEffect(isVisible ? "Enter your email address..." : "");
  const messagePlaceholder = useTypingEffect(isVisible ? "Write your message here..." : "");

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-8 space-y-5 inline-block transition-all ease-in-out duration-300"
    >
      <div className="flex flex-col gap-6 md:flex-row w-full max-w-[700px] mx-auto">
        <div className="w-full md:w-[430px] h-[150px] space-y-4 bg-[#333333] p-6 rounded-lg border-[1px] border-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <p className="text-[22px] font-[500]">Full Name</p>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-[#333333] outline-none text-[22px] focus:border-b-blue-500 transition-all duration-300"
            placeholder={fullNamePlaceholder}
          />
          <p className="border-b-[1px] border-b-gray-500"></p>
        </div>
        <div className="w-full md:w-[430px] h-[150px] space-y-4 bg-[#333333] p-6 rounded-lg border-[1px] border-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <p className="text-[22px] font-[500]">Email</p>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#333333] outline-none text-[22px] focus:border-b-blue-500 transition-all duration-300"
            placeholder={emailPlaceholder}
          />
          <p className="border-b-[1px] border-b-gray-500"></p>
        </div>
      </div>

      <div className="w-full max-w-[900px] space-y-4 bg-[#333333] p-10 rounded-lg border-[1px] border-gray-800 mx-auto hover:shadow-lg transition-all duration-300">
        <h1 className="text-[22px] font-[500]">Why are you Contacting Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
          {["web-design", "mobile-app-design", "collaboration", "others"].map(
            (interest, idx) => (
              <div className="flex items-center mb-5" key={idx}>
                <input
                  type="checkbox"
                  id={interest}
                  name="interests"
                  value={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={handleChange}
                  className="h-5 w-5 border-gray-400 appearance-none rounded-full border-2 checked:bg-[#6e73f5] transition-all duration-300 ease-in-out transform hover:scale-125 focus:ring-0"
                />
                <label htmlFor={interest} className="ml-3 capitalize">
                  {interest.replace("-", " ")}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      <div className="w-full max-w-[900px] h-[150px] space-y-4 bg-[#333333] p-6 rounded-lg border-[1px] border-gray-800 mx-auto hover:shadow-lg transition-all duration-300">
        <p className="text-[22px] font-[500]">Your Message</p>
        <input
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#333333] outline-none text-[22px] focus:border-b-blue-500 transition-all duration-300"
          placeholder={messagePlaceholder}
        />
        <p className="border-b-[1px] border-b-gray-500"></p>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-white text-black text-[22px] px-8 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default FormSubmit;
