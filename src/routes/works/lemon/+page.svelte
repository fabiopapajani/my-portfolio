<script lang="ts">
	import { Container, Col } from 'sveltestrap/src';
	const images: string[] = [
		'/uploads/lemon/Screenshot from 2016-06-27 22-02-25.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-02-47.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-03-12.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-03-26.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-03-54.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-04-03.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-04-10.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-04-15.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-05-03.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-05-15.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-06-41.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-06-56.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-07-34.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-07-56.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-08-11.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-08-15.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-08-19.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-08-27.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-08-37.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-08-45.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-09-36.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-10-42.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-10-44.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-11-02.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-12-38.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-12-45.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-12-54.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-13-02.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-14-00.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-14-15.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-14-24.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-15-16.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-15-50.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-16-12.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-16-32.png',
		'/uploads/lemon/Screenshot from 2016-06-27 22-17-04.png'
	];
</script>

<Container>
	<Col>
		<h1>
			LEMON.AL <a target="_blank" href="https://lemon.al">
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
