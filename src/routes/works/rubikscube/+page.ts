import type { ImageItem } from '$lib/components/ImagesPreview';
export const prerender = true;

const images: ImageItem[] = [
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-23-31.png',
		title: 'Home page'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-23-53.png',
		title: 'Home page'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-24-49.png',
		title: 'Categories'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-26-46.png',
		title: 'Post'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-27-14.png',
		title: 'Comments'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-27-32.png',
		title: 'Movies'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-28-12.png',
		title: 'Movie page'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-28-35.png',
		title: 'Movie page'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-28-51.png',
		title: 'About us'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-29-38.png',
		title: 'Posts'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-31-01.png',
		title: 'Main Slider'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-31-38.png',
		title: 'Add post'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-31-46.png',
		title: 'Add post'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-32-10.png',
		title: 'Add movie'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-32-28.png',
		title: 'Add movie'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-32-38.png',
		title: 'Movie Slider'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-33-05.png',
		title: 'Edit user'
	},
	{
		url: '/uploads/rubikscube/Screenshot from 2016-08-03 01-33-23.png',
		title: 'Media manager'
	}
];

export const load = () => ({
	pageName: 'page-works',
	projectData: {
		images
	}
});
