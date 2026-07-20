<script setup>
import ImageCarousel from './ImageCarousel.vue'

defineProps({
  experience: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="group rounded-2xl border border-white/10 bg-linear-to-br from-[#101827]/78 to-space/72 p-4 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-brand-violet/10 sm:p-6"
  >
    <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div class="flex min-w-0 items-start gap-4">
        <div
          class="grid size-10 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand-violet to-brand-magenta text-space shadow-lg shadow-brand-violet/15 transition-transform duration-300 group-hover:scale-105"
        >
          <svg
            v-if="experience.type === 'education'"
            viewBox="0 0 24 24"
            class="size-5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.5 9.2 12 4.5l8.5 4.7L12 14 3.5 9.2Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 11.3v4.3c2.8 2.2 7.2 2.2 10 0v-4.3M20.5 9.2v5.5" />
          </svg>
          <svg
            v-else-if="experience.type === 'development'"
            viewBox="0 0 24 24"
            class="size-5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m8 9-4 3 4 3m8-6 4 3-4 3m-2.5-9-3 12" />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            class="size-5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 6V4m8 2V4M5 10h14M6.5 5h11A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5v-11A1.5 1.5 0 0 1 6.5 5Z" />
            <path stroke-linecap="round" d="M9 14h6" />
          </svg>
        </div>

        <div class="min-w-0">
          <h3 class="text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-brand-magenta sm:text-xl">
            {{ experience.role }}
          </h3>
          <p class="mt-1 text-sm font-medium text-brand-magenta sm:text-base">{{ experience.organization }}</p>
          <p class="mt-1 text-sm text-muted">{{ experience.area }}</p>
        </div>
      </div>

      <span
        class="inline-flex shrink-0 self-start rounded-full border border-white/10 bg-white/4 px-3.5 py-2 text-xs font-medium text-brand-magenta"
      >
        {{ experience.period }}
      </span>
    </div>

    <p class="mt-4 text-sm leading-relaxed text-muted sm:text-base">{{ experience.description }}</p>

    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="technology in experience.technologies"
        :key="technology"
        class="rounded-lg border border-white/10 bg-space/55 px-2.5 py-1.5 text-xs text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/35 hover:text-brand-magenta sm:text-sm"
      >
        {{ technology }}
      </span>
    </div>

    <div v-if="experience.gallery?.length" class="mt-6 border-t border-white/7 pt-5">
      <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.24em] text-brand-magenta">Vida universitaria</p>
          <h4 class="mt-2 text-base font-medium text-foreground sm:text-lg">Momentos y actividades</h4>
        </div>
        <p class="text-xs text-muted">Galería de participación y trabajo en equipo</p>
      </div>

      <ImageCarousel :items="experience.gallery" />
    </div>
  </article>
</template>
