<script lang="ts">
	import { Container, Col } from 'sveltestrap/src';
	const images: string[] = [
		'/uploads/likepost/Screenshot from 2016-08-03 01-11-49.png',
		'/uploads/likepost/Screenshot from 2016-08-03 01-12-08.png',
		'/uploads/likepost/Screenshot from 2016-08-03 01-12-48.png',
		'/uploads/likepost/Screenshot from 2016-08-03 01-13-07.png',
		'/uploads/likepost/Screenshot from 2016-08-03 01-13-46.png'
	];
</script>

<Container>
	<Col>
		<h1>
			LIKE-POST.COM <a target="_blank" href="https://like-post.com">
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
