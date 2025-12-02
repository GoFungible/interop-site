import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";

export default function InteropSection(): JSX.Element {
  return (
    
			<GenericSection
				title="Layer 4: Interoperability Layer"
				subtitle="Give me a lever long enough and a fulcrum on which to place it, and I shall move the world. Archimedes."
				variant="secondary"
				padding="large"
				headerSpacing="large"
				headerClassName={styles.heroHeaderContent}
			>

			<SplitSection
				image={{
					src: 'https://stealthex.io/blog/wp-content/uploads/2022/06/%D0%A1ross_chain_bridge-5-min.png',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: 'Relayers + Patterns',
					titleLevel: 2,
					text: (
						<div>
							<p>With several hundreds of blockchain <a href="https://chainlist.org/">networks</a>, more than 1700 <a href="https://blockspot.io/exchange/">exchanges</a>, 200 <a href="https://blockspot.io/wallet/">wallets</a> and more thn 1300 <a href="https://eips.ethereum.org/all">ERC standards</a> and the lack of role models and references the industry looks lost into the confusion which is the perfect climate for dishonest behaviour.</p>
						</div>
					)
				}}
				reverse={false}
				spacing="large"
			/>

			</GenericSection>

  );
}