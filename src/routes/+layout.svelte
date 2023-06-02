<script lang="ts">
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap/src';
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import '../styles/index.scss';

	let isOpen = false;

	const handleUpdate = (event: any) => {
		isOpen = event.detail.isOpen;
	};
</script>

<div class={$page.data.className}>
	<header>
		<div class="head-section">
			<div class="container">
				<div id="head-section" class="row">
					<div class="col-sm-12">
						<div class="logo-wrapper text-center">
							<a href="/">
								<img id="logo" class="img-responsive centred" src={logo} alt="logo" />
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
					<NavItem>
						<NavLink href="/">WHAT I DO</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/works">MY WORK</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/skills">SKILLS</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/about">ABOUT</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/contact">CONTACT</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	</header>

	<main>
		<slot />
	</main>

	<footer class="main-footer text-center">
		<strong
			>© 2023 - <a class="my-email" href="mailto:fabiopapajani1991@gmail.com">Fabio Papajani</a
			></strong
		>
	</footer>
</div>
