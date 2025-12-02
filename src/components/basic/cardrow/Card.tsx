// src/components/EnhancedCard.tsx
import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import './Card.css';

export type CardVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type Location = 'center' | 'left' | 'right' | 'justify';

export interface BaseCardProps {
  variant?: CardVariant;
  icon?: ReactNode;
  image?: string;
  imageHeight?: string;
  title: string;
  titleLocation?: string;
  description: string;
  href?: string;
  buttonText?: string;
  onClick?: () => void;
}

const EnhancedCard: React.FC<BaseCardProps> = ({ 
  variant = "default",
  icon, 
	image,
	imageHeight = "120px",
  title, 
  titleLocation = "center", 
  description, 
  href, 
  buttonText = "Learn more",
  onClick
}) => {
	const titleClass = `card__title text--${titleLocation}`;
  const cardContent = (
    <>
      {icon && (
        <div className="card__icon">
          {icon}
        </div>
      )}
      {image && (
        <div className="card__image">
          <img src={image} height={imageHeight} />
					</div>
      )}
		  
			<h3 className={titleClass}>{title}</h3>
			
      <p className="card__description">{description}</p>
      {(href || onClick) && (
        <div className="card__button">
          {buttonText}
        </div>
      )}
    </>
  );

  const cardClass = `card card--${variant} ${onClick ? 'card--clickable' : ''}`;

  if (href) {
    return (
      <Link to={href} className={cardClass}>
        {cardContent}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={cardClass} onClick={onClick} type="button">
        {cardContent}
      </button>
    );
  }

  return (
    <div className={cardClass}>
      {cardContent}
    </div>
  );
};

export default EnhancedCard;