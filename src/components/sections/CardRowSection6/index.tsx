// In your .mdx file
import { JSX } from 'react';

import styles from './styles.module.css';
import CardsRow from '../../basic/cardrow/CardsRow';
import { BaseCardProps } from '../../basic/cardrow/Card';

// Example with typed cards array
const featureCards: BaseCardProps[] = [
  {
    title: "Easy to Use",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/",
    buttonText: "Get started",
    variant: "primary"
  },
  {
    title: "Highly Customizable",
    description: "Tailor the platform to your specific needs with extensive customization options.",
    href: "/",
    buttonText: "Customize",
    variant: "secondary"
  },
  {
    title: "Enterprise Ready",
    description: "Scale with confidence using our enterprise-grade infrastructure and support.",
    href: "/",
    buttonText: "Scale up",
    variant: "success"
  },
  {
    title: "Easy to Use",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/",
    buttonText: "Get started",
    variant: "primary"
  },
  {
    title: "Highly Customizable",
    description: "Tailor the platform to your specific needs with extensive customization options.",
    href: "/",
    buttonText: "Customize",
    variant: "secondary"
  },
  {
    title: "Enterprise Ready",
    description: "Scale with confidence using our enterprise-grade infrastructure and support.",
    href: "/",
    buttonText: "Scale up",
    variant: "success"
  },
];

export default function CardRowSection6(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

				<CardsRow
					title="Our Amazing Features"
					description="Discover what makes our product stand out from the crowd"
					columns={2}
					cards={featureCards}
				/>

			</div>
		</section>

  );
}
