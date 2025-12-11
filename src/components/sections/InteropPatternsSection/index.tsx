import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";

export default function InteropPatternsSection(): JSX.Element {
  return (
    
			<GenericSection
				title="Interoperability Patterns"
				subtitle="This project identifies interoperability patterns and proposes standardized approaches and delivers implementation backed on the existing relayers."
				variant="secondary"
				padding="large"
				headerSpacing="large"
				headerClassName={styles.heroHeaderContent}
			>

			<SplitSection
				image={{
					src: 'https://thumbs.dreamstime.com/b/woman-man-people-jigsaw-puzzle-pieces-vector-couple-business-problem-partnership-human-hand-connect-bridge-partner-261956584.jpg',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: '-',
					titleLevel: 2,
					text: (
						<div>
							<p>Patterns.</p>
						</div>
					)
				}}
				reverse={false}
				spacing="large"
			/>

			</GenericSection>

  );
}