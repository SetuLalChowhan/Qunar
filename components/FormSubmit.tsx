"use client";

import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  message: string;
  interests: string[];
}

const FormSubmit: React.FC = () => {
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

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5 inline-block">
      <div className="flex flex-col gap-6 md:flex-row w-full max-w-[700px] mx-auto">
        <div className="w-full md:w-[430px] h-[150px] space-y-4 bg-[#333333] p-6 rounded-lg border-[1px] border-gray-800">
          <p className="text-[22px] font-[500]">Full Name</p>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-[#333333] outline-none text-[22px]"
            placeholder="Type Here"
          />
          <p className="border-b-[1px] border-b-gray-500"></p>
        </div>
        <div className="w-full md:w-[430px] h-[150px] space-y-4 bg-[#333333] p-6 rounded-lg border-[1px] border-gray-800">
          <p className="text-[22px] font-[500]">Email</p>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#333333] outline-none text-[22px]"
            placeholder="Type Here"
          />
          <p className="border-b-[1px] border-b-gray-500"></p>
        </div>
      </div>
      <div className="w-full max-w-[900px] space-y-4 bg-[#333333] p-10 rounded-lg border-[1px] border-gray-800 mx-auto">
        <h1 className="text-[22px] font-[500]">Why are you Contacting Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
          <div className="flex items-center mb-5">
            <input
              type="checkbox"
              id="webDesign"
              name="interests"
              value="web-design"
              checked={formData.interests.includes("web-design")}
              onChange={handleChange}
              className="h-5 w-5 border-gray-400 appearance-none rounded-full border-2 checked:bg-[#6e73f5] focus:ring-0"
            />
            <label htmlFor="webDesign" className="ml-3">
              Web Design
            </label>
          </div>
          <div className="flex items-center mb-5">
            <input
              type="checkbox"
              id="mobileAppDesign"
              name="interests"
              value="mobile-app-design"
              checked={formData.interests.includes("mobile-app-design")}
              onChange={handleChange}
              className="h-5 w-5 border-gray-400 appearance-none rounded-full border-2 checked:bg-[#6e73f5] focus:ring-0"
            />
            <label htmlFor="mobileAppDesign" className="ml-3">
              Mobile App Design
            </label>
          </div>
          <div className="flex items-center mb-5">
            <input
              type="checkbox"
              id="collaboration"
              name="interests"
              value="collaboration"
              checked={formData.interests.includes("collaboration")}
              onChange={handleChange}
              className="h-5 w-5 border-gray-400 appearance-none rounded-full border-2 checked:bg-[#6e73f5] focus:ring-0"
            />
            <label htmlFor="collaboration" className="ml-3">
              Collaboration
            </label>
          </div>
          <div className="flex items-center mb-5">
            <input
              type="checkbox"
              id="others"
              name="interests"
              value="others"
              checked={formData.interests.includes("others")}
              onChange={handleChange}
              className="h-5 w-5 border-gray-400 appearance-none rounded-full border-2 checked:bg-[#6e73f5] focus:ring-0"
            />
            <label htmlFor="others" className="ml-3">
              Others
            </label>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[900px] h-[150px] space-y-4 bg-[#333333] p-6 rounded-lg border-[1px] border-gray-800 mx-auto">
        <p className="text-[22px] font-[500]">Your Message</p>
        <input
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#333333] outline-none text-[22px]"
          placeholder="Type Here"
        />
        <p className="border-b-[1px] border-b-gray-500"></p>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-white text-black text-[22px] px-8 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default FormSubmit;
