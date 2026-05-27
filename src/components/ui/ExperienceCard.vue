<script setup>
import { ref } from 'vue'

defineProps({
  experience: {
    type: Object,
    required: true,
  },
})

const unavailableImages = ref(new Set())

const markImageUnavailable = (src) => {
  const images = new Set(unavailableImages.value)
  images.add(src)
  unavailableImages.value = images
}

const imageIsUnavailable = (src) => unavailableImages.value.has(src)
</script>

<template>
  <article
    class="group rounded-2xl border border-brand-violet/20 bg-linear-to-br from-[#18181b]/65 to-space/65 p-6 shadow-xl shadow-brand-violet/4 backdrop-blur-xl transition-all duration-300 hover:border-brand-magenta/35 hover:shadow-brand-magenta/7 sm:p-8"
  >
    <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
      <div class="flex items-start gap-4">
        <div
          class="grid size-12 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand-violet to-brand-magenta text-foreground shadow-lg shadow-brand-magenta/15 transition-transform duration-300 group-hover:scale-105"
        >
          <svg
            v-if="experience.type === 'education'"
            viewBox="0 0 24 24"
            class="size-6"
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
            class="size-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m8 9-4 3 4 3m8-6 4 3-4 3m-2.5-9-3 12" />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            class="size-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 6V4m8 2V4M5 10h14M6.5 5h11A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5v-11A1.5 1.5 0 0 1 6.5 5Z" />
            <path stroke-linecap="round" d="M9 14h6" />
          </svg>
        </div>

        <div>
          <h3 class="text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-brand-magenta sm:text-2xl">
            {{ experience.role }}
          </h3>
          <p class="mt-1 text-sm font-medium text-brand-magenta sm:text-base">{{ experience.organization }}</p>
          <p class="mt-1 text-sm text-muted">{{ experience.area }}</p>
        </div>
      </div>

      <span
        class="inline-flex shrink-0 self-start rounded-full border border-brand-violet/30 bg-brand-violet/12 px-3.5 py-2 text-xs font-medium text-brand-magenta"
      >
        {{ experience.period }}
      </span>
    </div>

    <p class="mt-6 text-base leading-relaxed text-muted">{{ experience.description }}</p>

    <div class="mt-6 flex flex-wrap gap-2.5">
      <span
        v-for="technology in experience.technologies"
        :key="technology"
        class="rounded-lg border border-brand-violet/20 bg-space/55 px-3 py-1.5 text-sm text-muted transition-all duration-300 hover:border-brand-magenta/40 hover:text-brand-magenta"
      >
        {{ technology }}
      </span>
    </div>

    <div v-if="experience.gallery?.length" class="mt-8 border-t border-white/7 pt-7">
      <div class="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.24em] text-brand-magenta">Vida universitaria</p>
          <h4 class="mt-2 text-lg font-medium text-foreground">Momentos y actividades</h4>
        </div>
        <p class="text-xs text-muted">Galería de participación y trabajo en equipo</p>
      </div>

      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <figure
          v-for="item in experience.gallery"
          :key="item.src"
          class="group/photo relative h-40 overflow-hidden rounded-xl border border-brand-violet/15 bg-[#12121b] transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/40"
        >
          <img
            v-if="!imageIsUnavailable(item.src)"
            :src="item.src"
            :alt="item.alt"
            class="h-full w-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
            loading="lazy"
            @error="markImageUnavailable(item.src)"
          />

          <div
            v-else
            class="flex h-full w-full items-center justify-center bg-linear-to-br from-brand-violet/15 via-[#18181b] to-brand-magenta/10"
          >
            <svg viewBox="0 0 24 24" class="size-9 text-brand-magenta/60" fill="none" stroke="currentColor" stroke-width="1.4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 17 9 12l3.5 3.5 2.5-3 5 4.5M6.5 5h11A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5v-11A1.5 1.5 0 0 1 6.5 5Z" />
              <path stroke-linecap="round" d="M9 9h.01" />
            </svg>
          </div>

          <div class="absolute inset-0 bg-linear-to-t from-space via-space/40 to-transparent"></div>
          <figcaption class="absolute inset-x-0 bottom-0 p-3 text-xs font-medium text-foreground">
            {{ item.title }}
          </figcaption>
        </figure>
      </div>
    </div>
  </article>
</template>
