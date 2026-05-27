<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '../components/sections/HeroSection.vue'
import MotionReveal from '../components/ui/MotionReveal.vue'
import { projects } from '../data/projects'

const quickProfile = [
  { label: 'Base', value: 'Costa Rica' },
  { label: 'Carrera', value: 'Ingeniería en Sistemas' },
  { label: 'Enfoque', value: 'Full Stack Development' },
]

const technologies = [
  { name: 'Laravel', mark: 'Lv', className: 'border-red-400/20 bg-red-400/6 text-red-300' },
  { name: 'Vue.js', mark: 'Vue', className: 'border-emerald-400/20 bg-emerald-400/6 text-emerald-300' },
  { name: 'React', mark: 'Re', className: 'border-sky-400/20 bg-sky-400/6 text-sky-300' },
  { name: 'MySQL', mark: 'My', className: 'border-brand-amber/20 bg-brand-amber/6 text-brand-amber' },
  { name: 'Docker', mark: 'Dk', className: 'border-blue-400/20 bg-blue-400/6 text-blue-300' },
  { name: 'Scrum', mark: 'Sc', className: 'border-brand-magenta/20 bg-brand-magenta/6 text-brand-magenta' },
]

const contributionItems = [
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
    description: 'Comunicación, organización y metodologías ágiles para aportar dentro de un equipo.',
  },
]

const featuredProject = projects.find((project) => project.id === 'beto-y-mas')
</script>

<template>
  <div>
    <HeroSection />

    <section class="relative pb-14 sm:pb-20">
      <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <MotionReveal class="rounded-3xl border border-brand-violet/20 bg-linear-to-br from-[#18181b]/58 to-space/55 p-5 backdrop-blur-xl sm:p-6">
          <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Perfil rápido</p>
              <h2 class="mt-3 text-2xl font-semibold text-foreground">Una vista clara de mi perfil</h2>
            </div>

            <dl class="grid flex-1 gap-3 sm:grid-cols-3 md:max-w-3xl">
              <div
                v-for="item in quickProfile"
                :key="item.label"
                class="rounded-2xl border border-white/8 bg-white/2.5 p-4"
              >
                <dt class="text-xs font-medium uppercase tracking-[0.2em] text-muted">{{ item.label }}</dt>
                <dd class="mt-2 text-sm font-medium text-foreground">{{ item.value }}</dd>
              </div>
            </dl>
          </div>
        </MotionReveal>
      </div>
    </section>

    <section class="relative pb-14 sm:pb-20">
      <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <MotionReveal as="header" class="mb-8 max-w-2xl">
          <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Tecnologías</p>
          <h2 class="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">Herramientas clave</h2>
        </MotionReveal>

        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <MotionReveal
            v-for="(technology, index) in technologies"
            :key="technology.name"
            as="article"
            class="group rounded-2xl border bg-white/2.5 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/8"
            :class="technology.className"
            :delay="index * 0.05"
          >
            <div class="mx-auto grid size-12 place-items-center rounded-xl border border-current/20 bg-space/40 text-sm font-semibold">
              {{ technology.mark }}
            </div>
            <h3 class="mt-4 text-sm font-medium text-foreground">{{ technology.name }}</h3>
          </MotionReveal>
        </div>
      </div>
    </section>

    <section class="relative pb-14 sm:pb-20">
      <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <MotionReveal as="header" class="mb-8 max-w-2xl">
          <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Qué aporto</p>
          <h2 class="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">Valor para equipos y proyectos</h2>
        </MotionReveal>

        <div class="grid gap-4 md:grid-cols-3">
          <MotionReveal
            v-for="(item, index) in contributionItems"
            :key="item.title"
            as="article"
            class="rounded-2xl border border-brand-violet/20 bg-linear-to-br from-[#18181b]/58 to-space/55 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/35"
            :delay="index * 0.08"
          >
            <span class="mb-4 block h-1 w-10 rounded-full bg-linear-to-r from-brand-violet to-brand-magenta"></span>
            <h3 class="text-lg font-medium text-foreground">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-muted">{{ item.description }}</p>
          </MotionReveal>
        </div>
      </div>
    </section>

    <section class="relative pb-16 sm:pb-24">
      <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <MotionReveal class="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Proyecto destacado</p>
            <h2 class="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">Preview rápida</h2>
          </div>
          <RouterLink to="/proyectos" class="text-sm font-medium text-brand-magenta transition-colors hover:text-foreground">
            Ver más
          </RouterLink>
        </MotionReveal>

        <MotionReveal
          v-if="featuredProject"
          as="article"
          class="rounded-3xl border border-white/8 bg-white/2.5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-brand-violet/35 sm:p-6"
        >
          <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p class="text-xs font-medium uppercase tracking-[0.2em] text-brand-magenta">{{ featuredProject.role }}</p>
              <h3 class="mt-3 text-2xl font-semibold text-foreground">{{ featuredProject.title }}</h3>
              <p class="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {{ featuredProject.description }}
              </p>
            </div>

            <div class="flex flex-col gap-5 lg:items-end">
              <div class="flex flex-wrap gap-2 lg:justify-end">
                <span
                  v-for="technology in featuredProject.technologies.slice(0, 4)"
                  :key="technology"
                  class="rounded-full border border-brand-violet/20 bg-brand-violet/7 px-3 py-1.5 text-xs text-muted"
                >
                  {{ technology }}
                </span>
              </div>

              <RouterLink
                to="/proyectos"
                class="inline-flex w-fit rounded-xl border border-brand-violet/35 bg-white/2 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-brand-magenta/40 hover:text-brand-magenta"
              >
                Ver más
              </RouterLink>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>

    <section class="px-6 pb-20 lg:px-8">
      <MotionReveal class="mx-auto flex max-w-5xl flex-col items-center rounded-3xl border border-brand-violet/20 bg-linear-to-r from-brand-violet/10 to-brand-magenta/8 px-6 py-10 text-center sm:px-10">
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
      </MotionReveal>
    </section>
  </div>
</template>
