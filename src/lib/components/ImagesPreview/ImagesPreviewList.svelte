<script lang="ts">
	import { Image } from 'sveltestrap/src';
	import ImagePreviewModal from './ImagePreviewModal.svelte';
	import type { ImageItem } from './types';
	export let images: ImageItem[];
	let selectedIndex: number = -1;
	const selectIndex = (index: number) => {
		selectedIndex = index < -1 ? -1 : index;
	};
	const onNextImage = () => {
		const nextIndex = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
		selectIndex(nextIndex);
	};
	const onPrevImage = () => {
		const prevIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
		selectIndex(prevIndex);
	};
</script>

<div class="images-preview-list">
	{#each images as image, index}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="image-wrapper"
			on:click={() => {
				selectIndex(index);
			}}
		>
			<Image thumbnail src={image.url} />
		</div>
	{/each}
	{#if images[selectedIndex]}
		<ImagePreviewModal
			image={images[selectedIndex]}
			on:closing={() => {
				selectIndex(-1);
			}}
			on:next={onNextImage}
			on:prev={onPrevImage}
		/>
	{/if}
</div>
