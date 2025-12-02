// In your .mdx file
import TabFolder from '@site/src/components/basic/why/TabFolder';
import { JSX } from 'react';

import styles from './styles.module.css';

export default function Why2TabFolderSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

				<div className={`cards-row__header cards-row__header--center`}>
					<h2 className="cards-row__title">Building Quality Fungible Tokens</h2>
					<p className="cards-row__description">An Open Source Framework to build <b>Quality Fungible Tokens</b></p>
				</div>

				<TabFolder
					tabs={[
						{
							id: 'why',
							label: 'Why Fungible Standard?',
							content: (
								<div>
									<h3>Why Fungible Standard?</h3>
									<p>Because all flavours of Fungible Tokens share 99% of implementation.</p>
									<p>There is not point in reinventing the wheel for each single project when we can enojoy ready-to-go tokens offering all the quality features and waiting for your customization.</p>
									<p>Fungible Standard aims to standardize Fungible Tokens End-To-End process from inception to Go-To-Market so you can issue your tokens in no time, with no money and with proven quality respecting the foundational principles of blockchain.</p>
									<p>Fungible Standard aims protect retail investors, holders and users as a required stakeholders in the blockchain industry.</p>
								</div>
							)
						},
						{
							id: 'scope',
							label: 'What is the scope?',
							content: (
								<div>
									<h3>What is the scope?</h3>
									<p>Fungible Standards aims to uncover the topics related to Fungible Tokens in the following dimensions:</p>
									<p>* Fungible Standard defines a QoS Maturity Model for Fungible Tokens.</p>
									<p>* Fungible Standard defines a cover all flavours of Fungible Tokens.</p>
									<p>* Fungible Standard defines a the e2e lifecycle of issuance and management of a Fungible Token.</p>
									<p>* Fungible Standard provides interface to the existing ecosystems applying to Fungible Tokens.</p>
								</div>
							)
						},
						{
							id: 'ready',
							label: 'Ready To Go',
							content: (
								<div>
									<h3>Ready To Go</h3>
									<p>Fungible Standard Tokens are ready to be configured with your preferred features and go to the market.</p>
									<p>You wont have to bother about the headaches of building, testing, auditing your tokens and your investors will enjoy the benefit of proven good practices.</p>
								</div>
							)
						}
					]}
					variant="bordered"
				/>

			</div>
		</section>

  );
}