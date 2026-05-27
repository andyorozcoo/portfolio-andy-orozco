<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '../ui/ProjectCard.vue'
import { projects } from '../../data/projects'

const selectedTechnology = ref('Todos')
const technologyFilters = ['Todos', ...new Set(projects.flatMap((project) => project.technologies))]

const filteredProjects = computed(() => {
  if (selectedTechnology.value === 'Todos') {
    return projects
  }

  return projects.filter((project) => project.technologies.includes(selectedTechnology.value))
})
</script>

<template>
  <section id="proyectos" class="relative scroll-mt-20 overflow-hidden py-16 sm:py-24">
    <div class="absolute -right-20 top-16 -z-10 size-96 rounded-full bg-brand-violet/7 blur-[140px]"></div>
    <div class="absolute -left-24 bottom-12 -z-10 size-72 rounded-full bg-brand-magenta/5 blur-[120px]"></div>

    <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <header class="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <p class="mb-4 text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Proyectos</p>
        <h2 class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Proyectos
          <span class="bg-linear-to-r from-brand-violet to-brand-magenta bg-clip-text text-transparent">
            destacados
          </span>
        </h2>
        <p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Algunos proyectos donde he aplicado desarrollo full stack, arquitectura limpia, APIs REST, bases de datos,
          desarrollo móvil y buenas prácticas de ingeniería.
        </p>
        <span class="mx-auto mt-7 block h-1 w-20 rounded-full bg-linear-to-r from-brand-violet to-brand-magenta"></span>
      </header>

      <div class="-mx-6 mb-9 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div class="mx-auto flex min-w-max justify-start gap-3 md:w-fit">
          <button
            v-for="technology in technologyFilters"
            :key="technology"
            type="button"
            class="rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300"
            :class="
              selectedTechnology === technology
                ? 'border-transparent bg-linear-to-r from-brand-violet to-brand-magenta text-foreground shadow-lg shadow-brand-magenta/18'
                : 'border-white/10 bg-white/2 text-muted hover:border-brand-violet/35 hover:text-foreground'
            "
            @click="selectedTechnology = technology"
          >
            {{ technology }}
          </button>
        </div>
      </div>

      <div class="grid gap-5 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>
