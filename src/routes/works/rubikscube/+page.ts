import type { ImageItem } from '$lib/components/ImagesPreview';
export const prerender = true;

const images: ImageItem[] = [
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-23-31.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-23-53.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-24-49.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-26-46.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-27-14.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-27-32.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-28-12.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-28-35.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-28-51.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-29-38.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-31-01.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-31-38.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-31-46.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-32-10.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-32-28.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-32-38.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-33-05.png'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-33-23.png'
	}
];

export const load = () => ({
	pageName: 'page-works',
	projectData: {
		images
	}
});
