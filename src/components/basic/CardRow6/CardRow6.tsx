import React from 'react';
import styles from './CardRow6..module.css';

export interface LandingCardRowProps {
  cards: CardItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export interface CardItem {
  icon: string;
  image?: string;
  title: string;
  description: string;
  href?: string;
}

const LandingCardRow: React.FC<LandingCardRowProps> = ({
  cards,
  title = "Why Choose Our Platform?",
  subtitle = "Discover the features that make us stand out",
  className = ''
}) => {
  if (cards.length !== 6) {
    console.warn(`LandingCardRow expects exactly 6 cards, but received ${cards.length}`);
  }

  const handleCardClick = (href?: string) => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <section className={`${styles.section} ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            {title && (
              <h2 className={styles.title}>{title}</h2>
            )}
            {subtitle && (
              <p className={styles.subtitle}>{subtitle}</p>
            )}
            
            <div className={styles.cardRow}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={styles.card}
                  onClick={() => handleCardClick(card.href)}
                  role={card.href ? 'button' : 'article'}
                  tabIndex={card.href ? 0 : -1}
                  onKeyDown={(e) => {
                    if (card.href && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleCardClick(card.href);
                    }
                  }}
                >
                  <div className={styles.cardIcon}>{card.icon}</div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  
                  {card.href && (
                    <div className={styles.cardArrow} aria-hidden="true">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCardRow;