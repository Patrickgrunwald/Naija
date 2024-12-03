import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I find the right architectural firm for my project?",
    answer: "You can use our advanced search filters to narrow down firms based on project type, location, budget range, and specializations. Each firm profile includes detailed information about their experience, past projects, and client reviews to help you make an informed decision."
  },
  {
    question: "What information do I need to provide when contacting a firm?",
    answer: "To get the most helpful response, include your project type, location, approximate budget, timeline, and any specific requirements or preferences. This helps firms understand your needs and provide relevant information."
  },
  {
    question: "How are the architectural firms verified?",
    answer: "All firms on our platform undergo a thorough verification process. We check their professional credentials, licenses, past work history, and client references to ensure they meet our quality standards."
  },
  {
    question: "Can I see examples of a firm's previous work?",
    answer: "Yes, each firm's profile includes a portfolio section showcasing their past projects with images, descriptions, and project details. You can also download their complete portfolio PDF if available."
  },
  {
    question: "How do I leave a review for an architectural firm?",
    answer: "After working with a firm, you can submit a review through their profile page. Reviews help other clients make informed decisions and help maintain high standards across our platform."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600">
          Find answers to common questions about using Naija Architect
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Can't find what you're looking for?{' '}
          <a href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
}