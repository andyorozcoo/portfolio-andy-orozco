<script setup>
import { ref } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const imageUnavailable = ref(false)
</script>

<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-violet/20 bg-linear-to-br from-[#18181b]/62 to-space/65 shadow-xl shadow-brand-violet/4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/38 hover:shadow-brand-magenta/10"
  >
    <div class="relative h-48 overflow-hidden bg-[#11121b] sm:h-52">
      <img
        v-if="!imageUnavailable"
        :src="project.image"
        :alt="`Vista previa de ${project.title}`"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        @error="imageUnavailable = true"
      />

      <div
        v-else
        class="flex h-full w-full flex-col items-center justify-center bg-linear-to-br from-brand-violet/14 via-[#12131c] to-brand-magenta/10 text-center"
      >
        <div
          class="mb-3 grid size-12 place-items-center rounded-xl border border-brand-violet/30 bg-space/45 text-brand-magenta"
        >
          <svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="1.6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8 9-4 3 4 3m8-6 4 3-4 3m-2.5-9-3 12" />
          </svg>
        </div>
        <span class="text-xs uppercase tracking-[0.22em] text-muted">Preview próximamente</span>
      </div>

      <div class="absolute inset-0 bg-linear-to-t from-space via-space/22 to-transparent"></div>
      <span
        class="absolute bottom-4 left-4 rounded-full border border-brand-violet/25 bg-space/65 px-3 py-1 text-xs font-medium text-brand-magenta backdrop-blur-md"
      >
        Proyecto destacado
      </span>
    </div>

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <h3 class="text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-brand-magenta">
        {{ project.title }}
      </h3>
      <p class="mt-3 flex-1 text-sm leading-relaxed text-muted">{{ project.description }}</p>

      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="technology in project.technologies"
          :key="technology"
          class="rounded-lg border border-brand-violet/20 bg-space/48 px-3 py-1.5 text-xs text-muted transition-colors duration-300 hover:border-brand-magenta/40 hover:text-brand-magenta"
        >
          {{ technology }}
        </span>
      </div>

      <div class="mt-7 flex flex-wrap items-center gap-3 border-t border-white/7 pt-5">
        <a
          :href="project.repositoryUrl"
          class="group/link inline-flex items-center gap-2 rounded-lg border border-white/8 px-3.5 py-2 text-sm text-muted transition-all duration-300 hover:border-brand-magenta/35 hover:text-brand-magenta"
          aria-label="Abrir repositorio en GitHub"
        >
          <svg viewBox="0 0 24 24" class="size-4.5" fill="currentColor">
            <path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" />
          </svg>
          GitHub
        </a>
        <a
          :href="project.demoUrl"
          class="group/link inline-flex items-center gap-2 rounded-lg border border-white/8 px-3.5 py-2 text-sm text-muted transition-all duration-300 hover:border-brand-violet/40 hover:text-foreground"
          aria-label="Abrir demostración del proyecto"
        >
          <svg viewBox="0 0 24 24" class="size-4.5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 5h6v6M10 14 19 5M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" />
          </svg>
          Demo
        </a>
      </div>
    </div>
  </article>
</template>
