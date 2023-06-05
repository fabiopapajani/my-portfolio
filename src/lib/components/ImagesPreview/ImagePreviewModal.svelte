<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Modal, Image } from 'sveltestrap/src';
	import type { ImageItem } from './types';

	export let image: ImageItem;

	const dispatch = createEventDispatcher();

	$: isOpen = !!image || false;
	const toggle = () => {
		isOpen = !isOpen;
	};
	const onkeydown = (event: KeyboardEvent) => {
		if (isOpen) {
			if (event.key === 'ArrowRight') {
				dispatch('next');
			} else if (event.key === 'ArrowLeft') {
				dispatch('prev');
			}
		}
	};
</script>

<svelte:body on:keydown={onkeydown} />

<Modal class="image-preview-modal" {isOpen} {toggle} size="xl" centered on:closing>
	<div on:keydown={onkeydown}>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="swipe-action swipe-action--left"
			on:click={() => {
				dispatch('prev');
			}}
		>
			<i class="fa-solid fa-chevron-left" />
		</div>
		<Image thumbnail src={image.url} />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="swipe-action swipe-action--right"
			on:click={() => {
				dispatch('next');
			}}
		>
			<i class="fa-solid fa-chevron-right" />
		</div>
	</div>
</Modal>
