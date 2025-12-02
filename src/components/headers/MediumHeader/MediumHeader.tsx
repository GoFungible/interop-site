// In your src/components/HomepageHeader.tsx
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './MediumHeader.module.css';
import Heading from '@theme/Heading';

interface HomepageHeaderProps {
  // You can add props here if needed
}

// https://medium.com/@techwritershub/set-up-and-customize-a-documentation-site-with-docusaurus-ca7e00a398d3
const MediumHeader: React.FC<HomepageHeaderProps> = () => {
  const { siteConfig } = useDocusaurusContext();
  
	return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">

        <div className="hero__pretext">
          <span>Hands-on tutorial 🔥</span>
        </div>
        <Heading as="h1" className="hero__title">
          Get Started With Docs Site
        </Heading>

        <p className="hero__subtitle">
          Docs Site is a comprehensive platform designed to help you create,
          manage, organize and share documentation effortlessly. Whether you're
          a developer, writer, or project manager.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ alignSelf: "left" }}
          >
            Let's Explore - 5min ⏱️
          </Link>
        </div>
      </div>

      <div className="banner__img">
        <img src="https://cdn-icons-png.flaticon.com/512/8226/8226075.png" alt="at something" />
      </div>
    </header>

  );
};

export default MediumHeader;