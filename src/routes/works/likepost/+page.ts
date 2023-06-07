import type { ImageItem } from '$lib/components/ImagesPreview';
export const prerender = true;

const images: ImageItem[] = [
	{
		url: '/uploads/likepost/Screenshot from 2016-08-03 01-11-49.png',
		title: 'Home page'
	},
	{
		url: '/uploads/likepost/Screenshot from 2016-08-03 01-12-08.png',
		title: 'Home page'
	},
	{
		url: '/uploads/likepost/Screenshot from 2016-08-03 01-12-48.png',
		title: 'Short url'
	},
	{
		url: '/uploads/likepost/Screenshot from 2016-08-03 01-13-07.png',
		title: 'Preview'
	},
	{
		url: '/uploads/likepost/Screenshot from 2016-08-03 01-13-46.png',
		title: 'About us'
	}
];

export const load = () => ({
	pageName: 'page-works',
	projectData: {
		images
	}
});
