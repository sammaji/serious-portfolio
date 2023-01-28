<script>
	import Project from '../../components/Project.svelte';
	import ProjectItem from '../../components/ProjectItem.svelte';
	import PROJECTS_DATA from '../data/project.data';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
	<Project>
		{#each PROJECTS_DATA as project_item}
			<ProjectItem
				project_title={project_item.title}
				project_description={project_item.description}
                project_source = {project_item.source}
                project_demo = {project_item.demo}
				project_preview_low = {project_item.preview_low}
				project_preview_high = {project_item.preview_high}
			/>
		{/each}
	</Project>
</div>
