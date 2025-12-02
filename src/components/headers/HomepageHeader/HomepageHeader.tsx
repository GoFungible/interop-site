// In your src/components/HomepageHeader.tsx
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomepageHeader.module.css';

interface HomepageHeaderProps {
  // You can add props here if needed
}

const HomepageHeader: React.FC<HomepageHeaderProps> = () => {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          {/* Logo and Title */}
          <div className={styles.heroBrand}>
            <img
              src={useBaseUrl('img/logo.svg')}
              alt={siteConfig.title}
              className={styles.heroLogo}
              width={80}
              height={80}
            />
            <h1 className={styles.heroTitle}>
              {siteConfig.title}
            </h1>
          </div>

          {/* Main Headline */}
          <p className={styles.heroSubtitle}>
            Build <span className={styles.highlight}>faster</span>, 
            Ship <span className={styles.highlight}>smarter</span>, 
            Scale <span className={styles.highlight}>better</span>
          </p>

          {/* Value Proposition */}
          <div className={styles.heroDescription}>
            <p>
              Comprehensive documentation, guides, and best practices for 
              developers building modern applications. 
              Get started in minutes, not hours.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={styles.heroButtons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.ctaButton
              )}
              to="/docs/intro"
            >
              🚀 Get Started
            </Link>
            <Link
              className={clsx(
                'button button--outline button--lg',
                styles.secondaryButton
              )}
              to="/docs/intro"
            >
              📚 Read Docs
            </Link>
          </div>

          {/* Social Proof */}
          <div className={styles.socialProof}>
            <div className={styles.stats}>
              <StatItem value="10K+" label="Developers" />
              <StatItem value="99.9%" label="Uptime" />
              <StatItem value="24/7" label="Support" />
            </div>
          </div>

          {/* Scroll Indicator */}
          <ScrollIndicator />
        </div>
      </div>
    </header>
  );
};

// Stat Item Component with TypeScript interface
interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className={styles.stat}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
};

// Scroll Indicator Component
const ScrollIndicator: React.FC = () => {
  const handleScrollClick = (): void => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={styles.scrollIndicator} 
      onClick={handleScrollClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleScrollClick();
        }
      }}
    >
      <span>Explore more</span>
      <div className={styles.arrow}></div>
    </div>
  );
};

export default HomepageHeader;