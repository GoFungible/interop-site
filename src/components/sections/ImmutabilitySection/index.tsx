import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";

export default function ImmutabilitySection(): JSX.Element {
  return (
    
			<GenericSection
				title="Layer 3: Immutability Layer"
				subtitle="Give me a lever long enough and a fulcrum on which to place it, and I shall move the world. Archimedes."
				variant="default"
				padding="large"
				headerSpacing="large"
				headerClassName={styles.heroHeaderContent}
			>

			<SplitSection
				image={{
					src: 'https://www.strandbaptist.org.za/uploads/4/2/1/5/4215011/download_2_orig.jpg',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: 'Compose',
					titleLevel: 2,
					text: (
						<div>
							<p>With several hundreds of blockchain <a href="https://chainlist.org/">networks</a>, more than 1700 <a href="https://blockspot.io/exchange/">exchanges</a>, 200 <a href="https://blockspot.io/wallet/">wallets</a> and more thn 1300 <a href="https://eips.ethereum.org/all">ERC standards</a> and the lack of role models and references the industry looks lost into the confusion which is the perfect climate for dishonest behaviour.</p>
						</div>
					)
				}}
				reverse={true}
				spacing="large"
			/>

			</GenericSection>

  );
}