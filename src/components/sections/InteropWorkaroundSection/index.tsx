import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";

export default function InteropWorkaroundSection(): JSX.Element {
  return (
    
			<GenericSection
				title="The Interoperability Workaround"
				subtitle="Blockchains were not designed to communicate which each other causing a liquidity fragmentation problem."
				variant="default"
				padding="large"
				headerSpacing="large"
				headerClassName={styles.heroHeaderContent}
			>

			<SplitSection
				image={{
					src: 'img/drawings/interop_relayer.svg',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: 'Multiple ecosystems',
					titleLevel: 2,
					text: (
						<div>
							<p>Multiple ecosystems.</p>
						</div>
					)
				}}
				reverse={true}
				spacing="large"
			/>

			</GenericSection>

  );
}