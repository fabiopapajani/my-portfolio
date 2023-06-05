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
			RUBIKSCUBE.AL <a target="_blank" href="https://rubikscube.al">
				<i class="fa fa-external-link" />
			</a>
		</h1>
		<ImagesPreviewList {images} />
	</Col>
</Container>
