<script setup>
defineProps({
  skill: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="group flex min-h-24 flex-col items-center justify-center p-2 text-center transition-transform duration-300 hover:-translate-y-0.5">
    <div
      class="mb-2 grid size-12 place-items-center rounded-full border border-white/10 bg-[#0f1720]/85 shadow-md shadow-black/15 backdrop-blur-sm transition-all duration-300 group-hover:border-brand-magenta/35 sm:size-14"
    >
      <svg
        v-if="skill.icon"
        viewBox="0 0 24 24"
        :aria-label="`${skill.name} logo`"
        class="size-6 transition-transform duration-300 group-hover:scale-110 sm:size-7"
        :class="skill.colorClass"
        fill="currentColor"
      >
        <path :d="skill.icon.path" />
      </svg>
      <span v-else class="text-base font-bold transition-transform duration-300 group-hover:scale-110" :class="skill.colorClass">
        {{ skill.mark }}
      </span>
    </div>
    <h4 class="text-xs font-medium text-muted transition-colors duration-300 group-hover:text-foreground sm:text-sm">
      {{ skill.name }}
    </h4>
  </article>
</template>
