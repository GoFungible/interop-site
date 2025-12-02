// src/components/tabfolder/TabFolder.tsx
import React, { useState } from 'react';
import './TabFolder.css';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabFolderProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  variant?: 'default' | 'bordered' | 'pills';
  className?: string;
}

const TabFolder: React.FC<TabFolderProps> = ({
  tabs,
  defaultActiveTab,
  variant = 'default',
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || tabs[0]?.id || ''
  );

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={`tabfolder tabfolder--${variant} ${className}`}>
      <div className="tabfolder__container">
        {/* Tab Selectors */}
        <div className="tabfolder__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tabfolder__tab ${
                activeTab === tab.id ? 'tabfolder__tab--active' : ''
              } ${tab.disabled ? 'tabfolder__tab--disabled' : ''}`}
              onClick={() => !tab.disabled && setActiveTab(tab.id)}
              disabled={tab.disabled}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="tabfolder__content">
          {activeTabContent || (
            <div className="tabfolder__empty">
              Select a tab to view content
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabFolder;