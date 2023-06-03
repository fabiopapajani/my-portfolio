<script lang="ts">
	import { Container, Row, Col } from 'sveltestrap/src';
</script>

<Container>
	<Row>
		<Col>
			<p class="quote text-center">
				<i class="fa fa-quote-left" aria-hidden="true" />
				<span>The best way to make your dreams come true is to wake up</span>
				<i class="fa fa-quote-right" aria-hidden="true" />
			</p>
		</Col>
	</Row>
	<Row>
		<Col sm={6} class="text-center description-wrapper">
			<span class="icon-frontend" />
			<h4><b>FRONT-END</b></h4>
			<p class="description">
				I develop front-end websites or web application interface with HTML5, CSS3 and Javascript. I
				apply the best practises in performance, and with good UI/UX in web application interfaces
				like CRM or CMS.
			</p>
		</Col>
		<Col sm={6} class="text-center description-wrapper">
			<span class="icon-backend" />
			<h4><b>BACK-END</b></h4>
			<p class="description">
				I develop back-end web applications with NODE JS, PHP, MYSQL, MONGO DB. Usually using
				frameworks for fast development, extensible ability, and good performance.
			</p>
		</Col>
	</Row>
</Container>
