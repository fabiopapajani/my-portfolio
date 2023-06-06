<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Modal, ModalBody, Image, Button } from 'sveltestrap/src';
	import type { ImageItem } from './types';
	import type { ModalProps } from 'sveltestrap/src/Modal';

	export let image: ImageItem;
	export let header: ModalProps['header'] = undefined;
	export let description: string = '';

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

<Modal class="image-preview-modal" {header} {isOpen} {toggle} size="xl" centered on:closing>
	<div class="image-preview-container">
		<Button
			color="link"
			class="swipe-action swipe-action--left"
			on:click={() => {
				dispatch('prev');
			}}><i class="fa-solid fa-chevron-left" /></Button
		>
		<Image fluid src={image.url} />
		<Button
			color="link"
			class="swipe-action swipe-action--right"
			on:click={() => {
				dispatch('next');
			}}><i class="fa-solid fa-chevron-right" /></Button
		>
	</div>
	<ModalBody>
		{#if description}
			<p class="description">
				{description}
			</p>
		{/if}
	</ModalBody>
</Modal>
