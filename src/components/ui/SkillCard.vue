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
    class="group flex min-h-40 flex-col items-center justify-center p-3 text-center transition-transform duration-300 hover:-translate-y-1"
  >
    <div
      class="mb-4 grid size-20 place-items-center rounded-full border border-brand-violet/18 bg-[#151c29]/85 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 group-hover:border-brand-magenta/40 group-hover:shadow-brand-magenta/15"
    >
      <svg
        v-if="skill.icon"
        viewBox="0 0 24 24"
        :aria-label="`${skill.name} logo`"
        class="size-10 transition-transform duration-300 group-hover:scale-110"
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
