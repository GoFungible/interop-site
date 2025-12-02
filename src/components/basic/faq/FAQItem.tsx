// src/components/faq/FAQItem.tsx
import React from 'react';
import './FAQItem.css';

export interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
  category?: string;
}

interface FAQItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={() => onToggle(faq.id)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="faq-item__question-text">{faq.question}</span>
        <span className="faq-item__icon">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d={isOpen ? "M4 10L8 6L12 10" : "M6 4L10 8L6 12"} 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      
      <div 
        id={`faq-answer-${faq.id}`}
        className="faq-item__answer"
        role="region"
        aria-labelledby={`faq-question-${faq.id}`}
      >
        <div className="faq-item__answer-content">
          {typeof faq.answer === 'string' ? (
            <p>{faq.answer}</p>
          ) : (
            faq.answer
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQItemComponent;