<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import HeroSection from '../components/sections/HeroSection.vue'
import MotionReveal from '../components/ui/MotionReveal.vue'
import { projects } from '../data/projects'

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
const showProjectDetails = ref(false)
const projectImageUnavailable = ref(false)
const projectPreviewSrc = `${import.meta.env.BASE_URL}images/projects/beto-preview.jpg`
const projectResult =
  'Una plataforma pensada para conectar administración, clientes y dinámicas de fidelización en un flujo digital más claro.'
</script>

<template>
  <div>
    <HeroSection />

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

    <section id="proyecto-destacado" class="relative scroll-mt-24 overflow-hidden pb-16 sm:pb-24">
      <div class="absolute -left-24 top-1/3 -z-10 size-80 rounded-full bg-brand-violet/10 blur-[130px]"></div>
      <div class="absolute -right-24 bottom-10 -z-10 size-96 rounded-full bg-brand-magenta/8 blur-[140px]"></div>

      <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <MotionReveal as="header" class="mb-8 max-w-3xl">
          <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Proyecto destacado</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Beto y Más</h2>
          <p class="mt-4 text-base text-muted sm:text-lg">Plataforma de fidelización y gamificación</p>
        </MotionReveal>

        <MotionReveal
          v-if="featuredProject"
          as="article"
          class="relative overflow-hidden rounded-[2rem] border border-brand-violet/20 bg-linear-to-br from-[#18181b]/72 via-space/62 to-[#111118]/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:border-brand-magenta/30 sm:p-6 lg:p-8"
        >
          <div class="absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-brand-magenta/60 to-transparent"></div>

          <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div class="flex flex-col">
              <p class="text-xs font-medium uppercase tracking-[0.2em] text-brand-magenta">{{ featuredProject.role }}</p>
              <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {{ featuredProject.description }}
              </p>

              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="technology in featuredProject.technologies.slice(0, 6)"
                  :key="technology"
                  class="rounded-full border border-brand-violet/20 bg-brand-violet/7 px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {{ technology }}
                </span>
              </div>

              <div class="mt-7 rounded-2xl border border-white/8 bg-white/2.5 p-5">
                <h3 class="text-sm font-semibold text-foreground">Responsabilidades principales</h3>
                <ul class="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                  <li
                    v-for="responsibility in featuredProject.responsibilities"
                    :key="responsibility"
                    class="flex gap-3"
                  >
                    <span class="mt-2 size-1.5 shrink-0 rounded-full bg-brand-magenta"></span>
                    <span>{{ responsibility }}</span>
                  </li>
                </ul>

                <Transition
                  enter-active-class="transition duration-250 ease-out"
                  enter-from-class="translate-y-2 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="-translate-y-1 opacity-0"
                >
                  <p v-if="showProjectDetails" class="mt-5 border-t border-white/7 pt-4 text-sm leading-relaxed text-muted">
                    {{ projectResult }}
                  </p>
                </Transition>
              </div>

              <div class="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  class="inline-flex w-fit items-center justify-center rounded-xl bg-linear-to-r from-brand-violet to-brand-magenta px-5 py-3 text-sm font-semibold text-foreground shadow-lg shadow-brand-magenta/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-magenta/30"
                  @click="showProjectDetails = !showProjectDetails"
                >
                  {{ showProjectDetails ? 'Ocultar detalles' : 'Más detalles' }}
                </button>
                <RouterLink
                  to="/contacto"
                  class="inline-flex w-fit items-center justify-center rounded-xl border border-brand-violet/35 bg-white/2 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-brand-magenta/40 hover:text-brand-magenta"
                >
                  Conversar sobre proyectos
                </RouterLink>
              </div>
            </div>

            <div class="relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-white/8 bg-space/55 p-3 shadow-2xl shadow-black/25 lg:min-h-[28rem]">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.22),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.18),transparent_30%)]"></div>
              <div class="relative h-full overflow-hidden rounded-[1.35rem] border border-brand-violet/15 bg-[#0f1018]">
                <img
                  v-if="!projectImageUnavailable"
                  :src="projectPreviewSrc"
                  alt="Vista previa del proyecto Beto y Más"
                  class="h-full min-h-[18rem] w-full object-cover lg:min-h-[28rem]"
                  @error="projectImageUnavailable = true"
                />
                <div v-else class="flex h-full min-h-[18rem] flex-col justify-between p-5 lg:min-h-[28rem] lg:p-7">
                  <div class="flex items-center justify-between border-b border-white/7 pb-4">
                    <div>
                      <p class="text-sm font-semibold text-foreground">Beto y Más</p>
                      <p class="mt-1 text-xs text-muted">Dashboard preview</p>
                    </div>
                    <span class="rounded-full border border-brand-magenta/25 bg-brand-magenta/10 px-3 py-1 text-xs text-brand-magenta">
                      Gamificación
                    </span>
                  </div>

                  <div class="grid gap-3 py-6 sm:grid-cols-2">
                    <div class="rounded-2xl border border-white/8 bg-white/3 p-4">
                      <p class="text-xs text-muted">Puntos activos</p>
                      <p class="mt-3 text-2xl font-semibold text-foreground">12.4k</p>
                    </div>
                    <div class="rounded-2xl border border-white/8 bg-white/3 p-4">
                      <p class="text-xs text-muted">Recompensas</p>
                      <p class="mt-3 text-2xl font-semibold text-foreground">48</p>
                    </div>
                    <div class="rounded-2xl border border-white/8 bg-white/3 p-4 sm:col-span-2">
                      <p class="text-xs text-muted">Flujo principal</p>
                      <div class="mt-4 h-2 rounded-full bg-white/8">
                        <div class="h-full w-3/4 rounded-full bg-linear-to-r from-brand-violet to-brand-magenta"></div>
                      </div>
                    </div>
                  </div>

                  <p class="rounded-2xl border border-brand-violet/15 bg-brand-violet/8 p-4 text-sm leading-relaxed text-muted">
                    Agrega el mockup real en /images/projects/beto-preview.jpg para reemplazar este fallback.
                  </p>
                </div>
              </div>
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
            :to="{ path: '/', hash: '#proyecto-destacado' }"
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
