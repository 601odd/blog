// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Odd Site',
	tagline: '香香公主',
	favicon: 'img/favicon.ico',
	headTags: [
		{
			tagName: 'link',
			attributes: {
				rel: 'icon',
				href: '/img/iamge.png',
			},
		},
	],
	// Set the production url of your site here
	url: 'https://your-docusaurus-test-site.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',
	plugins: ['@docusaurus/theme-live-codeblock'],
	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: '601odd', // Usually your GitHub org/user name.
	projectName: 'odd', // Usually your repo name.k

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
		path: 'i18n',
		localeConfigs: {
			en: {
				label: 'English',
				direction: 'ltr',
				htmlLang: 'en-US',
				calendar: 'gregory',
				path: 'en',
			},
			fa: {
				label: 'فارسی',
				direction: 'rtl',
				htmlLang: 'fa-IR',
				calendar: 'persian',
				path: 'fa',
			},
			zh: {
				label: 'zh-Hans',
				direction: 'ltr',
				htmlLang: 'zh-Hans',
				calendar: 'persian',
				path: 'zh',
			},
		},
	},
	noIndex: true, // 默认为 `false` 不要爬去站点

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true, // 如果设置为 false，「x 分钟阅读」的文字就不会显示
					readingTime: ({ content, frontMatter, defaultReadingTime }) =>
						defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			// algolia: {
			// 	contextualSearch: true,
			// },
			liveCodeBlock: {
				/**
				 * 实时效果显示的位置，在编辑器上方还是下方。
				 * 可为："top" | "bottom"
				 */
				playgroundPosition: 'bottom',
			},
			navbar: {
				title: 'My Site',
				logo: {
					alt: 'My Site Logo',
					// src: 'img/logo.svg',
					src: 'img/image.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Tutorial',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/docusaurus',
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/docusaurus',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			docs: {
				sidebar: {
					hideable: true,
					autoCollapseCategories: true,
				},
				// breadcrumb: false,
			},
			// colorMode: {
			// 	defaultMode: 'light',
			// 	disableSwitch: false,
			// 	// respectPrefersColorScheme: true,
			// },
		}),
}

module.exports = config
