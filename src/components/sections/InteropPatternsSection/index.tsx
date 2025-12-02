import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";

export default function InteropPatternsSection(): JSX.Element {
  return (
    
			<GenericSection
				title="Interoperability Patterns"
				subtitle="Give me a lever long enough and a fulcrum on which to place it, and I shall move the world. Archimedes."
				variant="secondary"
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