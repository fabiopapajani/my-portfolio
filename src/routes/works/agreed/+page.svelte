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
			AGREED.IO <a target="_blank" href="https://www.agreed.io">
				<i class="fa fa-external-link" />
			</a>
		</h1>
		<p>
			Making lots of valuable decisions is easier than you think. Agreed guides everyone to
			transform good ideas into reliable business cases with validated risks, costs & benefits.
		</p>
		<ImagesPreviewList {images} />
	</Col>
</Container>
