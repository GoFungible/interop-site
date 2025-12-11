import { JSX } from "react";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";
import SplitSection from "../../basic/splitrow/SplitSection";
import CardsRow from '../../basic/cardrow/CardsRow';
import { BaseCardProps } from "../../basic/cardrow/Card";

export default function InteropWorkaroundSection(): JSX.Element {

	const featureCards: BaseCardProps[] = [
		{
			variant: "primary",
			image: "img/decentralization.webp",
			imageHeight: "120px",
			title: "Coverage",
			description: "Different relayers work for different networks so selecting the right relayer is a decision criteria for the issuer.",
			buttonText: "More",
			href: "/",
		},
		{
			variant: "primary",
			image: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png",
			imageHeight: "120px",
			title: "Trust Models",
			description: "Every relayer features different Trust Model, so is up to the issuer to choose the relayers more suitable for his token.",
			buttonText: "More",
			href: "/",
		},
		{
			variant: "primary",
			image: "img/decentralization.webp",
			imageHeight: "120px",
			title: "Liveness",
			description: "Relayers are pffchina services and therefore run on Web2 servers. It is necessary to guarantee a service level.",
			buttonText: "More",
			href: "/",
		},
		{
			variant: "primary",
			image: "https://cdn-icons-png.flaticon.com/512/1317/1317755.png",
			imageHeight: "120px",
			title: "Costs",
			description: "Gas fees charged for every relayer must be considered when making a decision.",
			buttonText: "More",
			href: "/",
		},
		/*{
			variant: "primary",
			image: "https://cdn-icons-png.flaticon.com/512/8226/8226075.png",
			imageHeight: "120px",
			title: "Compliance",
			description: "With juristictions increasingly stressing legilation around cryptocurrencies, any crypto must allow optional and configurable compliance mechanisms without reinvnting the wheel.",
			buttonText: "More",
			href: "/",
		},*/
	];

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

			<CardsRow
				description='Relayer is an intermediary service that facilitates communication and transaction processing between different blockchains or layers. Different relayers deliver different features.'
				columns={3}
				cards={featureCards}
			/>

			</GenericSection>

  );
}