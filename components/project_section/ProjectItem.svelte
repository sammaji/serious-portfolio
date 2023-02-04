<script lang="ts">
  import TechStack from './TechStack.svelte';

  export let project_id: number;
  export let project_title: string;
  export let project_description: string;
  export let project_source: string | undefined;
  export let project_demo: string | undefined;
  export let project_preview_low: string;
  export let project_preview_high: string;
  export let project_tech_stack: {
    title: string;
    icon: string;
  }[];

  export let img_to_right: boolean;

  // this will help us to align stack items to left if
  // image is towards the right and vice versa
  // eg, img --> right, TechStack --> justify-end
  const flex_align = img_to_right ? 'end' : 'start';

  // the img_to_right property will also help us to manage the margins
  // eg, img --> right, TechStack --> ml-4 (margin-left: 1rem)
  const flex_margin = img_to_right ? 'ml-4' : 'mr-4';
  const flex_padding = img_to_right ? 'pl-4' : 'pr-4';

  const displayHighResImage = (project_id: number): void => {
    const img_low: HTMLElement | null = document.getElementById(`img-low-${project_id}`);
    const img_high: HTMLElement | null = document.getElementById(`img-high-${project_id}`);
    if (img_low) img_low.style.display = 'none';
    if (img_high) img_high.style.display = 'block';
  };
</script>

<div class="grid grid-rows-1 grid-cols-2 px-20 gap-10">
  {#if !img_to_right}
    <img
      src={project_preview_high}
      alt={project_title}
      class="w-full h-full"
      loading="lazy"
    />
  {/if}

  <div class={`flex flex-col justify-evenly items-${flex_align}`}>
    <h3 class="text-2xl font-bold w-fit">
      {project_title}
    </h3>
    <p class={`text-${flex_align}`}>
      {project_description}
    </p>

    <div class={`w-full flex flex-wrap justify-${flex_align} ${flex_padding}`}>
      {#if project_source}
        <button
          class={`${flex_margin} px-4 py-2 rounded-md bg-orange-200 hover:bg-orange-400 flex justify-center items-center`}
          ><a href={project_source}>View Source Code</a></button
        >
      {/if}

      {#if project_demo}
        <button
          class={`${flex_margin} px-4 py-2 rounded-md bg-orange-200 hover:bg-orange-400 flex justify-center items-center`}
          ><a href={project_demo}>Check Live Demo</a></button
        >
      {/if}
    </div>

    <div class={`flex flex-wrap justify-${flex_align} h-fit`}>
      {#each project_tech_stack as tech_stack}
        <TechStack icon={tech_stack.icon} title={tech_stack.title} {img_to_right} />
      {/each}
    </div>
  </div>

  {#if img_to_right}
    <img
      src={project_preview_high}
      alt="not available"
      class="w-full h-full"
      loading="lazy"
    />
  {/if}
</div>
