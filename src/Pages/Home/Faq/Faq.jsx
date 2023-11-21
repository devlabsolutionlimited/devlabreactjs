import React, { useState } from "react";

const FAQSection = () => {
  const faqData = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all purchases made on our website.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account and checking the order status.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping. Shipping costs will be calculated at checkout.",
    },
    {
      question: "Can I modify my order after placing it?",
      answer:
        "Unfortunately, once an order is placed, modifications cannot be made. Please double-check your order before confirming.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, PayPal, and other secure payment methods.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        'You can contact our customer support team through the "Contact Us" page on our website.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F4F7FA] py-36">
      <div className="text-center">
        <h3 className="text-base font-spartan text-primary font-semibold mb-3">
        Faq
        </h3>
        <h1 className="text-4xl text-black font-spartan font-bold mb-7">
        Frequently Asked Questions
        </h1>
        <p className="text-base text-[#727272] mb-20">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have <br /> suffered alteration in some form.
        </p>
      </div>
      <div className="grid  max-w-7xl mx-auto grid-cols-2 gap-4">
        {faqData.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <div
              className={`p-4 bg-white cursor-pointer`}
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between">
                <h3 className="text-lg text-black font-semibold mb-2">{item.question}</h3>
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-white">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
