<script>
  import '../app.css';
  import Project from '../../components/Project.svelte';
  import ProjectItem from '../../components/ProjectItem.svelte';
  import Footer from '../../components/Footer.svelte';
  import { MY_TECH_STACK } from '../data/project.data';
  import TechStack from '../../components/TechStack.svelte';
</script>

<div>
  <div class="mx-24 my-32 grid grid-rows-1 grid-cols-2 gap-8">
    <div>
      <h2 class="text-3xl font-bold pb-2">Too less or Too more?</h2>
      <p>
        Here's a list of my tech stack. These are technologies that I've worked with and have build
        some projects with. There are few more that I've tried but never built anything with. Those
        are not included. See my Github for my complete Tech Stack.
      </p>
    </div>
    <div class="flex flex-wrap justify-start h-fit">
      {#each MY_TECH_STACK as tech_stack}
        <TechStack icon={tech_stack.icon} title={tech_stack.title} img_to_right={false} />
      {/each}
    </div>
  </div>

  <Project />
  <Footer />
</div>

<style lang="postcss">
  :global(html) {
    /* background-color: theme(bg.slate.400); */
  }
</style>
