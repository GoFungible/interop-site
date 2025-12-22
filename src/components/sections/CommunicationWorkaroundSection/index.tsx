import { JSX } from "react";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";
import SplitChecklistSection, { ChecklistItem } from "../../basic/SplitChecklistSection/SplitChecklistSection";
import CardsRow from '../../basic/cardrow/CardsRow';
import { BaseCardProps } from "../../basic/cardrow/Card";

export default function CommunicationWorkaroundSection(): JSX.Element {

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

  const minimalItems: ChecklistItem[] = [
    {
      id: 'step-1',
      text: 'Validators monitor the "source chain" for specific events, verify the observed event and create a cryptographic proof that can be relayed.',
      checked: false,
      textSize: 'xl'
    },
    {
      id: 'step-2',
      text: 'Relayers act as data messengers by transporting, monitoring, and delivering data, messages, or asset proofs between different blockchain networks.',
      checked: false,
      textSize: 'xl'
    },
    {
      id: 'step-2',
      text: 'Verifiers confirm the authenticity and validity of cross-chain messages, transactions, or data ensuring that information has not been tampered with. ',
      checked: false,
      textSize: 'xl'
    },
    {
      id: 'step-2',
      text: 'Routers often uses multiple relayers under the hood and determine the most efficient path of swaps in order to get the lowest slippage.',
      checked: false,
      textSize: 'xl'
    },
    {
      id: 'step-2',
      text: 'Sequencers collects bids from all chains and randomly selects router(s) to fulfill them. Any number of routers can fulfill a single transaction, which is especially useful for large transfers.',
      checked: false,
      textSize: 'xl'
    },
	];

  return (
    
		<GenericSection
			title="The Interchain Communication Workaround"
			subtitle="By a combination of different off-chain Agents is possible to route messages from contracts in a blockchain to contracts in another blockchain."
			variant="default"
			padding="large"
			headerSpacing="large"
			headerClassName={styles.heroHeaderContent}
		>

			<SplitChecklistSection
				title="An off-chain routing ecosystem"
				subtitle="Different agents collaborate in enabling interchain communication:"
				//takeAway="And, overall, a wrong understanding of technological process, which does not work in that way."
				checklistItems={minimalItems}
				imageSrc="/img/drawings/interop_message.svg"
				imageAlt="Development environment"
				checklistFirst={false}
				columns={1}
				interactive={false}
				showIcons={false}
				iconSet="hi"
			/>

			<CardsRow
				description='In order to select the right combination of interoperability agents for our Fungible Token, we must balance features and service level delivered by the different providers.'
				columns={3}
				cards={featureCards}
			/>

		</GenericSection>

  );
}