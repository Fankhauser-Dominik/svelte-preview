<script>
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#await data.props.data}
	<p>loading...</p>
{:then data}
	{#each data as item}
		<p>{item.name.first} {item.name.middle} {item.name.last}</p>
	{/each}
{/await}
