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
			LEMON.AL <a target="_blank" href="https://lemon.al">
				<i class="fa fa-external-link" />
			</a>
		</h1>
		<p>
			Lemon.al is a website for online food ordering marketplace. It enables restaurants to become
			visible in the online and mobile world and provides them with an industry leading software and
			technology to generate additional demand. For consumers, lemon.al offers the convenience to
			order food online and the widest gastronomic range, from which they can choose their favourite
			meal online with a few fingertips.
		</p>
		<ImagesPreviewList {images} />
	</Col>
</Container>
