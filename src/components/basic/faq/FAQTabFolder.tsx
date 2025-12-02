// src/components/faq/FAQTabFolder.tsx
import React, { useState, useMemo } from 'react';
import FAQItemComponent from './FAQItem';
import FAQSearch from './FAQSearch';
import './FAQTabFolder.css';

export interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
  category?: string;
}

export interface FAQTabFolderProps {
  faqs: FAQItem[];
  categories?: string[];
  defaultActiveTab?: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'bordered' | 'minimal';
  showSearch?: boolean;
  className?: string;
}

const FAQTabFolder: React.FC<FAQTabFolderProps> = ({
  faqs,
  categories,
  defaultActiveTab = 'all',
  title = "Frequently Asked Questions",
  description,
  variant = 'default',
  showSearch = true,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  // Extract categories from FAQs if not provided
  const allCategories = useMemo(() => {
    if (categories && categories.length > 0) {
      return ['all', ...categories];
    }
    
    const uniqueCategories = Array.from(
      new Set(faqs.map(faq => faq.category || 'General'))
    );
    return ['all', ...uniqueCategories];
  }, [faqs, categories]);

  // Filter FAQs based on active tab and search term
  const filteredFaqs = useMemo(() => {
    let filtered = faqs;

    // Filter by category
    if (activeTab !== 'all') {
      filtered = filtered.filter(faq => 
        faq.category === activeTab || (!faq.category && activeTab === 'General')
      );
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(term) ||
        (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(term))
      );
    }

    return filtered;
  }, [faqs, activeTab, searchTerm]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const openAll = () => {
    setOpenItems(new Set(filteredFaqs.map(faq => faq.id)));
  };

  const closeAll = () => {
    setOpenItems(new Set());
  };

  return (
    <div className={`faq-tabfolder faq-tabfolder--${variant} ${className}`}>
      {/* Header */}
      <div className="faq-tabfolder__header">
        <h2 className="faq-tabfolder__title">{title}</h2>
        {description && (
          <p className="faq-tabfolder__description">{description}</p>
        )}
      </div>

      {/* Search */}
      {showSearch && (
        <FAQSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          resultsCount={filteredFaqs.length}
          totalCount={faqs.length}
        />
      )}

      <div className="faq-tabfolder__content">
        {/* Tabs Navigation */}
        <div className="faq-tabfolder__tabs">
          {allCategories.map(category => (
            <button
              key={category}
              className={`faq-tabfolder__tab ${
                activeTab === category ? 'faq-tabfolder__tab--active' : ''
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category === 'all' ? 'All' : category}
              <span className="faq-tabfolder__tab-count">
                {category === 'all' 
                  ? faqs.length 
                  : faqs.filter(f => f.category === category || (!f.category && category === 'General')).length
                }
              </span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="faq-tabfolder__items">
          {/* Controls */}
          <div className="faq-tabfolder__controls">
            <button 
              className="faq-tabfolder__control-btn"
              onClick={openAll}
              disabled={filteredFaqs.length === 0}
            >
              Open All
            </button>
            <button 
              className="faq-tabfolder__control-btn"
              onClick={closeAll}
              disabled={filteredFaqs.length === 0}
            >
              Close All
            </button>
          </div>

          {/* FAQ List */}
          <div className="faq-tabfolder__list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map(faq => (
                <FAQItemComponent
                  key={faq.id}
                  faq={faq}
                  isOpen={openItems.has(faq.id)}
                  onToggle={toggleItem}
                />
              ))
            ) : (
              <div className="faq-tabfolder__empty">
                <p>No FAQs found matching your criteria.</p>
                {(searchTerm || activeTab !== 'all') && (
                  <button
                    className="faq-tabfolder__reset"
                    onClick={() => {
                      setSearchTerm('');
                      setActiveTab('all');
                    }}
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQTabFolder;