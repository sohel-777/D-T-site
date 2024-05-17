import React, { useState } from "react";

const Faq = () => {
 
  const chatMessages = [
    {
      id: 1,
      question: "What skincare routine is best for dry skin?",
      answer: "For dry skin, try using a gentle cleanser, hydrating moisturizer, and products with hyaluronic acid."
    },
    {
      id: 2,
      question: "How can I prevent acne breakouts?",
      answer: "To prevent acne, maintain a consistent skincare routine, avoid touching your face, and use non-comedogenic products."
    },
    {
      id: 3,
      question: "What sunscreen SPF should I use?",
      answer: "Use a broad-spectrum sunscreen with SPF 30 or higher, and reapply every two hours when outdoors."
    },
    {
      id: 4,
      question: "Is it important to use a night cream?",
      answer: "Night creams provide overnight hydration and can help repair and replenish your skin. Choose one that suits your skin type."
    },
    {
      id: 5,
      question: "Can diet affect skin health?",
      answer: "Yes, a balanced diet rich in vitamins, antioxidants, and omega-3 fatty acids can improve skin health. Drink plenty of water too."
    },
    {
      id: 6,
      question: "How often should I exfoliate my skin?",
      answer: "Exfoliate your skin 1-3 times per week, depending on your skin type. Avoid over-exfoliating as it can irritate your skin."
    },
    {
      id: 7,
      question: "What are the benefits of using a facial mask?",
      answer: "Facial masks can hydrate, soothe, and improve the appearance of your skin. Choose masks based on your skin type and concerns."
    },
    {
      id: 8,
      question: "Should I use toner in my skincare routine?",
      answer: "Toner can help balance your skin's pH levels and remove any remaining dirt or makeup after cleansing. Choose an alcohol-free toner."
    },
    {
      id: 9,
      question: "How can I reduce dark circles under my eyes?",
      answer: "To reduce dark circles, ensure you get enough sleep, use a hydrating eye cream, and consider using cold compresses to reduce puffiness."
    }
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

 
  const handleQuestionClick = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-md">
      <div className="space-y-4">
        {chatMessages.map((msg, index) => (
          <div key={msg.id} className="border-b border-gray-200">
            <div
              className="cursor-pointer flex justify-between items-center py-2"
              onClick={() => handleQuestionClick(index)}
            >
              <p className="text-blue-600">{msg.question}</p>
              <svg
                className={`w-4 h-4 transition-transform ${
                  activeQuestion === index ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a.75.75 0 01-.53-.22l-6.5-6.25a.75.75 0 111.06-1.06L10 16.44l5.97-5.97a.75.75 0 111.06 1.06l-6.5 6.25A.75.75 0 0110 18z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {activeQuestion === index && (
              <div className="pl-4 text-gray-600">{msg.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
