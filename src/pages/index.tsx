import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import FeaturesSection from '../components/sections/FeaturesSection';
import SpecializationSection from '../components/sections/SpecializationSection';
import EcosystemSection from '../components/sections/EcosystemSection';
import ValueChainSection from '../components/sections/ValueChainSection';
import EpicFailSection from '../components/sections/EpicFailSection';
import BackgroundImageHeader from '../components/headers/BackgroundImageHeader';
import LayersSection from '../components/sections/LayeredSection/LayersSection';
import StandardizationSection from '../components/sections/StandardizationSection';
import IdentittyCrisisSection from '../components/sections/IdentittyCrisisSection';
import ImmutabilitySection from '../components/sections/ImmutabilitySection';
import InteropSection from '../components/sections/InteropLayer';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

			<BackgroundImageHeader
        backgroundImage="https://t3.ftcdn.net/jpg/12/00/36/52/360_F_1200365289_EjvAS2WLx26KOlqOCx71zdEUvjhNEncM.jpg"
        title="Fungible Standard"
        subtitle="Simplicity is the ultimate sophistication"
        textSide="left"
        overlayOpacity={0.4}
      />

			<main>
				<br/>
				<br/>
				<EpicFailSection />
				<br/>
        <LayersSection />
				<EcosystemSection />
				<br/>
				<StandardizationSection />
				<IdentittyCrisisSection />
				<ImmutabilitySection />
				<InteropSection />
				<br/>
				<FeaturesSection />
				<br/>
				<SpecializationSection />
				<ValueChainSection />
      </main>

    </Layout>
  );
}
