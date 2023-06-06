<script lang="ts">
	import { Container, Row, Col, Form, FormGroup, Input } from 'sveltestrap/src';
</script>

<Container>
	<Row>
		<Col md={6} class="contact-data">
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
			<p class="map">
				<iframe
					title="Adress"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47935.68658818601!2d19.77662379592729!3d41.33103930626802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sTirana%2C%20Albania!5e0!3m2!1sen!2s!4v1686050748615!5m2!1sen!2s"
					loading="lazy"
					style="border:0"
					width="100%"
					height="300"
					frameborder="0"
					allowfullscreen
				/>
			</p>
		</Col>
		<Col id="contact-form" md={6}>
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
		</Col>
	</Row>
</Container>
