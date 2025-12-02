// In your .mdx file
import { JSX } from 'react';

import styles from './styles.module.css';
import CardsRow from '../../basic/cardrow/CardsRow';
import { BaseCardProps } from '../../basic/cardrow/Card';

// Example with typed cards array
const featureCards: BaseCardProps[] = [
  {
    variant: "primary",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLav7s_5yeEZcwNyxf5DeD-F-gYt9FxFm8uvtvem8NNXLofDE6jFFx6r0_YgeNrqqf6U&usqp=CAU",
		imageHeight: "120px",
    title: "DLT Networks",
    description: "With hundreds of DLT networks with different consensus protocols, gas fees or ecosystems is necessary to understand which ones comply with value-based cryptocommodities.",
    buttonText: "More",
    href: "/",
  },
  {
    variant: "primary",
		image: "https://www.catallactic.org/img/parking.png",
		imageHeight: "120px",
    title: "Wallets",
    description: "Despite there are more than 1 hundred of wallets in offer in the crypto market, there is not a simple $20 HW wallet, as a Garage Door Opener, to pay in real markets and this is preventing massification.",
    buttonText: "More",
    href: "/",
  },
  {
    variant: "primary",
		image: "https://www.catallactic.org/img/barter.png",
		imageHeight: "120px",
    title: "Exchanges",
    description: "When issuing your value-based cryptocommodities it is necessary to understand what CEX, HEX, DEX, FEX, Liquidity Aggregators comply with the Trading, Operations and Distribution.",
    buttonText: "More",
    href: "/",
  },
];

export default function EcosystemSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

				<CardsRow
					title="Layer 1: Ecosystems Layer (2009-2015)"
					description="Defining the criteria and selecting the pieces that comply with the value capture principles will provide better adoption in an already saturated ecosystem."
					columns={3}
					cards={featureCards}
				/>

			</div>
		</section>

  );
}
