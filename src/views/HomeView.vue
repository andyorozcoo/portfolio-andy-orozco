<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '../components/sections/HeroSection.vue'
import { projects } from '../data/projects'

const summaryItems = [
  {
    title: 'Desarrollo Full Stack',
    description: 'Interfaces, APIs y bases de datos pensadas como una solución completa.',
  },
  {
    title: 'Proyectos reales',
    description: 'Experiencias académicas y colaborativas aplicadas a necesidades concretas.',
  },
  {
    title: 'Trabajo colaborativo',
    description: 'Comunicación, organización y Scrum para aportar dentro de un equipo.',
  },
]

const featuredProjects = projects.slice(0, 3)
</script>

<template>
  <div>
    <HeroSection />

    <section class="relative pb-16 sm:pb-24">
      <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div class="grid gap-4 md:grid-cols-3">
          <article
            v-for="item in summaryItems"
            :key="item.title"
            class="rounded-2xl border border-brand-violet/20 bg-linear-to-br from-[#18181b]/58 to-space/55 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/35"
          >
            <span class="mb-5 block h-1 w-12 rounded-full bg-linear-to-r from-brand-violet to-brand-magenta"></span>
            <h2 class="text-lg font-medium text-foreground">{{ item.title }}</h2>
            <p class="mt-3 text-sm leading-relaxed text-muted">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="relative pb-16 sm:pb-24">
      <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div class="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Selección</p>
            <h2 class="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">Proyectos destacados</h2>
          </div>
          <RouterLink to="/proyectos" class="text-sm font-medium text-brand-magenta transition-colors hover:text-foreground">
            Ver todos los proyectos
          </RouterLink>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <article
            v-for="project in featuredProjects"
            :key="project.id"
            class="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-all duration-300 hover:border-brand-violet/35"
          >
            <p class="text-xs font-medium uppercase tracking-[0.2em] text-brand-magenta">{{ project.role }}</p>
            <h3 class="mt-3 text-lg font-medium text-foreground">{{ project.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-muted">{{ project.description }}</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="technology in project.technologies.slice(0, 3)"
                :key="technology"
                class="rounded-full border border-brand-violet/20 bg-brand-violet/7 px-2.5 py-1 text-xs text-muted"
              >
                {{ technology }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="px-6 pb-20 lg:px-8">
      <div class="mx-auto flex max-w-5xl flex-col items-center rounded-3xl border border-brand-violet/20 bg-linear-to-r from-brand-violet/10 to-brand-magenta/8 px-6 py-10 text-center sm:px-10">
        <h2 class="text-2xl font-semibold text-foreground sm:text-3xl">¿Construimos algo juntos?</h2>
        <p class="mt-4 max-w-xl text-muted">Explora mi trabajo o conversemos sobre oportunidades y proyectos.</p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <RouterLink
            to="/proyectos"
            class="rounded-xl bg-linear-to-r from-brand-violet to-brand-magenta px-6 py-3 text-sm font-medium text-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Explorar proyectos
          </RouterLink>
          <RouterLink
            to="/contacto"
            class="rounded-xl border border-brand-violet/35 bg-white/2 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-brand-magenta/40 hover:text-brand-magenta"
          >
            Contactarme
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
