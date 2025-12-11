import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import BackgroundImageHeader from '../components/headers/BackgroundImageHeader';
import InteropProblemSection from '../components/sections/InteropProblemSection';
import InteropPatternsSection from '../components/sections/InteropPatternsSection';
import InteropWorkaroundSection from '../components/sections/InteropWorkaroundSection';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

			<BackgroundImageHeader
        backgroundImage="https://scx2.b-cdn.net/gfx/news/hires/2013/subarcticlak.jpg"
        title="Fungible Interoperability"
        subtitle="Simplicity is the ultimate sophistication"
        textSide="right"
        overlayOpacity={0.4}
      />

			<main>
				<InteropProblemSection />
				<InteropWorkaroundSection />
				<InteropPatternsSection />
      </main>

    </Layout>
  );
}
