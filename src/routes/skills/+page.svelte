<script lang="ts">
	import { Container, Row, Col, Label } from 'sveltestrap/src';
	import { RatingStarsList } from '$lib/components/RatingStars';
</script>

<Container>
	<Row>
		<Col sm={6} class="text-center">
			<h3>FRONT-END</h3>
			<RatingStarsList
				ratingList={[
					{ label: 'REACT JS', stars: 5 },
					{ label: 'VUE JS', stars: 5 },
					{ label: 'SVELTE', stars: 3 },
					{ label: 'GRAPHQL', stars: 5 },
					{ label: 'REDUX', stars: 5 },
					{ label: 'TYPESCRIPT', stars: 5 },
					{ label: 'JAVASCRIPT', stars: 5 },
					{ label: 'HTML & CSS', stars: 5 },
					{ label: 'SASS, LESS', stars: 5 },
					{ label: 'JQUERY', stars: 5 },
					{ label: 'BABYLON JS', stars: 2 }
				]}
			/>
			<br />
			<!-- <h3>DESIGN</h3> -->
			<!-- <RatingStarsList
				ratingList={[
					{ label: 'HTML', stars: 5 },
					{ label: 'SASS, LESS', stars: 5 },
					{ label: 'JAVASCRIPT', stars: 5 },
					{ label: 'VUE JS', stars: 5 },
					{ label: 'REACT JS', stars: 5 },
					{ label: 'JQUERY', stars: 5 },
					{ label: 'GRAPHQL', stars: 5 }
				]}
			/> -->
		</Col>
		<Col sm={6} class="text-center">
			<h3>BACK-END</h3>
			<RatingStarsList
				ratingList={[
					{ label: 'NODE.JS', stars: 5 },
					{ label: 'NEST JS', stars: 3 },
					{ label: 'HAPI JS', stars: 5 },
					{ label: 'EXPRESS JS', stars: 5 },
					{ label: 'PHP', stars: 5 },
					{ label: 'MYSQL', stars: 5 },
					{ label: 'POSTGRESQL', stars: 5 },
					{ label: 'MONGO DB', stars: 5 },
					{ label: 'CODEIGNITER', stars: 5 },
					{ label: 'SYMFONY', stars: 5 },
					{ label: 'REDIS', stars: 5 },
					{ label: 'RABBIT MQ', stars: 5 },
					{ label: 'MOSQUITTO', stars: 5 }
				]}
			/>
			<br />
			<h3>OTHER</h3>
			<RatingStarsList
				ratingList={[
					{ label: 'PUPPETEER', stars: 5 },
					{ label: 'LINUX', stars: 5 },
					{ label: 'GIT', stars: 5 },
					{ label: 'DOCKER', stars: 4 },
					{ label: 'BASH', stars: 3 },
					{ label: 'NGINX', stars: 3 },
					{ label: 'APACHE', stars: 2 }
				]}
			/>
		</Col>
	</Row>
</Container>
