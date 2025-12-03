// src/components/EnhancedCardsRow.tsx
import React from 'react';
import EnhancedCard, { BaseCardProps } from './Card';
import './CardsRow.css';

export interface CardsRowProps {
  cards: BaseCardProps[];
  columns?: 2 | 3 | 4;
  title?: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const EnhancedCardsRow: React.FC<CardsRowProps> = ({ 
  cards, 
  columns = 3,
  align = 'center',
}) => {
  return (

      
      <div className={`cards-row__grid cards-row__header--${align} cards-row__grid--${columns}`}>
        {cards.map((card, index) => (
          <EnhancedCard
            key={index}
            title={card.title}
            titleLocation={card.titleLocation}
            description={card.description}
            href={card.href}
            image={card.image}
						imageHeight={card.imageHeight}
            icon={card.icon}
            buttonText={card.buttonText}
            variant={card.variant}
            onClick={card.onClick}
          />
        ))}
      </div>
  );
};

export default EnhancedCardsRow;