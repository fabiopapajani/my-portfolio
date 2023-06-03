<script lang="ts">
	import { Container, Col } from 'sveltestrap/src';
	const images: string[] = [
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-23-31.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-23-53.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-24-49.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-26-46.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-27-14.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-27-32.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-28-12.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-28-35.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-28-51.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-29-38.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-31-01.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-31-38.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-31-46.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-32-10.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-32-28.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-32-38.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-33-05.png',
		'/uploads/rubikscube/Screenshot from 2016-08-03 01-33-23.png'
	];
</script>

<Container>
	<Col>
		<h1>
			RUBIKSCUBE.AL <a target="_blank" href="https://rubikscube.al">
				<i class="fa fa-external-link" />
			</a>
		</h1>
		<ul class="list-unstyled">
			{#each images as url}
				<li>
					<a target="_blank" href={url}
						><img alt="project screenshot" class="img-thumbnail img-responsive" src={url} /></a
					>
				</li>
			{/each}
		</ul>
	</Col>
</Container>
