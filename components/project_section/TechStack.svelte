<script lang="ts">
  export let icon: string;
  export let title: string;
  // the img_to_right property will also help us to manage the margins
  // eg, img --> right, TechStack --> mr-4 (margin-right: 1rem)
</script>

<div class={`h-fit w-fit my-2 px-4 py-2 rounded-md bg-slate-200 flex justify-center items-center`}>
  <i class={`icon devicon-${icon} text-3xl pr-1.5`} />
  <label for="icon">{title}</label>
</div>
