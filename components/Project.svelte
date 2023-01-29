<script>
  import '../src/app.css';
  import {PROJECTS_DATA} from '../src/data/project.data';
  import ProjectItem from './ProjectItem.svelte';
</script>

<article class="w-full grid gap-24">
  <h2 class="m-auto text-5xl font-bold">Have a Look</h2>

  <!-- contains the list of projects -->
  {#each PROJECTS_DATA as project_item}
    <ProjectItem
      project_id={PROJECTS_DATA.indexOf(project_item)}
      project_title={project_item.title}
      project_description={project_item.description}
      project_source={project_item.source}
      project_demo={project_item.demo}
      project_preview_low={project_item.preview_low}
      project_preview_high={project_item.preview_high}
      project_tech_stack={project_item.tech_stack}
      img_to_right={PROJECTS_DATA.indexOf(project_item) % 2 !== 0}
    />
  {/each}
</article>
