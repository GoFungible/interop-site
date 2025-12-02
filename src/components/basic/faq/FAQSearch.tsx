// src/components/faq/FAQSearch.tsx
import React from 'react';
import './FAQSearch.css';

export interface FAQSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  resultsCount: number;
  totalCount: number;
}

const FAQSearch: React.FC<FAQSearchProps> = ({ 
  searchTerm, 
  onSearchChange, 
  resultsCount, 
  totalCount 
}) => {
  return (
    <div className="faq-search">
      <div className="faq-search__input-wrapper">
        <svg 
          className="faq-search__icon" 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none"
        >
          <path 
            d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          className="faq-search__input"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button
            className="faq-search__clear"
            onClick={() => onSearchChange('')}
            aria-label="Clear search"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path 
                d="M13 1L1 13M1 1L13 13" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
      
      {searchTerm && (
        <div className="faq-search__results">
          Found {resultsCount} of {totalCount} FAQs
        </div>
      )}
    </div>
  );
};

export default FAQSearch;