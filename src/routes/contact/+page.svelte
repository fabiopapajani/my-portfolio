<script lang="ts">
	import { Container, Row, Col, Form, FormGroup, Input } from 'sveltestrap/src';
</script>

<Container>
	<Row>
		<Col md={6} id="contact-data">
			<p>
				<strong><i class="fa fa-mobile" aria-hidden="true" /> Mobile:</strong>
				<a href="tel:+35569324940">+35569324940</a>
			</p>
			<p>
				<strong><i class="fa fa-envelope" aria-hidden="true" /> Email:</strong>
				<a href="mailto:fabiopapajani1991@gmail.com">fabiopapajani1991@gmail.com</a>
			</p>
			<p class="map">
				<iframe
					title="Adress"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48098.51447706796!2d20.053767563325522!3d41.10925874312694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135043008278d315%3A0x4243327c8f696e0a!2sElbasan%2C+Albania!5e0!3m2!1sen!2s!4v1476915124459"
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
						<Input name="name" placeholder="Name" />
					</FormGroup>
					<FormGroup floating label="Email">
						<Input type="email" name="email" placeholder="Email" />
					</FormGroup>

					<FormGroup floating label="Description">
						<Input type="textarea" name="description" placeholder="Description" />
					</FormGroup>

					<!-- ********************** Form item ************************ -->

					<!-- <div class="form-group">
						<textarea
							name="description"
							cols="40"
							rows="5"
							id="description"
							placeholder="Description"
							class="form-control"
						/>
					</div> -->
					<!-- ******************** End Form item ********************** -->

					<button class="btn btn-block btn-success" type="submit" name="submit" value="send"
						><i class="fa fa-paper-plane" aria-hidden="true" /> Send</button
					>
				</Form>
			</div>
		</Col>
	</Row>
</Container>
