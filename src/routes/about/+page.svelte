<script lang="ts">
	import { Container, Row, Col, Image } from 'sveltestrap/src';
</script>

<Container>
	<Row>
		<Col md={4} id="about_me">
			<h1 class="text-center">About me</h1>
			<p class="description">
				I am a passionate and highly skilled Senior Software Engineer with over 10 years of
				experience in the full software development cycle. I love engineering, innovations,
				modularizing code, and good performance. I find great satisfaction in mentoring and guiding
				junior developers.
			</p>
		</Col>
		<Col md={4} class="text-center">
			<div class="image-wrapper rounded-circle">
				<Image src="/uploads/me.jpg" alt="Fabio Papajani (Me)" />
			</div>
		</Col>
		<Col md={4} id="details">
			<h1 class="text-center">Details</h1>
			<ul class="list-unstyled ul-details">
				<li>
					<b class="li-title">Name:</b> <span class="li-value">Fabio</span>
				</li>
				<li>
					<b class="li-title">Last name:</b> <span class="li-value">Papajani</span>
				</li>
				<li>
					<b class="li-title">Birthday:</b>
					<span class="li-value">02/05/1991 ( dd/mm/yyyy )</span>
				</li>
				<li>
					<b class="li-title">Location:</b> <span class="li-value">Albania</span>
				</li>
			</ul>
		</Col>
	</Row>

	<div class="experiences">
		<Row>
			<div class="col-sm-12">
				<h1>Experiences</h1>
			</div>
		</Row>
		<Row>
			<Col md={4}>
				<h4>Bitreel</h4>
				<p class="experience-period">Dec. 2022 - July 2023</p>
			</Col>
			<Col md={8}>
				<p>
					<b>Senior Software Engineer</b> <br />
					I'm working in team as a front-end engineer, developing innovative product with immersive 3D
					features.
					<br /><i class="fa fa-link" />
					<a target="_blank" href="https://bitreel.com">bitreel.com</a>
				</p>
			</Col>
		</Row>
		<Row>
			<Col md={4}>
				<h4>MotomTech</h4>
				<p class="experience-period">May 2021 - Nov. 2022</p>
			</Col>
			<Col md={8}>
				<p>
					<b>Senior Software Engineer</b> <br />
					I've worked in team as front-end developer most of the time, developing complex platforms for
					business needs.
					<br /><i class="fa fa-link" />
					<a target="_blank" href="https://motomtech.com">motomtech.com</a>
				</p>
			</Col>
		</Row>
		<Row>
			<Col md={4}>
				<h4>PaperClicks</h4>
				<p class="experience-period">Dec. 2016 - May 2021</p>
			</Col>
			<Col md={8}>
				<p>
					<b>Software Engineer</b> <br />
					I've worked in team as full stack web developer, developing scalable platform ( microservices
					based architecture )
					<br /><i class="fa fa-link" />
					<a target="_blank" href="https://paperclicks.net">paperclicks.net</a>
				</p>
			</Col>
		</Row>

		<Row>
			<Col md={4}>
				<h4>OnlineNow</h4>
				<p class="experience-period">Nov. 2013 - May 2016</p>
			</Col>
			<Col md={8}>
				<p>
					<b>Web Developer</b> <br />
					I've worked in team as web developer, with big and small projects, developing front-end and
					back-end applications like CRM, CMS.
					<br /><i class="fa fa-link" />
					<a target="_blank" href="https://onlinenow.eu">onlinenow.eu</a>
				</p>
			</Col>
		</Row>
		<Row>
			<Col md={4}>
				<h4>Freelance</h4>
				<p class="experience-period">Before Nov. 2013</p>
			</Col>
			<Col md={8}>
				<p>
					<b>Computer repair technical / Web developer</b> <br />
					I've worked as Computer repair technical, repairing, maintaining computers, configuring new
					hardwares, installing and updating softwares, creating and maintaning computer networks. Also
					I have worked as web developer, developing websites and web applications.
				</p>
			</Col>
		</Row>
	</div>

	<div class="educations mb-5">
		<Row>
			<Col>
				<h1>Educations</h1>
			</Col>
		</Row>
		<Row>
			<Col md={4}>
				<h4>"A.XHUVANI" University</h4>
				<p class="experience-period">Sept. 2011 - June 2013</p>
			</Col>
			<Col md={8}>
				<p>
					<b>Bachelor - Information Technology</b> <br />
					The education was mainly Java-based programming, but I also learned about SQL, PHP, JAVASCRIPT,
					MVC, HMVC, UML and more. During my time, I specialized in web application development and engineering.
					<br /><i class="fa fa-link" />
					<a target="_blank" href="https://uniel.edu.al">uniel.edu.al</a>
				</p>
			</Col>
		</Row>
		<Row>
			<Col md={4}>
				<h4>"FAN S.NOLI" University</h4>
				<p class="experience-period">Sept. 2010 - June 2011</p>
			</Col>
			<Col md={8}>
				<p>
					<b>Bachelor - Information Technology</b> <br />
					The education was about computer fundamental and sequential programming.
					<br /><i class="fa fa-link" />
					<a target="_blank" href="https://unkorce.edu.al">unkorce.edu.al</a>
				</p>
			</Col>
		</Row>
	</div>

	<div class="languages">
		<Row>
			<Col>
				<h1>Foreign Languages</h1>
			</Col>
		</Row>
		<Row>
			<Col md={4}>
				<h4>English</h4>
			</Col>
			<Col md={8}>
				<table class="table">
					<thead>
						<tr>
							<th>Reading/Writing</th>
							<th>Speaking</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="text-success">Proficient</td>
							<td class="text-success">Proficient</td>
						</tr>
					</tbody>
				</table>
			</Col>
		</Row>
		<Row>
			<Col md={4}>
				<h4>Italian</h4>
			</Col>
			<Col md={8}>
				<table class="table">
					<thead>
						<tr>
							<th>Reading/Writing</th>
							<th>Speaking</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="text-success">Proficient</td>
							<td class="text-success">Proficient</td>
						</tr>
					</tbody>
				</table>
			</Col>
		</Row>
	</div>
</Container>
