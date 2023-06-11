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
			<blockquote class="blockquote">
				<p class="lead">
					Hello there! I'm Fabio, a seasoned software engineer with over a decade of experience in
					creating dynamic web applications that transform ideas into reality. I'm passionate about
					crafting high-quality code and delivering exceptional user experiences.
				</p>
			</blockquote>
		</Col>
	</Row>
	<Row>
		<Col sm={6} class="text-center description-wrapper">
			<span class="icon-frontend" />
			<h4><b>Frontend Wizardry</b></h4>
			<p>
				Harnessing the power of ReactJS, VueJS, and Svelte, I create captivating user interfaces
				that captivate users and drive engagement. With expertise in TypeScript, JavaScript, and
				popular UI libraries like AntD, React Bootstrap, and Bootstrap Vue, I deliver intuitive and
				visually stunning web experiences.
			</p>
		</Col>
		<Col sm={6} class="text-center description-wrapper">
			<span class="icon-backend" />
			<h4><b>Backend Mastery</b></h4>
			<p>
				Leveraging the prowess of Node.js, Express.js, and Hapi.js, I architect scalable and
				efficient backend systems that handle the demands of your startup's growth. Proficient in
				PHP, MySQL, PostgreSQL, MongoDB, and cutting-edge frameworks like Nest.js, Symfony, and
				CodeIgniter, I ensure seamless data management and optimal performance.
			</p>
		</Col>
	</Row>
	<Row>
		<Col>
			<h5><b>From Databases to Deployment</b></h5>
			<p>
				With hands-on experience in diverse database technologies like MySQL, PostgreSQL, MongoDB,
				Redis, and message queues like RabbitMQ and Mosquitto, I enable seamless data storage,
				retrieval, and communication. Furthermore, my expertise in Docker, AWS ensures smooth
				deployment and scalability, meeting your startup's ever-evolving needs.
			</p>
		</Col>
	</Row>
</Container>
