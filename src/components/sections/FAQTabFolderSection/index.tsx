// In your .mdx file
import FAQTabFolder from '@site/src/components/basic/faq/FAQTabFolder';

import styles from './styles.module.css';
import { JSX } from 'react';

export default function FAQTabFolderSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">


				<FAQTabFolder
					title="Frequently Asked Questions"
					description="Find answers to common questions about our product and services"
					showSearch={true}
					variant="bordered"
					faqs={[
						{
							id: '1',
							question: 'How do I get started?',
							answer: 'To get started, simply sign up for an account and follow our onboarding guide. You can also check out our getting started documentation for step-by-step instructions.',
							category: 'Getting Started'
						},
						{
							id: '2',
							question: 'What payment methods do you accept?',
							answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.',
							category: 'Billing'
						},
						{
							id: '3',
							question: 'Can I cancel my subscription anytime?',
							answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.',
							category: 'Billing'
						},
						{
							id: '4',
							question: 'Do you offer customer support?',
							answer: 'Yes, we offer 24/7 customer support via email and live chat. Enterprise customers also have access to dedicated phone support.',
							category: 'Support'
						},
						{
							id: '5',
							question: 'Is there a free trial available?',
							answer: (
								<div>
									<p>Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.</p>
									<p>After the trial, you can choose from our flexible pricing plans that scale with your needs.</p>
								</div>
							),
							category: 'Getting Started'
						}
					]}
					categories={['Getting Started', 'Billing', 'Support', 'Features']}
				/>

			</div>
		</section>

  );
}
