<script lang="ts">
	import { Container } from 'sveltestrap/src';
	import ProjectItem from './ProjectItem.svelte';
	// import lemonThumbnail from '$lib/images/lemon/thumbs/1_450x255.png';
	// import likepostThumbnail from '$lib/images/likepost/thumbs/1_450x255.png';
	// import rubikscubeThumbnail from '$lib/images/rubikscube/thumbs/1_450x255.png';
</script>

<Container>
	<ProjectItem
		title="LEMON.AL"
		externalUrl="https://lemon.al"
		readMoreUrl="works/lemon"
		image="/uploads/lemon/thumbs/1_450x255.png"
	>
		Lemon.al is a website for online food ordering marketplace. It enables restaurants to become
		visible in the online and mobile world and provides them with an industry leading software and
		technology to generate additional demand. For consumers, lemon.al offers the convenience to
		order food online and the widest gastronomic range, from which they can choose their favourite
		meal online with a few fingertips.
	</ProjectItem>
	<hr class="style-seven" />
	<ProjectItem
		title="LIKE-POST.COM"
		externalUrl="https://like-post.com"
		readMoreUrl="works/likepost"
		image="/uploads/likepost/thumbs/1_450x255.png"
	>
		Like-post.com is a shorten url website for making beauty facebook/twitter posts. Furthermore it
		servers to post website that are not allowed to be posted (banned) from facebook/twitter.
	</ProjectItem>
	<hr class="style-seven" />
	<ProjectItem
		title="RUBIKSCUBE.AL"
		externalUrl="https://rubikscube.al"
		readMoreUrl="works/rubikscube"
		image="/uploads/rubikscube/thumbs/1_450x255.png"
	>
		Rubik's Cube is my first website made from scratch. Starting with blueprint & desing continuing
		with development & testing and finaly feeling the pleasure of my achievement.
	</ProjectItem>
</Container>
