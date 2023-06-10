import type { ImageItem } from '$lib/components/ImagesPreview';
export const prerender = true;

const images: ImageItem[] = [
	{
		url: '/uploads/agreed/Frame-10123534.webp',
		title: 'Idea Overview',
		description:
			'Agreed guides everyone to transform good ideas into reliable business cases with validated risks, costs & benefits.'
	},
	{
		url: '/uploads/agreed/Screenshot-3.webp',
		title: 'Idea Risk',
		description:
			'Help your team deliver predictable wins with a proven process and software that moves work along between meetings.'
	},
	{
		url: '/uploads/agreed/12.webp',
		title: 'Space Ideas',
		description:
			'Unlock valuable institutional knowledge by engaging your people to create clear ideas that are easy to understand and prioritize.'
	}
];

export const load = () => ({
	pageName: 'page-works',
	projectData: {
		images
	}
});
