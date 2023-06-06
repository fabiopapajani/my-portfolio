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
		<a
			class="image-wrapper"
			on:click={() => {
				selectIndex(index);
			}}
			href={null}
		>
			<Image thumbnail src={image.url} />
		</a>
	{/each}
	{#if images[selectedIndex]}
		<ImagePreviewModal
			image={images[selectedIndex]}
			header={`Image ${selectedIndex + 1} of ${images.length}`}
			on:closing={() => {
				selectIndex(-1);
			}}
			on:next={onNextImage}
			on:prev={onPrevImage}
			description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		/>
	{/if}
</div>
