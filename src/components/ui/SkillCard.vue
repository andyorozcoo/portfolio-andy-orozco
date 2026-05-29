<script setup>
defineProps({
  skill: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="group flex min-h-32 flex-col items-center justify-center p-2 text-center transition-transform duration-300 hover:-translate-y-1 sm:min-h-40 sm:p-3"
  >
    <div
      class="mb-3 grid size-16 place-items-center rounded-full border border-brand-violet/18 bg-[#151c29]/85 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 group-hover:border-brand-magenta/40 group-hover:shadow-brand-magenta/15 sm:mb-4 sm:size-20"
    >
      <svg
        v-if="skill.icon"
        viewBox="0 0 24 24"
        :aria-label="`${skill.name} logo`"
        class="size-8 transition-transform duration-300 group-hover:scale-110 sm:size-10"
        :class="skill.colorClass"
        fill="currentColor"
      >
        <path :d="skill.icon.path" />
      </svg>
      <span v-else class="text-base font-bold transition-transform duration-300 group-hover:scale-110" :class="skill.colorClass">
        {{ skill.mark }}
      </span>
    </div>
    <h4 class="text-sm font-medium text-muted transition-colors duration-300 group-hover:text-foreground">
      {{ skill.name }}
    </h4>
  </article>
</template>
