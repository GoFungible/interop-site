import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";

export default function IdentittyCrisisSection(): JSX.Element {
  return (
    
			<GenericSection
				title="The Identity Crisis (2025+)"
				subtitle="In his 16th aniversary, blockchain industry looks immersed on his own adolescence crisis. It gets proposals from all directions and is confused about what it wants to become."
				variant="light"
				padding="large"
				headerSpacing="large"
				headerClassName={styles.heroHeaderContent}
			>

			<SplitSection
				image={{
					src: 'https://media.istockphoto.com/id/476958697/es/vector/lobo-de-historieta-sheeps-ropa.jpg?s=612x612&w=0&k=20&c=G4fPi4uBIalpom5lxD7V8o0xa4FpVBxxhEb1HRfdhhk=',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: 'The Great Capitulation',
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

			<SplitSection
				image={{
					src: 'https://www.strandbaptist.org.za/uploads/4/2/1/5/4215011/download_2_orig.jpg',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: 'References to Get Back on Track',
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