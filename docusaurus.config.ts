import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Fungible Standard',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.fungible.design/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gofungible', // Usually your GitHub org/user name.
  projectName: 'gofungible-site', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
		metadata: [
			{name: 'keywords', content: 'memecoin, reputoken, utility token, security token, fungible, standard'},
		],
    colorMode: {
      respectPrefersColorScheme: true,
    },

		navbar: {
      title: 'Fungible Standard',
      hideOnScroll: true,
      logo: {
        alt: 'Fungible Standard',
        src: 'img/logo32x32.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'stackSidebar',
          position: 'left',
          label: 'Maturity Stack',
        },
/*        {
          type: 'docSidebar',
          sidebarId: 'ecosystemSidebar',
          position: 'left',
          label: 'Ecosystems',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ecosystemSidebar',
          position: 'left',
          label: 'Standardization',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ecosystemSidebar',
          position: 'left',
          label: 'Immutability',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ecosystemSidebar',
          position: 'left',
          label: 'Interoperability',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ecosystemSidebar',
          position: 'left',
          label: 'Principles',
        },
				{
          type: 'docSidebar',
          sidebarId: 'valueSidebar',
          position: 'left',
          label: 'Captured Value',
        },
				{
          type: 'docSidebar',
          sidebarId: 'valueChainSidebar',
          position: 'left',
          label: 'Value Chain',
        },
*/
				{to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/GoFungible',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
		footer: {
			style: 'dark',
			links: [{
				title: 'Maturity Stack',
						items: [{
							label: 'Abstraction Layer',
							href: '/docs/valueChain/principles/intro',
						},{
							label: 'Interoperability',
							href: '/docs/valueChain/tokenization/intro',
						}, {
							label: 'Compose',
							href: '/docs/valueChain/funding/intro',
						}, {
							label: 'Baseline',
							href: '/docs/valueChain/negotiation/intro',
						},
					],
				}, {
					title: 'Captured Value',
						items: [{
							label: 'Memecoins',
							href: '/docs/valueChain/principles/intro',
						},{
							label: 'Reputokens',
							href: '/docs/valueChain/tokenization/intro',
						}, {
							label: 'Utility Tokens',
							href: '/docs/valueChain/funding/intro',
						}, {
							label: 'Security Tokens',
							href: '/docs/valueChain/negotiation/intro',
						}, {
							label: 'Stablecoins',
							href: '/docs/valueChain/negotiation/intro',
						}, {
							label: 'Crommodity',
							href: '/docs/valueChain/negotiation/intro',
						},
					],
				}, {
					title: 'Value Chain',
						items: [{
							label: 'Principles',
							href: '/docs/valueChain/principles/intro',
						},{
							label: 'Tokenization',
							href: '/docs/valueChain/tokenization/intro',
						}, {
							label: 'Project Funding',
							href: '/docs/valueChain/funding/intro',
						}, {
							label: 'Token Negotiation',
							href: '/docs/valueChain/negotiation/intro',
						}, {
							label: 'Token Operations',
							href: '/docs/valueChain/distribution/intro',
						}, {
							label: 'DeFi Services',
							href: '/docs/valueChain/defi/intro',
						}, {
							label: 'Crowdsolving',
							href: '/docs/valueChain/crowdsolving/intro',
						}
					],
				}, {
					title: 'Ecosystems',
					items: [{
							label: 'Liquidity Provision',
							href: '/docs/valueChain/defi/liquidity',
						}, {
							label: 'Launchap',
							href: '/docs/valueChain/defi/launchpad',
						}, {
							label: 'Transfers',
							href: '/docs/valueChain/defi/transfers',
						}, {
							label: 'Payments',
							href: '/docs/valueChain/defi/payments',
						}, {
							label: 'Cards',
							href: '/docs/valueChain/defi/cards',
						}, {
							label: 'Lending',
							href: '/docs/valueChain/defi/lending',

						}
					],
				}, 
			],
			copyright: `Copyright © ${new Date().getFullYear()} Fungible Standards, Ltd.`,
		},
    prism: {
      theme: prismThemes.ultramin,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
