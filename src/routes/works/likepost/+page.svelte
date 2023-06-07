<script lang="ts">
	import type { PageData } from './$types';
	import { Container, Col } from 'sveltestrap/src';
	import { ImagesPreviewList } from '$lib/components/ImagesPreview';
	export let data: PageData;
	let { images } = data.projectData;
</script>

<Container>
	<Col>
		<h1>
			LIKE-POST.COM <a target="_blank" href="https://like-post.com">
				<i class="fa fa-external-link" />
			</a>
		</h1>
		<p>
			Like-post.com is a shorten url website for making beauty facebook/twitter posts. Furthermore
			it servers to post website that are not allowed to be posted (banned) from facebook/twitter.
		</p>
		<ImagesPreviewList {images} />
	</Col>
</Container>
