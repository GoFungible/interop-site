// src/components/splitSection/EnhancedSplitSection.tsx
import React from 'react';
import './EnhancedSplitSection.css';

export interface SplitSectionProps {
  image: {
    src: string;
    alt: string;
    position?: 'left' | 'right';
    width?: number;
    height?: number;
  };
  content: {
    title: string;
    text: string | React.ReactNode;
    titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  };
  reverse?: boolean;
  verticalAlign?: 'top' | 'center' | 'bottom';
  spacing?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
  imageFirst?: boolean;
}

interface EnhancedSplitSectionProps extends SplitSectionProps {
  background?: 'none' | 'light' | 'gray' | 'gradient';
  rounded?: boolean;
  shadow?: boolean;
}

const EnhancedSplitSection: React.FC<EnhancedSplitSectionProps> = ({
  image,
  content,
  reverse = false,
  verticalAlign = 'center',
  spacing = 'medium',
  className = '',
  background = 'none',
  rounded = false,
  shadow = false
}) => {
  const TitleTag = `h${content.titleLevel || 2}` as keyof React.JSX.IntrinsicElements;

  return (
    <section className={`
      enhanced-split-section 
      enhanced-split-section--${reverse ? 'reverse' : 'normal'}
      enhanced-split-section--${verticalAlign}
      enhanced-split-section--spacing-${spacing}
      enhanced-split-section--bg-${background}
      ${rounded ? 'enhanced-split-section--rounded' : ''}
      ${shadow ? 'enhanced-split-section--shadow' : ''}
      ${className}
    `}>
      <div className="enhanced-split-section__container">
        {/* Image Column */}
        <div className="enhanced-split-section__image">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            className={rounded ? 'enhanced-split-section__image-rounded' : ''}
          />
        </div>

        {/* Content Column */}
        <div className="enhanced-split-section__content">
          <TitleTag className="enhanced-split-section__title">
            {content.title}
          </TitleTag>
          <div className="enhanced-split-section__text">
            {typeof content.text === 'string' ? (
              <p>{content.text}</p>
            ) : (
              content.text
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedSplitSection;