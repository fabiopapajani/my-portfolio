<script lang="ts">
	import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'sveltestrap/src';
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import '../styles/index.scss';

	let isOpen = false;

	const handleUpdate = (event: any) => {
		isOpen = event.detail.isOpen;
	};
	$: pageName = $page.data.pageName;
</script>

<div class={pageName}>
	<header>
		<div class="head-section">
			<div class="container">
				<div id="head-section" class="row">
					<div class="col-sm-12">
						<div class="logo-wrapper text-center">
							<a href="/">
								<img class="img-responsive centred" src={logo} alt="logo" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Navbar color="light" class="navbar-main" light expand="md">
			<NavbarToggler color="light" on:click={() => (isOpen = !isOpen)} />
			<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
				<Nav class="ms-auto" navbar>
					<NavItem active={pageName === 'page-home'}>
						<NavLink href="/">WHAT I DO</NavLink>
					</NavItem>
					<NavItem active={pageName === 'page-works'}>
						<NavLink href="/works">MY WORK</NavLink>
					</NavItem>
					<NavItem active={pageName === 'page-skills'}>
						<NavLink href="/skills">SKILLS</NavLink>
					</NavItem>
					<NavItem active={pageName === 'page-about'}>
						<NavLink href="/about">ABOUT</NavLink>
					</NavItem>
					<NavItem active={pageName === 'page-contact'}>
						<NavLink href="/contact">CONTACT</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	</header>

	<main class="py-3 py-sm-4">
		<slot />
	</main>

	<footer class="main-footer text-center">
		<strong
			>© 2023 - <a class="my-email" href="mailto:fabiopapajani1991@gmail.com">Fabio Papajani</a
			></strong
		>
	</footer>
</div>
