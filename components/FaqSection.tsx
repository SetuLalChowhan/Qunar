"use client"
import { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`accordion border border-solid border-gray-800 p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${
                activeIndex === index ? ' border-indigo-600' : ''
              }`}
              id={`basic-heading-${index}`}
            >
              <button
                className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 w-full transition duration-500 hover:text-indigo-600 ${
                  activeIndex === index ? 'font-medium text-indigo-600' : ''
                }`}
                onClick={() => handleToggle(index)}
                aria-controls={`basic-collapse-${index}`}
              >
                <div className="flex items-center">
                  <div
                    className="flex items-center justify-center w-[80px] h-[80px] mr-4 rounded-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%)",
                    }}
                  >
                    <span
                      className={`text-xl font-bold ${
                        activeIndex === index ? 'text-indigo-600' : 'text-white'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h5>{faq.question}</h5>
                </div>
                <svg
                  className={`w-6 h-6 transition duration-500 ${
                    activeIndex === index ? 'hidden' : 'block'
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 transition duration-500 ${
                    activeIndex === index ? 'block' : 'hidden'
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id={`basic-collapse-${index}`}
                className="accordion-content w-full overflow-hidden pr-4"
                style={{
                  maxHeight: activeIndex === index ? '500px' : '0',
                  transition: 'max-height 0.5s ease',
                  overflow: 'hidden',
                }}
              >
                <p className="text-base font-normal leading-6 mt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: 'How can I reset my password?',
    answer: "To reset your password, go to 'Forgot Password' and follow the instructions to reset via email.",
  },
  {
    question: 'How do I update my billing information?',
    answer: 'To update billing info, visit your account settings and navigate to the billing section.',
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can contact support via the help center or by emailing support@example.com.',
  },
  {
    question: 'How do I delete my account?',
    answer: 'To delete your account, go to settings and choose the delete account option.',
  },
];

export default FaqSection;
