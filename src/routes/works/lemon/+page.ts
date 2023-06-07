import type { ImageItem } from '$lib/components/ImagesPreview';
export const prerender = true;

const images: ImageItem[] = [
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-02-25.png',
		title: 'Home page',
		description:
			'Home page where users and guests can search for near restaurants. This is done by getting the longitude and longitude from google maps and searching in database.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-02-47.png',
		title: 'Daily meal',
		description: '"Lemon meal" is the daily recomendet meal.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-03-12.png',
		title: 'Search results',
		description: 'Available search results that can offer the delivery service.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-03-26.png',
		title: 'Restaurant wall',
		description: 'Restaurant page wall.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-03-54.png',
		title: 'Restaurant wall',
		description: 'Restaurant page wall with not empty cart.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-04-03.png',
		title: 'Restaurant menu',
		description: 'Restaurant menu.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-04-10.png',
		title: 'Restaurant working hours',
		description: 'Restaurant working hours.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-04-15.png',
		title: 'Restaurant address',
		description: 'Restaurant map.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-05-03.png',
		title: 'Order customization',
		description: 'Order customization.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-05-15.png',
		title: 'Login / Signup',
		description: 'Login or Signup.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-06-41.png',
		title: 'All orders',
		description: 'Admin portal: All orders.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-06-56.png',
		title: 'Order details',
		description: 'Admin portal: Order details view.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-07-34.png',
		title: 'Restaurant settings',
		description: 'Admin portal: Restaurant profile & settings.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-07-56.png',
		title: 'Restaurant settings',
		description: 'Admin portal: Restaurant profile & settings upload images.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-11.png',
		title: 'Restaurant menu',
		description: 'Admin portal: Restaurant menu.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-15.png',
		title: 'Restaurant daily meal',
		description: 'Admin portal: Restaurant menu meal.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-19.png',
		title: 'Restaurant working hours',
		description: 'Admin portal: Restaurant working hours.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-27.png',
		title: 'Food categories',
		description: 'Admin portal: All food categories.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-37.png',
		title: 'Menu categories',
		description: 'Admin portal: Menu categories.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-08-45.png',
		title: 'Menu categories',
		description: 'Admin portal: Sorting menu categories.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-09-36.png',
		title: 'Customers list',
		description: 'Admin portal: All customers list.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-10-42.png',
		title: 'Customers list',
		description: 'Admin portal: Filter customers.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-10-44.png',
		title: 'Customers list',
		description: 'Admin portal: Filter customers advance.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-11-02.png',
		title: 'Order bill',
		description: 'Admin portal: Order bill.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-12-38.png',
		title: 'Order preview',
		description: 'Order preview.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-12-45.png',
		title: 'Order preview',
		description: 'Successful order preview.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-12-54.png',
		title: 'Order observator',
		description: 'Admin portal: Orders observating. If anything delayed it will right the bell.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-13-02.png',
		title: 'Order observator'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-14-00.png',
		title: 'Restaurant login',
		description: 'Restaurant portal: Login page.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-14-15.png',
		title: 'Restaurant dashboard',
		description:
			'Restaurant portal: Dashboard, in the left are for cooking and in the right are meals in cooking.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-14-24.png',
		title: 'Restaurant dashboard'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-15-16.png',
		title: 'Kitchen PDF bill',
		description: 'Restaurant portal: PDF Printable bill for the kitchen.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-15-50.png',
		title: 'All orders',
		description: 'Restaurant portal: All orders.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-16-12.png',
		title: 'Customer PDF bill',
		description: 'Restaurant portal: PDF Printable for the customer.'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-16-32.png',
		title: 'Customer PDF bill'
	},
	{
		url: '/uploads/lemon/Screenshot from 2016-06-27 22-17-04.png',
		title: 'Order preview'
	}
];

export const load = () => ({
	pageName: 'page-works',
	projectData: {
		images
	}
});
