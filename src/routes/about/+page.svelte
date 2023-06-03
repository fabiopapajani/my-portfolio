<script lang="ts">
	import { Container, Row, Col, Image } from 'sveltestrap/src';
</script>

<Container>
	<Row>
		<Col md={4} id="about_me">
			<h1 class="text-center">About me</h1>
			<p class="description">
				I am a web developer with good knowledge of Front-End and Back-End techniques. I love web
				application engineering, modularizing code, and good performance. I love spending time on
				fixing little details and optimizing web applications. Also I like working in a team. As the
				saying goes: 'two heads are better than one'.
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
					<b class="li-title">Location:</b> <span class="li-value">Elbasan, Albania</span>
				</li>
			</ul>
		</Col>
	</Row>

	<div class="educations">
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
					<a target="_blank" href="http://www.uniel.edu.al/index.php/en"
						>http://www.uniel.edu.al/index.php/en</a
					>
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
					<a target="_blank" href="http://www.unkorce.edu.al/en">http://www.unkorce.edu.al/en</a>
				</p>
			</Col>
		</Row>
	</div>

	<div class="experiences">
		<Row>
			<div class="col-sm-12">
				<h1>Experiences</h1>
			</div>
		</Row>
		<Row>
			<Col md={4}>
				<h4>PaperClicks</h4>
				<p class="experience-period">Dec. 2016 - Now</p>
			</Col>
			<Col md={8}>
				<p>
					<b>Fulltime - Web developer</b> <br />
					I'm workig in team as full stack web developer, developing scalable platform ( microservices
					based architecture )
					<br /><i class="fa fa-link" />
					<a target="_blank" href="http://paperclicks.net/">http://paperclicks.net/</a>
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
					<b>Fulltime - Web developer</b> <br />
					I have worked in team as web developer, with big and small projects, developing front-end and
					back-end applications like CRM, CMS.
					<br /><i class="fa fa-link" />
					<a target="_blank" href="http://www.onlinenow.eu/en/">http://www.onlinenow.eu/en/</a>
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
					<b>Part time - Computer repair technical / Web developer</b> <br />
					I have worked as Computer repair technical, repairing, maintaining computers, configuring new
					hardwares, installing and updating softwares, creating and maintaning computer networks. Also
					I have worked as web developer, developing websites and web applications.
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
							<td class="text-warning">Intermediate</td>
							<td class="text-warning">Intermediate</td>
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
							<td class="text-success">Advanced</td>
							<td class="text-success">Advanced</td>
						</tr>
					</tbody>
				</table>
			</Col>
		</Row>
	</div>
</Container>
