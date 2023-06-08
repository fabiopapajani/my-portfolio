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
			THEOPTIMIZER.COM <a target="_blank" href="https://theoptimizer.io">
				<i class="fa fa-external-link" />
			</a>
		</h1>
		<p>
			Theoptimizer.com is a platform for automatic bidding, automatic placement blocking, global
			blacklists/whitelists, bulk campaign creator, real time reporting and much more.
		</p>
		<ImagesPreviewList {images} />
	</Col>
</Container>
