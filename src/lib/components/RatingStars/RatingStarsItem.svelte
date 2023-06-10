<script lang="ts">
	export let stars: number = 0;
	export let label: string = '';
	export let maxStars: number = 5;
	let starsList = Array(maxStars)
		.fill(false)
		.map((_, index) => stars > index);
</script>

<li class="skill-rate-row">
	<span class="title">{label} <i class="fa fa-arrow-right pull-right" /></span>
	<span class="starts">
		{#each starsList as value}
			{#if value}
				<i class="fa-solid fa-star on" />
			{:else}
				<i class="fa-regular fa-star" />
			{/if}
		{/each}
	</span>
</li>
