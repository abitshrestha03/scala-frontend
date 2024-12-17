import { useState } from "react";
import Button from "../Button";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { title: "AI Expertise", content: "Details about AI expertise." },
    { title: "Innovation Hub", content: "Details about the innovation hub." },
    {
      title: "Client Centric Approach",
      content: "Details about client-centric approach.",
    },
    {
      title: "Result Driven Solution",
      content: "Details about result-driven solutions.",
    },
  ];

  return (
    <div className="py-10 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-white text-center font-semibold ms:text-3xl sm:text-5xl md:tracking-[0.04em] mb-4">
          Frequently Asked <br /> Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="py-2 px-4"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 61, 255, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%)",
                border: "1px solid rgba(0, 61, 255, 0.3)",
                backdropFilter: "blur(34px)",
              }}
            >
              <button
                className="w-full flex justify-between items-center text-lg font-medium text-white"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-normal text-xl">{faq.title}</span>
                <span className="font-normal text-2xl">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-sm text-gray-300">{faq.content}</div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-white text-xl mb-2">Do you have more questions?</p>
          <p className="text-gray-400 text-sm mb-4">
            Feel free to reach out to us or email us.
          </p>
          <Button text="Reach Out To Us"/>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
