<script lang="ts">
	import { Row, Col, Image, Button } from 'sveltestrap/src';
	export let image: string = '';
	export let title: string = '';
	export let externalUrl: string = '';
	export let readMoreUrl: string = '';
</script>

<Row>
	<Col sm={6}>
		<Image thumbnail alt="Project Image" src={image} />
	</Col>
	<Col sm={6}>
		<h3>
			{title}
			{#if externalUrl}
				<a target="_blank" href={externalUrl}>
					<i class="fa fa-external-link" />
				</a>
			{/if}
		</h3>
		<p>
			<slot />
		</p>
		<Button class="btn-read-more" href={readMoreUrl}>Read more</Button>
	</Col>
</Row>
