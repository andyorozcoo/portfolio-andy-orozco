<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import HeroSection from '../components/sections/HeroSection.vue'
import MotionReveal from '../components/ui/MotionReveal.vue'

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

const projectSummary = [
  { label: 'Rol', value: 'Full Stack Developer' },
  { label: 'Frontend', value: 'Vue + Inertia' },
  { label: 'Módulos funcionales', value: '9' },
  { label: 'Metodología', value: 'Scrum' },
  { label: 'Deploy', value: 'Docker + Railway' },
]

const projectStack = ['Laravel', 'Vue 3', 'Inertia.js', 'MySQL', 'TailwindCSS', 'Phaser', 'Docker', 'Railway', 'Git']

const solutionCards = [
  {
    title: 'Centralización de clientes',
    description: 'Registro, seguimiento y consulta de información operativa desde un mismo entorno.',
  },
  {
    title: 'Control de puntos y recompensas',
    description: 'Reglas de acumulación, canjes y recompensas conectadas al flujo administrativo.',
  },
  {
    title: 'Gamificación conectada',
    description: 'Promociones, eventos y minijuegos integrados para mejorar la participación de clientes.',
  },
]

const contributionFlow = [
  'Backend Laravel y arquitectura modular',
  'APIs REST y reglas de negocio',
  'Vue 3 + Inertia.js',
  'Validaciones backend/frontend',
  'Roles y permisos',
  'Base de datos MySQL',
  'QA, bugs y soporte funcional',
  'Docker y Railway',
]

const functionalAreas = [
  'Clientes',
  'Puntos',
  'Recompensas',
  'Canjes',
  'Promociones',
  'Eventos',
  'Notificaciones',
  'Minijuegos',
  'Panel administrativo',
]

const technicalApproach = [
  'Separación por dominio funcional',
  'APIs REST',
  'Minijuegos con Phaser',
  'Validaciones críticas en backend',
  'Control de acceso por roles',
  'MySQL relacional',
]

const securityItems = [
  'Autenticación',
  'Login tradicional y Google',
  'Autorización por roles',
  'Protección de rutas administrativas',
  'Validaciones sensibles',
  'Sesiones seguras',
]

const projectPreviewSrc = `${import.meta.env.BASE_URL}images/projects/beto-preview.png`
const projectImageUnavailable = ref(false)
const isPreviewOpen = ref(false)

const openPreview = () => {
  isPreviewOpen.value = true
}

const closePreview = () => {
  isPreviewOpen.value = false
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && isPreviewOpen.value) {
    closePreview()
  }
}

