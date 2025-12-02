import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../GenericSection";

export default function SpecializationSection(): JSX.Element {
  return (
    
		<GenericSection
			title="Layer 6: Specialization Layer"
			subtitle="Once we have all Components in place we can focus on Specialization on the different flavours of Captured Value. Fungible Standard defines delivers out of the box fungible tokens ready to capture different flavours of value."
			variant="secondary"
			padding="large"
			headerSpacing="large"
			headerClassName={styles.heroHeaderContent}
		>

				<SplitSection
					image={{
						src: '/img/tokenization_maturity_model_seal_table.svg',
						alt: 'Our amazing feature in action',
						width: 800,
						height: 600
					}}
					content={{
						title: 'Powerful Feature Name',
						titleLevel: 2,
						text: (
							<div>
								<p>Existing tokenization patterns hold specialized features and are suitable for different applications.</p>
								<p>By different reasons, all the existing tokens, fall short in delivering the funtions of a Medium of Exchange and this is preventing mainstream adoption and real world use cases.</p>
								<p>CryptoCommodity combines the features of existing tokens aiming to become the first (crypto)currency representing Sound Money ever. The specifications have been written decades or centuries ago and we are in the time to apply this knowledge.</p>
								<p>Join us on the mission to design how the Digital Sound Money should look like.</p>
							</div>
						)
					}}
				/>

		</GenericSection>
  );
}