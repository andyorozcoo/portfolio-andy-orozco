<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import HeroSection from '../components/sections/HeroSection.vue'
import MotionReveal from '../components/ui/MotionReveal.vue'

const contributionItems = [
  {
    title: 'Full Stack',
    description: 'Frontend, APIs y datos conectados.',
  },
  {
    title: 'Proyectos reales',
    description: 'Soluciones aplicadas a necesidades concretas.',
  },
  {
    title: 'Trabajo colaborativo',
    description: 'Comunicación clara dentro del equipo.',
  },
]

const projectStack = [
  'Laravel',
  'Vue 3',
  'Inertia.js',
  'MySQL',
  'TailwindCSS',
  'Docker',
  'Railway',
  'Scrum',
]

const projectImageUnavailable = ref(false)
const projectImageSrc = ref(`${import.meta.env.BASE_URL}images/projects/beto-showcase.jpg`)
const projectFallbackImageSrc = `${import.meta.env.BASE_URL}images/projects/beto-preview.jpg`
const projectUrl = 'https://betoymas.com/'

const handleProjectImageError = () => {
  if (projectImageSrc.value !== projectFallbackImageSrc) {
    projectImageSrc.value = projectFallbackImageSrc
    return
  }

  projectImageUnavailable.value = true
}
</script>

<template>
  <div>
    <HeroSection />

    <section class="relative pb-10 sm:pb-20">
      <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <MotionReveal as="header" class="mb-5 max-w-2xl sm:mb-8">
          <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Qué aporto</p>
          <h2 class="mt-2 text-2xl font-semibold text-foreground sm:mt-3 sm:text-3xl">
            Valor para equipos y proyectos
          </h2>
        </MotionReveal>

        <div class="grid gap-3 md:grid-cols-3">
          <MotionReveal
            v-for="(item, index) in contributionItems"
            :key="item.title"
            as="article"
            class="rounded-2xl border border-brand-violet/20 bg-linear-to-br from-[#18181b]/58 to-space/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/35 sm:p-5 sm:backdrop-blur-xl"
            :delay="index * 0.08"
          >
            <span class="mb-3 block h-1 w-8 rounded-full bg-linear-to-r from-brand-violet to-brand-magenta sm:mb-4 sm:w-10"></span>
            <h3 class="text-base font-medium text-foreground sm:text-lg">{{ item.title }}</h3>
            <p class="mt-2 line-clamp-1 text-sm leading-relaxed text-muted sm:mt-3 sm:line-clamp-none">
              {{ item.description }}
            </p>
          </MotionReveal>
        </div>
      </div>
    </section>

    <section id="proyecto-destacado" class="relative scroll-mt-24 overflow-hidden pb-12 sm:pb-24">
      <div class="absolute -left-24 top-16 -z-10 size-80 rounded-full bg-brand-violet/10 blur-[120px]"></div>
      <div class="absolute -right-24 bottom-20 -z-10 size-80 rounded-full bg-brand-magenta/8 blur-[120px]"></div>

      <div class="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <MotionReveal as="header" class="mb-6 max-w-3xl sm:mb-8">
          <p class="text-sm font-semibold uppercase tracking-[0.34em] text-brand-magenta">Proyecto principal</p>
          <h2 class="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Beto y Más
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Plataforma de fidelización y gamificación para clientes.
          </p>
        </MotionReveal>

        <MotionReveal
          as="article"
          class="group overflow-hidden rounded-[1.75rem] border border-brand-violet/20 bg-linear-to-br from-[#111827]/86 via-space/78 to-[#09090f]/95 shadow-2xl shadow-black/35 transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/35 hover:shadow-brand-magenta/10 sm:rounded-[2rem] sm:backdrop-blur-xl"
        >
          <div class="relative aspect-[4/3] overflow-hidden bg-space/70 sm:aspect-[16/8] lg:aspect-[16/7]">
            <img
              v-if="!projectImageUnavailable"
              :src="projectImageSrc"
              alt="Vista previa del proyecto Beto y Más"
              class="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
              @error="handleProjectImageError"
            />

            <div
              v-else
              class="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.22),transparent_34%),radial-gradient(circle_at_72%_78%,rgba(236,72,153,0.18),transparent_34%)] p-6 text-center"
            >
              <div>
                <p class="text-2xl font-semibold text-foreground">Beto y Más</p>
                <p class="mt-2 text-sm text-muted">Plataforma de fidelización y gamificación</p>
              </div>
            </div>

            <div class="absolute inset-0 bg-linear-to-t from-space/70 via-space/5 to-transparent"></div>
          </div>

          <div class="p-5 sm:p-7">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 class="text-2xl font-semibold text-foreground sm:text-3xl">Beto y Más</h3>
                <p class="mt-2 text-sm font-medium text-brand-magenta sm:text-base">
                  Plataforma de fidelización y gamificación
                </p>
              </div>

              <span class="w-fit rounded-full border border-brand-violet/25 bg-brand-violet/10 px-3 py-1.5 text-xs font-medium text-muted">
                Rol: Full Stack Developer
              </span>
            </div>

            <p class="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              Sistema web desarrollado para centralizar la gestión de clientes, puntos, recompensas, promociones y
              dinámicas de fidelización mediante una plataforma moderna orientada a experiencia de usuario y
              escalabilidad.
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="item in projectStack"
                :key="item"
                class="rounded-full border border-brand-violet/20 bg-space/55 px-3 py-1.5 text-xs font-medium text-muted"
              >
                {{ item }}
              </span>
            </div>

            <div class="mt-6 flex flex-col gap-4 border-t border-white/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-xs leading-relaxed text-muted sm:max-w-md">
                Proyecto colaborativo desarrollado como parte de Ingeniería de Sistemas.
              </p>

              <a
                :href="projectUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-violet to-brand-magenta px-5 py-3 text-sm font-semibold text-foreground shadow-lg shadow-brand-magenta/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-magenta/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-magenta"
              >
                Ver proyecto
                <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>

    <section class="px-6 pb-14 sm:pb-20 lg:px-8">
      <MotionReveal class="mx-auto flex max-w-5xl flex-col items-center rounded-3xl border border-brand-violet/20 bg-linear-to-r from-brand-violet/10 to-brand-magenta/8 px-5 py-8 text-center sm:px-10 sm:py-10">
        <h2 class="text-2xl font-semibold text-foreground sm:text-3xl">¿Construimos algo juntos?</h2>
        <p class="mt-3 max-w-xl text-sm text-muted sm:mt-4 sm:text-base">
          Explora mi trabajo o conversemos sobre oportunidades y proyectos.
        </p>
        <div class="mt-6 grid w-full gap-3 sm:mt-8 sm:w-auto sm:grid-cols-2">
          <RouterLink
            :to="{ path: '/', hash: '#proyecto-destacado' }"
            class="rounded-xl bg-linear-to-r from-brand-violet to-brand-magenta px-6 py-3 text-sm font-medium text-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Explorar proyecto
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
