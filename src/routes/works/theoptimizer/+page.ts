import type { ImageItem } from '$lib/components/ImagesPreview';
export const prerender = true;

const images: ImageItem[] = [
	{
		url: '/uploads/theoptimizer/feature6.5de8c39.png',
		title: 'Automatic Bidding',
		description:
			'Fine-tune bids on campaign, widget, or ad-level matching your campaigns changing dynamics. Increase, or decrease bids by a specific $ or % amount. Or even set them to a specific % of your current bid or EPC, EPV, EPS, etc...'
	},
	{
		url: '/uploads/theoptimizer/feature4.9e29aa8.png',
		title: 'Smart Lists',
		description:
			'Don’t pay twice for traffic that doesn’t convert! Create, use and re-use automatically puplated shared blackists for each ad network and share that amongst several campaigns.'
	},
	{
		url: '/uploads/theoptimizer/feature1.b6bbf0a.png',
		title: 'Create Campaigns & Ads',
		description:
			'Save time and effort creating multiple ads and campaigns in a single flow, while shifting your creatives A/B testing capabilities to the next level'
	},
	{
		url: '/uploads/theoptimizer/feature7.4396f76.png',
		title: 'Virtual Whitelist',
		description:
			'Get traffic from your favourite widgets by applying exclusion filters to your blocking widget rules, or even bidding higher on the widgets you want while your campaign runs on minimum bids.'
	},
	{
		url: '/uploads/theoptimizer/feature8.3c1faea.png',
		title: 'Calculated Metrics',
		description:
			'If your favorite metric is not available among what we already proivde, don’t panic! You can create your own custom metrics and use them in your automatic rules.'
	},
	{
		url: '/uploads/theoptimizer/feature9.72eb4f0.png',
		title: 'Advanced Dayparting',
		description:
			'Simplify your campaigns dayparting schedule using our advanced dayparting schedule rules with built-in time zone selection.'
	},
	{
		url: '/uploads/theoptimizer/integrations-traffic-sources.png',
		title: 'Traffic Sources Integrations'
	},
	{
		url: '/uploads/theoptimizer/integrations-tracking.png',
		title: 'Tracker Integrations'
	}
];

export const load = () => ({
	pageName: 'page-works',
	projectData: {
		images
	}
});
