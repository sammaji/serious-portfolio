<script lang="ts">
	export let project_title: string;
	export let project_description: string;
	export let project_source: string | undefined;
	export let project_demo: string | undefined;
    export let project_preview_low: string;
    export let project_preview_high: string;
</script>

<img src={project_preview_high} alt="hello">

<h3>{project_title}</h3>
<p>{project_description}</p>
          
{#if project_source}
	<a href={project_source}>Check Source Code</a>
{/if}
{#if project_demo}
	<a href={project_demo}>Check Live Demo</a>
{/if}
