import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import BackgroundImageHeader from '../components/headers/BackgroundImageHeader';
import InteropProblemSection from '../components/sections/InteropProblemSection';
import RelayersSection from '../components/sections/RelayersSection';
import TrustModelsSection from '../components/sections/TrustModelsSection';
import InteropModelsSection from '../components/sections/InteropModelsSection';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

			<BackgroundImageHeader
        backgroundImage="https://scx2.b-cdn.net/gfx/news/hires/2013/subarcticlak.jpg"
        title="Interop"
        subtitle="Simplicity is the ultimate sophistication"
        textSide="left"
        overlayOpacity={0.4}
      />

			<main>
				<InteropProblemSection />
				<RelayersSection />
				<TrustModelsSection />
				<InteropModelsSection />
      </main>

    </Layout>
  );
}
