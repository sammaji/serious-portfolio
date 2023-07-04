<script lang="ts">
  import TechStack from './TechStack.svelte';

  export let project_title: string;
  export let project_description: string;
  export let project_source: string | undefined;
  export let project_demo: string | undefined;
  export let project_preview_high: string;
  export let project_tech_stack: {
    title: string;
    icon: string;
  }[];

  export let img_to_right: boolean;
</script>

<div class={`${img_to_right && 'flex-row-reverse'} flex gap-10`}>
  <img src={project_preview_high} alt={project_title} class="w-[50%] h-full" loading="lazy" />

  <div class={`w-[50%] flex flex-col justify-evenly `}>
    <h3 class="text-2xl font-bold w-fit">
      {project_title}
    </h3>
    <p>
      {project_description}
    </p>
    <div class={`w-full flex flex-wrap gap-4`}>
      {#if project_source}
        <a
          class={`px-4 py-2 rounded-md bg-orange-200 hover:bg-orange-400 flex justify-center items-center`}
          href={project_source}
          target="_blank"
          rel="noreferrer">View Source Code</a
        >
      {/if}

      {#if project_demo}
        <a
          class={`px-4 py-2 rounded-md bg-orange-200 hover:bg-orange-400 flex justify-center items-center`}
          href={project_demo}
          target="_blank"
          rel="noreferrer">Check Live Demo</a
        >
      {/if}
    </div>

    <div class={`flex flex-wrap h-fit gap-4`}>
      {#each project_tech_stack as tech_stack}
        <TechStack icon={tech_stack.icon} title={tech_stack.title} />
      {/each}
    </div>
  </div>
</div>
