// In your .mdx file
import { JSX } from 'react';

import styles from './styles.module.css';
import CardsRow from '../../basic/cardrow/CardsRow';
import { BaseCardProps } from '../../basic/cardrow/Card';

// Example with typed cards array
const featureCards: BaseCardProps[] = [
  {
    variant: "primary",
		image: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png",
		imageHeight: "120px",
    title: "Security",
    description: "With billions stolen every year, ensuring security is a must or any cryptocurrency. This includes audits, testing, backups or any possible mechanism to guarantee that your funds are safu.",
    buttonText: "More",
    href: "/",
  },
  {
    variant: "primary",
		image: "/img/decentralization.webp",
		imageHeight: "120px",
    title: "Decentralization",
    description: "The benefits of Inmutabibility and Interop Layer will enable delivering decentralization out of the box so project can be decentralizaed from inception.",
    buttonText: "More",
    href: "/",
  },
  {
    variant: "primary",
		image: "https://cdn-icons-png.flaticon.com/512/1317/1317755.png",
		imageHeight: "120px",
    title: "Transparency",
    description: "Investor and users need fluid and trustfull information about the currency they are using. We must include configurable reports with enabled interoperability formats between servers.",
    buttonText: "More",
    href: "/",
  },
	{
    variant: "primary",
		image: "https://cdn-icons-png.flaticon.com/512/8226/8226075.png",
		imageHeight: "120px",
    title: "Compliance",
    description: "With juristictions increasingly stressing legilation around cryptocurrencies, any crypto must allow optional and configurable compliance mechanisms without reinvnting the wheel.",
    buttonText: "More",
    href: "/",
  },
];

export default function FeaturesSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

				<CardsRow
					title="Layer 5: Principles Layer"
					description="An Abstraction Layer, which delivers the foundational principles of blockchain out of the box, to build Quality Fungible Tokens."
					columns={3}
					cards={featureCards}
				/>

			</div>
		</section>

  );
}
