// src/components/EnhancedCardsRow.tsx
import React from 'react';
import EnhancedCard, { BaseCardProps } from './Card';
import './CardsRow.css';

export interface CardsRowProps {
  cards: BaseCardProps[];
  columns?: 2 | 3 | 4 | 5 | 6 | 7;
  title?: string;
  description?: string;
  posttitle?: string;
  postdescription?: string;
	className?: string;
  align?: 'left' | 'center' | 'right';
}

const EnhancedCardsRow: React.FC<CardsRowProps> = ({ 
  cards, 
  columns = 3,
  title,
  description,
  posttitle,
  postdescription,
	className = '',
  align = 'center',
}) => {
  return (
    <section className={`cards-row ${className}`}>
      {(title || description) && (
        <div className={`cards-row__header cards-row__header--${align}`}>
          {title && <h2 className="cards-row__title">{title}</h2>}
          {description && <p className="cards-row__description">{description}</p>}
        </div>
      )}
      
      <div className={`cards-row__grid cards-row__grid--${columns}`}>
        {cards.map((card, index) => (
          <EnhancedCard
            key={index}
            title={card.title}
            titleColor={card.titleColor}
            titleLocation={card.titleLocation}
            description={card.description}
            descriptionColor={card.descriptionColor}
            href={card.href}
            image={card.image}
						imageHeight={card.imageHeight}
            icon={card.icon}
            buttonText={card.buttonText}
            variant={card.variant}
            onClick={card.onClick}
            crossed={card.crossed}
          />
        ))}
      </div>

      {(posttitle || postdescription) && (
        <div className={`cards-row__footer cards-row__footer--${align}`}>
          {posttitle && <h2 className="cards-row__posttitle">{posttitle}</h2>}
          {postdescription && <p className="cards-row__postdescription">{postdescription}</p>}
        </div>
      )}

    </section>
  );
};

export default EnhancedCardsRow;