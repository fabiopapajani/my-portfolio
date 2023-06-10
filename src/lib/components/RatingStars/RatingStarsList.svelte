<script lang="ts">
	import RatingStarsItem from './RatingStarsItem.svelte';
	import type { RatingItemType } from './types';
	export let ratingList: RatingItemType[] = [];
</script>

<ul class="list-unstyled">
	{#each ratingList as ratingItem}
		<RatingStarsItem {...ratingItem} />
	{/each}
</ul>
