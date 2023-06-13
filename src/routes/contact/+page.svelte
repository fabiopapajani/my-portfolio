<script lang="ts">
	import { Container, Row, Col, Form, FormGroup, Input } from 'sveltestrap/src';
</script>

<Container>
	<Row>
		<Col md={12} class="contact-data text-center">
			<p>
				<strong><i class="fa-brands fa-whatsapp" /> WhatsApp:</strong>
				<a href="tel:+35569324940">+35569324940</a>
			</p>
			<p>
				<strong><i class="fa-solid fa-at" /> Email:</strong>
				<a href="mailto:fabiopapajani1991@gmail.com">fabiopapajani1991@gmail.com</a>
			</p>
			<p>
				<strong><i class="fa-brands fa-github" /> Github:</strong>
				<a href="https://github.com/fabiopapajani" target="_blank"
					>https://github.com/fabiopapajani</a
				>
			</p>
			<p>
				<strong><i class="fa-brands fa-linkedin" /> Linkedin:</strong>
				<a href="https://www.linkedin.com/in/fabio-papajani/" target="_blank"
					>https://www.linkedin.com/in/fabio-papajani</a
				>
			</p>
		</Col>
		<!-- <Col id="contact-form" md={6}>
			<div class="form-wrapper">
				<Form>
					<FormGroup floating label="Name">
						<Input required name="name" placeholder="Name" />
					</FormGroup>
					<FormGroup floating label="Email">
						<Input required type="email" name="email" placeholder="Email" />
					</FormGroup>

					<FormGroup floating label="Description">
						<Input required type="textarea" name="description" placeholder="Description" />
					</FormGroup>

					<button class="btn btn-block btn-success" type="submit" name="submit" value="send"
						><i class="fa fa-paper-plane" aria-hidden="true" /> Send</button
					>
				</Form>
			</div>
		</Col> -->
	</Row>
</Container>
