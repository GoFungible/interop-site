import React, { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import {
  FaStar,
  FaAward,
  FaBullseye,
  FaBolt,
  FaShieldAlt,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaLock,
  FaCloud,
  FaCheckCircle,
  FaRegCircle,
  FaCircle,
  FaCode,
  FaCogs,
  FaMobile,
  FaDatabase,
  FaPaintBrush,
  FaLightbulb,
  FaServer,
  FaNetworkWired
} from 'react-icons/fa';
import {
  IoCheckmark,
  IoCheckmarkCircle,
  IoCheckmarkCircleOutline,
  IoConstruct,
  IoFlask,
  IoDesktop,
  IoRocket,
  IoShield
} from 'react-icons/io5';
import {
  MdCheckCircle,
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
  MdSecurity,
  MdSpeed,
  MdScale,
  MdLanguage
} from 'react-icons/md';
import {
  HiCheck,
  HiCheckCircle,
  HiChip,
  HiGlobeAlt,
  HiLockClosed,
  HiLightningBolt
} from 'react-icons/hi';
import './SplitChecklistSection.css';

export type TextSize = 
  | 'xs' | 'sm' | 'base' | 'lg' 
  | 'xl' | '2xl' | '3xl' | '4xl';

export type ChecklistColumns = 1 | 2;

export interface ChecklistItem {
  id: string;
  text: string;
  checked?: boolean;
  icon?: React.ReactNode;
  description?: string;
  textSize?: TextSize;
  iconSize?: number;
}

export interface SplitChecklistSectionProps {
  /** Title for the section */
  title: string;
  /** Subtitle or description */
  subtitle?: string;
  /** Array of checklist items */
  checklistItems: ChecklistItem[];
  /** Image source URL */
  imageSrc: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Whether the checklist is on the left (true) or right (false) */
  checklistFirst?: boolean;
  /** Number of columns for checklist items */
  columns?: ChecklistColumns;
  /** Whether to show checkboxes as interactive */
  interactive?: boolean;
  /** Whether to show icons for checklist items */
  showIcons?: boolean;
  /** Custom icon set for checklist items */
  iconSet?: 'fa' | 'io' | 'md' | 'hi';
  /** Callback when checklist item is toggled */
  onItemToggle?: (id: string, checked: boolean) => void;
  /** Custom styles for the container */
  className?: string;
  /** Bottom take away */
	takeAway?: string;
}

const SplitChecklistSection: React.FC<SplitChecklistSectionProps> = ({
  title,
  subtitle,
  checklistItems: initialItems,
  imageSrc,
  imageAlt = 'Illustration',
  checklistFirst = true,
  columns = 1,
  interactive = true,
  showIcons = true,
  iconSet = 'fa',
  onItemToggle,
  className,
	takeAway
}) => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>(
    initialItems.map(item => ({ 
      ...item, 
      checked: item.checked || false,
      textSize: item.textSize || 'base',
      iconSize: item.iconSize || 18
    }))
  );

  const handleItemToggle = (id: string) => {
    if (!interactive) return;
    
    const updatedItems = checklistItems.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    
    setChecklistItems(updatedItems);
    
    const item = updatedItems.find(item => item.id === id);
    if (item && onItemToggle) {
      onItemToggle(id, item.checked);
    }
  };

  const checkedCount = checklistItems.filter(item => item.checked).length;
  const totalCount = checklistItems.length;

  const getDefaultIcon = (index: number) => {
    const faIcons = [
      <FaStar />,
      <FaAward />,
      <FaBullseye />,
      <FaBolt />,
      <FaShieldAlt />,
      <FaRocket />,
      <FaChartLine />,
      <FaUsers />,
      <FaGlobe />,
      <FaLock />,
      <FaCloud />,
      <FaCode />,
      <FaCogs />,
      <FaMobile />,
      <FaDatabase />,
      <FaPaintBrush />,
      <FaLightbulb />,
      <FaServer />,
      <FaNetworkWired />
    ];

    const ioIcons = [
      <IoCheckmarkCircle />,
      <IoCheckmarkCircleOutline />,
      <IoCheckmark />,
      <IoConstruct />,
      <IoFlask />,
      <IoDesktop />,
      <IoRocket />,
      <IoShield />
    ];

    const mdIcons = [
      <MdCheckCircle />,
      <MdRadioButtonUnchecked />,
      <MdRadioButtonChecked />,
      <MdSecurity />,
      <MdSpeed />,
      <MdScale />,
      <MdLanguage />
    ];

    const hiIcons = [
      <HiCheck />,
      <HiCheckCircle />,
      <HiChip />,
      <HiGlobeAlt />,
      <HiLockClosed />,
      <HiLightningBolt />
    ];

    switch (iconSet) {
      case 'io':
        return ioIcons[index % ioIcons.length];
      case 'md':
        return mdIcons[index % mdIcons.length];
      case 'hi':
        return hiIcons[index % hiIcons.length];
      case 'fa':
      default:
        return faIcons[index % faIcons.length];
    }
  };

  const getIconForItem = (item: ChecklistItem, index: number) => {
    if (item.icon) {
      return React.cloneElement(item.icon as React.ReactElement, {
        //size: item.iconSize
      });
    }
    const defaultIcon = getDefaultIcon(index);
    return React.cloneElement(defaultIcon, {
      size: item.iconSize
    });
  };

  const getCheckIcon = () => {
    switch (iconSet) {
      case 'io':
        return <IoCheckmark size={14} />;
      case 'md':
        return <MdCheckCircle size={14} />;
      case 'hi':
        return <HiCheck size={14} />;
      case 'fa':
      default:
        return <FaCheckCircle size={12} />;
    }
  };

  const renderChecklistItems = () => {
    if (columns === 2) {
      const half = Math.ceil(checklistItems.length / 2);
      const firstColumn = checklistItems.slice(0, half);
      const secondColumn = checklistItems.slice(half);

      return (
        <div className="checklist-items-double">
          <div className="checklist-items-column">
            {firstColumn.map((item, index) => renderChecklistItem(item, index))}
          </div>
          <div className="checklist-items-column">
            {secondColumn.map((item, index) => renderChecklistItem(item, index + half))}
          </div>
        </div>
      );
    }

    return (
      <div className="checklist-items-single">
        {checklistItems.map((item, index) => renderChecklistItem(item, index))}
      </div>
    );
  };

  const renderChecklistItem = (item: ChecklistItem, index: number) => (
    <div 
      key={item.id} 
      className={`checklist-item ${!interactive ? 'checklist-item-readonly' : ''}`}
      onClick={() => interactive && handleItemToggle(item.id)}
    >
      <div className="item-checkbox-container">
        {interactive ? (
          <Checkbox.Root
            id={item.id}
            checked={item.checked}
            onCheckedChange={() => handleItemToggle(item.id)}
            className="checkbox-root"
          >
            <Checkbox.Indicator className="checkbox-indicator">
              {getCheckIcon()}
            </Checkbox.Indicator>
          </Checkbox.Root>
        ) : (
          <div className={`readonly-checkbox ${item.checked ? 'checked' : ''}`}>
            {item.checked && (
              <div className="check-icon">
                {getCheckIcon()}
              </div>
            )}
          </div>
        )}
      </div>

      {showIcons && (
        <div className="item-icon-container" style={{ color: 'var(--ifm-color-primary)' }}>
          {getIconForItem(item, index)}
        </div>
      )}

      <div className="item-content">
        <div className="item-text-container">
          <label 
            htmlFor={interactive ? item.id : undefined}
            className={`item-label text-${item.textSize} ${item.checked ? 'checked' : ''} ${!interactive ? 'readonly' : ''}`}
          >
            {item.text}
          </label>
        </div>
        
        {item.description && (
          <p className="item-description">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );

  const checklistContent = (
    <div className="checklist-side">
      <div className="checklist-header">
        <h2 className="checklist-title">{title}</h2>
        {subtitle && (
          <p className="checklist-subtitle">{subtitle}</p>
        )}
      </div>

      <div className="checklist-items-container">
        {renderChecklistItems()}
      </div>


			{ takeAway ?
      <div className="checklist-footer">
				{takeAway}
      </div>
			: '' }

    </div>
  );

  const imageContent = (
    <div className="image-side">
      <div className="image-container">
        <div className="image-wrapper">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="image"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className={`split-checklist-section ${className || ''}`}>
      <div className="split-checklist-container">
        <div className={`split-checklist-grid ${checklistFirst ? 'checklist-first' : 'image-first'}`}>
          <div className={checklistFirst ? 'grid-order-1' : 'grid-order-2'}>
            {checklistContent}
          </div>
          <div className={checklistFirst ? 'grid-order-2' : 'grid-order-1'}>
            {imageContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitChecklistSection;