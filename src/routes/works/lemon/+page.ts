import type { ImageItem } from '$lib/components/ImagesPreview';
export const prerender = true;

const images: ImageItem[] = [
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-02-25.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-02-47.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-03-12.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-03-26.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-03-54.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-04-03.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-04-10.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-04-15.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-05-03.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-05-15.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-06-41.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-06-56.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-07-34.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-07-56.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-11.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-15.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-19.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-27.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-37.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-45.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-09-36.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-10-42.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-10-44.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-11-02.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-12-38.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-12-45.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-12-54.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-13-02.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-14-00.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-14-15.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-14-24.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-15-16.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-15-50.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-16-12.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-16-32.png'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-17-04.png'
	}
];

export const load = () => ({
	pageName: 'page-works',
	projectData: {
		images
	}
});