watch(isPreviewOpen, (isOpen) => {
  document.body.classList.toggle('menu-open', isOpen)
})

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.classList.remove('menu-open')
})
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
      <div class="absolute -left-24 top-16 -z-10 size-96 rounded-full bg-brand-violet/10 blur-[140px]"></div>
      <div class="absolute -right-24 bottom-20 -z-10 size-96 rounded-full bg-brand-magenta/8 blur-[140px]"></div>

      <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <MotionReveal
          as="article"
          class="relative overflow-hidden rounded-[2.25rem] border border-brand-violet/20 bg-linear-to-br from-[#111827]/86 via-space/78 to-[#09090f]/95 p-4 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-5 lg:p-6"
        >
          <div class="absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-brand-magenta/55 to-transparent"></div>
          <div class="absolute -right-24 top-16 size-72 rounded-full bg-brand-magenta/8 blur-[110px]"></div>

          <div class="relative space-y-5">
            <div class="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
              <div class="rounded-[1.75rem] border border-white/8 bg-white/2.5 p-5 backdrop-blur-xl sm:p-6">
                <p class="text-xs font-semibold uppercase tracking-[0.36em] text-brand-magenta">Proyecto principal</p>
                <h2 class="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Beto y Más
                </h2>
                <p class="mt-4 text-base font-medium text-brand-magenta">
                  Plataforma de fidelización, promociones y gamificación empresarial
                </p>
                <p class="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                  Sistema web desarrollado para centralizar clientes, puntos, recompensas, promociones y dinámicas de
                  fidelización desde una plataforma moderna, escalable y orientada a la experiencia de usuario.
                </p>

                <div class="mt-6 flex flex-wrap gap-2">
                  <span
                    v-for="item in projectStack"
                    :key="item"
                    class="rounded-full border border-brand-violet/22 bg-space/55 px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>

              <div class="grid content-start gap-3 sm:grid-cols-2">
                <div
                  v-for="item in projectSummary"
                  :key="item.label"
                  class="rounded-2xl border border-white/8 bg-white/2.5 p-4 backdrop-blur-xl"
                >
                  <p class="text-xs uppercase tracking-[0.18em] text-muted">{{ item.label }}</p>
                  <p class="mt-2 text-sm font-semibold text-foreground">{{ item.value }}</p>
                </div>

                <div class="rounded-2xl border border-brand-violet/18 bg-linear-to-br from-brand-violet/10 to-brand-magenta/7 p-4 backdrop-blur-xl sm:col-span-2">
                  <p class="text-sm font-semibold text-foreground">Resultado del proyecto</p>
                  <p class="mt-2 text-sm leading-relaxed text-muted">
                    La plataforma consolidó procesos de fidelización y administración en un solo sistema.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="group block w-full overflow-hidden rounded-[1.75rem] border border-white/8 bg-space/45 p-3 text-left shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/35 hover:shadow-brand-magenta/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-magenta"
              aria-label="Abrir preview del proyecto Beto y Más"
              @click="openPreview"
            >
              <div class="relative aspect-[16/9] overflow-hidden rounded-[1.35rem] bg-[#0d111c]">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_50%_85%,rgba(236,72,153,0.10),transparent_32%)]"></div>
                <div class="absolute inset-x-8 top-8 h-px bg-linear-to-r from-transparent via-brand-magenta/40 to-transparent"></div>

                <img
                  v-if="!projectImageUnavailable"
                  :src="projectPreviewSrc"
                  alt="Vista previa del proyecto Beto y Más"
                  class="relative h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  decoding="async"
                  @error="projectImageUnavailable = true"
                />

                <div v-else class="grid min-h-[18rem] place-items-center p-5 sm:min-h-[27rem] xl:min-h-[37rem]">
                  <div class="w-full max-w-3xl rounded-[1.5rem] border border-brand-violet/15 bg-linear-to-br from-[#161b29] to-space/90 p-5 shadow-2xl shadow-black/30">
                    <div class="flex items-center justify-between border-b border-white/7 pb-4">
                      <p class="text-lg font-semibold text-foreground">BETO&MÁS</p>
                      <span class="rounded-full border border-brand-magenta/25 bg-brand-magenta/10 px-3 py-1 text-xs text-brand-magenta">
                        Admin panel
                      </span>
                    </div>
                    <div class="grid gap-4 py-7 md:grid-cols-2">
                      <div class="rounded-2xl border border-white/8 bg-white/3 p-5">
                        <p class="text-xs uppercase tracking-[0.2em] text-muted">Recompensas</p>
                        <p class="mt-5 text-3xl font-semibold text-foreground">Panel centralizado</p>
                      </div>
                      <div class="rounded-2xl border border-white/8 bg-white/3 p-5">
                        <p class="text-xl font-semibold text-foreground">Flujo administrativo</p>
                        <div class="mt-6 space-y-3">
                          <div class="h-10 rounded-xl border border-brand-violet/25 bg-space/70"></div>
                          <div class="h-10 rounded-xl border border-white/8 bg-space/70"></div>
                          <div class="h-10 rounded-xl bg-linear-to-r from-brand-violet to-brand-magenta"></div>
                        </div>
                      </div>
                    </div>
                    <p class="text-sm text-muted">Vista previa del flujo de fidelización.</p>
                  </div>
                </div>

                <div class="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-space/35 to-transparent"></div>
              </div>
            </button>
          </div>

          <div class="relative mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div class="rounded-[1.75rem] border border-brand-violet/18 bg-white/2.5 p-5 backdrop-blur-xl">
              <p class="text-sm font-semibold uppercase tracking-[0.26em] text-brand-magenta">Qué resuelve</p>
              <div class="mt-5 grid gap-3">
                <div
                  v-for="card in solutionCards"
                  :key="card.title"
                  class="rounded-2xl border border-white/8 bg-space/45 p-4"
                >
                  <h3 class="text-sm font-semibold text-foreground">{{ card.title }}</h3>
                  <p class="mt-2 text-sm leading-relaxed text-muted">{{ card.description }}</p>
                </div>
              </div>
            </div>

            <div class="rounded-[1.75rem] border border-brand-violet/18 bg-linear-to-br from-[#18181b]/62 to-space/60 p-5 backdrop-blur-xl">
              <p class="text-sm font-semibold uppercase tracking-[0.26em] text-brand-magenta">Mi aporte</p>
              <div class="mt-5 grid gap-3 sm:grid-cols-2">
                <div
                  v-for="(item, index) in contributionFlow"
                  :key="item"
                  class="flex gap-3 rounded-2xl border border-white/8 bg-space/45 p-4 text-sm leading-relaxed text-muted"
                >
                  <span class="grid size-6 shrink-0 place-items-center rounded-full bg-brand-magenta/12 text-xs font-semibold text-brand-magenta">
                    {{ index + 1 }}
                  </span>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>

          <div class="relative mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="rounded-[1.75rem] border border-brand-violet/18 bg-white/2.5 p-5 backdrop-blur-xl">
              <p class="text-sm font-semibold uppercase tracking-[0.26em] text-brand-magenta">Áreas funcionales</p>
              <div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div
                  v-for="item in functionalAreas"
                  :key="item"
                  class="rounded-2xl border border-white/8 bg-space/45 p-4 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-magenta/30"
                >
                  {{ item }}
                </div>
              </div>
            </div>

            <div class="rounded-[1.75rem] border border-brand-violet/18 bg-white/2.5 p-5 backdrop-blur-xl">
              <p class="text-sm font-semibold uppercase tracking-[0.26em] text-brand-magenta">Seguridad</p>
              <div class="mt-5 grid gap-3">
                <div v-for="item in securityItems" :key="item" class="flex gap-3 text-sm leading-relaxed text-muted">
                  <span class="mt-1 text-brand-magenta">
                    <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3 5.5 5.5v5.3c0 4 2.6 7.6 6.5 9.2 3.9-1.6 6.5-5.2 6.5-9.2V5.5L12 3Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="m9 12 2 2 4-5" />
                    </svg>
                  </span>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>

          <div class="relative mt-5 rounded-[1.75rem] border border-brand-violet/18 bg-linear-to-br from-[#18181b]/62 to-space/60 p-5 backdrop-blur-xl">
            <p class="text-sm font-semibold uppercase tracking-[0.26em] text-brand-magenta">Enfoque técnico</p>
            <div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="item in technicalApproach"
                :key="item"
                class="rounded-2xl border border-white/8 bg-space/45 p-4 text-sm font-medium text-foreground"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <p class="relative mt-5 rounded-2xl border border-white/8 bg-white/2.5 p-5 text-sm leading-relaxed text-muted">
            Por tratarse de un proyecto colaborativo y privado, el código fuente no se encuentra disponible públicamente.
          </p>
        </MotionReveal>
      </div>

      <Teleport to="body">
        <Transition
          enter-active-class="transition duration-250 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="isPreviewOpen"
            class="fixed inset-0 z-[90] flex items-center justify-center bg-space/88 p-4 backdrop-blur-xl sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Preview ampliado de Beto y Más"
            @click.self="closePreview"
          >
            <button
              type="button"
              class="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full border border-white/10 bg-space/75 text-foreground shadow-lg shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:border-brand-magenta/45 hover:text-brand-magenta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-magenta sm:right-6 sm:top-6"
              aria-label="Cerrar preview"
              @click="closePreview"
            >
              <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            <Transition
              appear
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="translate-y-3 opacity-0 scale-98"
              enter-to-class="translate-y-0 opacity-100 scale-100"
            >
              <figure class="relative w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-brand-violet/20 bg-linear-to-br from-[#18181b]/85 to-space/90 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-4">
                <div class="relative flex max-h-[78dvh] min-h-[18rem] items-center justify-center overflow-hidden rounded-[1.25rem] bg-black/30">
                  <img
                    v-if="!projectImageUnavailable"
                    :src="projectPreviewSrc"
                    alt="Preview ampliado del proyecto Beto y Más"
                    class="max-h-[78dvh] w-full object-contain"
                    decoding="async"
                    @error="projectImageUnavailable = true"
                  />
                  <div v-else class="p-8 text-center text-muted">
                    Vista previa del flujo de fidelización.
                  </div>
                </div>
                <figcaption class="px-2 pb-1 pt-4 sm:px-3">
                  <p class="text-base font-semibold text-foreground">Beto y Más</p>
                  <p class="mt-1 max-w-3xl text-sm leading-relaxed text-muted">
                    Vista previa del flujo de fidelización.
                  </p>
                </figcaption>
              </figure>
            </Transition>
          </div>
        </Transition>
      </Teleport>
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
