// In your src/components/HomepageHeader.tsx
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './DefaultHeader.module.css';
import Heading from '@theme/Heading';

interface HomepageHeaderProps {
  // You can add props here if needed
}

// Backgrounds:
// https://blog.torproject.org/tors-fall-harvest-next-generation-onion-services/lead.png
// https://i0.wp.com/luminexgroup.org/wp-content/uploads/2017/01/onion.jpg
// https://static.vecteezy.com/system/resources/thumbnails/072/924/455/small/fresh-yellow-onion-precisely-halved-to-showcase-its-crisp-translucent-layers-and-natural-texture-isolated-on-a-clean-minimalist-studio-background-perfect-for-culinary-projects-photo.jpg
// https://t3.ftcdn.net/jpg/12/00/36/52/360_F_1200365289_EjvAS2WLx26KOlqOCx71zdEUvjhNEncM.jpg
// https://t4.ftcdn.net/jpg/07/66/07/95/360_F_766079571_1D0eigjCIzUbqaA056GAaWxeIdvEBmdH.jpg
const DefaultHeader: React.FC<HomepageHeaderProps> = () => {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;