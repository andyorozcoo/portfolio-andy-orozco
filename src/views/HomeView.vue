<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import ContactSection from '../components/sections/ContactSection.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import MotionReveal from '../components/ui/MotionReveal.vue'

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

const aboutCards = [
  {
    id: 'diplomado-sistemas',
    title: 'Diplomado en Ingeniería en Sistemas',
    year: '2025',
    description: 'Formación en desarrollo de software, bases de datos y resolución de problemas tecnológicos.',
  },
  {
    id: 'estudiante-merito',
    title: 'Estudiante Mérito 2024',
    year: '2024',
    description: 'Reconocimiento por buenas calificaciones, compromiso universitario y rendimiento deportivo.',
  },
]

const projectImageUnavailable = ref(false)
const projectPreviewIsOpen = ref(false)
const activeAboutCardId = ref(null)

const projectImageSrc = `${import.meta.env.BASE_URL}images/projects/beto-showcase.jpg`
const projectUrl = 'https://betoymas.com/'

const projectCards = [
  {
    id: 'beto-y-mas',
    title: 'Beto y Más',
    subtitle: 'Plataforma de fidelización y gamificación',
    role: 'Full Stack Developer',
    description:
      'Sistema web desarrollado para centralizar clientes, puntos, recompensas, promociones y dinámicas de fidelización mediante una plataforma moderna y modular.',
    stack: projectStack,
    imageSrc: projectImageSrc,
    url: projectUrl,
    available: true,
  },
  {
    id: 'proximamente',
    title: 'Próximamente',
    subtitle: 'Nueva experiencia digital en desarrollo',
    role: 'Frontend Developer',
    description:
      'Espacio reservado para un próximo caso de estudio con enfoque en interfaces modernas, rendimiento y una experiencia de usuario cuidada.',
    stack: ['Vue 3', 'TailwindCSS', 'API REST', 'UX/UI'],
    available: false,
  },
]

const activeAboutCard = computed(() => {
  return aboutCards.find((card) => card.id === activeAboutCardId.value)
})

const openAboutCard = (id) => {
  activeAboutCardId.value = id
}

const closeAboutCard = () => {
  activeAboutCardId.value = null
}

const openProjectPreview = () => {
  if (!projectImageUnavailable.value) {
    projectPreviewIsOpen.value = true
  }
}

const closeProjectPreview = () => {
  projectPreviewIsOpen.value = false
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeAboutCard()
    closeProjectPreview()
  }
}

watch([projectPreviewIsOpen, activeAboutCardId], ([isProjectOpen, aboutId]) => {
  document.body.classList.toggle('menu-open', isProjectOpen || Boolean(aboutId))
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

    <section id="sobre-mi" class="relative scroll-mt-20 px-5 py-10 sm:px-6 sm:py-12">
      <div class="mx-auto w-full max-w-5xl">
        <MotionReveal as="header" class="mx-auto mb-8 max-w-3xl text-center" :y="18" :delay="0.02">
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-magenta">Sobre mí</p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Más allá del código
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Formación, reconocimientos y experiencias que han contribuido a mi crecimiento profesional.
          </p>
          <p class="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Soy desarrollador full stack en formación y estudiante de Ingeniería en Sistemas de Información en la
            Universidad Nacional de Costa Rica.
          </p>
          <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Mi trayectoria combina desarrollo de software, trabajo colaborativo, participación universitaria y formación
            técnica orientada a crear soluciones funcionales y bien estructuradas.
          </p>
        </MotionReveal>

        <div class="relative mx-auto mt-8 max-w-4xl">
          <div class="absolute left-4 top-4 bottom-4 w-px bg-linear-to-b from-brand-violet/60 via-brand-magenta/35 to-transparent md:left-1/2 md:-translate-x-1/2"></div>

          <div class="space-y-5">
            <MotionReveal
              v-for="(card, index) in aboutCards"
              :key="card.id"
              as="article"
              class="relative grid gap-4 pl-10 md:grid-cols-[1fr_3rem_1fr] md:items-center md:pl-0"
              :delay="0.14 + index * 0.1"
              :x="index % 2 === 0 ? -16 : 16"
            >
              <div
                class="absolute left-4 top-5 z-10 size-3 -translate-x-1/2 rounded-full border border-brand-violet/60 bg-brand-magenta shadow-lg shadow-brand-magenta/30 motion-safe:animate-[subtle-pulse_2.8s_ease-in-out_infinite] md:left-1/2"
              ></div>

              <button
                type="button"
                class="group rounded-2xl border border-white/10 bg-[#0f1720]/76 p-5 text-left shadow-lg shadow-black/15 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-brand-violet/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-magenta md:col-span-1"
                :class="index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3'"
                :aria-label="`Abrir evidencia de ${card.title}`"
                @click="openAboutCard(card.id)"
              >
                <div class="mb-4 flex items-center justify-between gap-3">
                  <span class="rounded-full border border-brand-violet/20 bg-brand-violet/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-magenta">
                    {{ card.year }}
                  </span>
                  <span class="h-px flex-1 bg-linear-to-r from-brand-violet/35 to-transparent"></span>
                </div>
                <h3 class="text-base font-semibold text-foreground">{{ card.title }}</h3>
                <p class="mt-3 text-sm leading-relaxed text-muted">{{ card.description }}</p>
                <span class="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand-magenta transition-colors duration-300 group-hover:text-foreground">
                  Ver evidencia
                  <svg viewBox="0 0 24 24" class="size-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </button>

              <div
                class="hidden text-sm font-semibold text-brand-magenta md:block"
                :class="index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-1 md:row-start-1 md:text-right'"
              >
                {{ card.year }}
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>

      <Teleport to="body">
        <Transition
          enter-active-class="transition duration-250 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-180 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="activeAboutCard"
            class="fixed inset-0 z-[90] grid place-items-center bg-space/88 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            :aria-label="activeAboutCard.title"
            @click.self="closeAboutCard"
          >
            <button
              type="button"
              class="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full border border-white/10 bg-[#0f1720] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/40 hover:text-brand-magenta"
              aria-label="Cerrar evidencia"
              @click="closeAboutCard"
            >
              <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            <Transition
              appear
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="translate-y-3 opacity-0 scale-[0.98] blur-sm"
              enter-to-class="translate-y-0 opacity-100 scale-100 blur-0"
            >
              <article class="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0f1720] p-5 shadow-2xl shadow-black/50 sm:p-6">
                <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-magenta/55 to-transparent"></div>
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-magenta">{{ activeAboutCard.year }}</p>
                <h3 class="mt-3 text-xl font-semibold text-foreground">{{ activeAboutCard.title }}</h3>
                <p class="mt-3 text-sm leading-relaxed text-muted">{{ activeAboutCard.description }}</p>

                <div class="mt-6 grid min-h-56 place-items-center rounded-2xl border border-dashed border-white/15 bg-white/3 p-6 text-center">
                  <div>
                    <p class="text-sm font-semibold text-foreground">Espacio para evidencia</p>
                    <p class="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-muted">
                      Aquí se puede mostrar el título, reconocimiento o comprobante correspondiente cuando agregues el archivo.
                    </p>
                  </div>
                </div>
              </article>
            </Transition>
          </div>
        </Transition>
      </Teleport>
    </section>

    <ExperienceSection />

    <section id="proyecto" class="relative scroll-mt-20 px-5 py-10 sm:px-6 sm:py-12">
      <div class="mx-auto w-full max-w-5xl">
        <MotionReveal as="header" class="mb-7 max-w-2xl" :x="-12" :delay="0.02">
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-magenta">Proyecto principal</p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Beto y Más</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Proyecto real orientado a fidelización, puntos y gamificación para clientes.
          </p>
        </MotionReveal>

        <div class="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <MotionReveal
            v-for="(project, index) in projectCards"
            :key="project.id"
            as="article"
            class="mx-auto flex h-full w-full max-w-xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0f1720]/78 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-brand-violet/10 lg:max-w-none"
            :delay="0.1 + index * 0.08"
            :y="26"
          >
            <div class="relative h-40 overflow-hidden bg-space/70 sm:h-48">
              <button
                v-if="project.available && !projectImageUnavailable"
                type="button"
                class="group/preview h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-brand-violet"
                :aria-label="`Abrir vista previa de ${project.title}`"
                @click="openProjectPreview"
              >
                <img
                  :src="project.imageSrc"
                  :alt="`Vista previa de ${project.title}`"
                  class="h-full w-full object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                  @error="projectImageUnavailable = true"
                />
              </button>
              <div v-else class="grid h-full place-items-center p-6 text-center">
                <div>
                  <p class="text-2xl font-semibold text-foreground">{{ project.title }}</p>
                  <p class="mt-2 text-sm text-muted">{{ project.subtitle }}</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-linear-to-t from-space/80 via-space/10 to-transparent"></div>
            </div>

            <div class="relative flex flex-1 flex-col px-5 pb-6 pt-0 sm:px-6 sm:pb-7">
              <div class="-mt-5 flex justify-end">
                <a
                  v-if="project.available"
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`Abrir ${project.title}`"
                  class="grid size-10 place-items-center rounded-xl border border-white/10 bg-[#0b1119]/90 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/35 hover:text-brand-magenta active:scale-[0.98]"
                >
                  <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
                <span
                  v-else
                  class="grid size-10 place-items-center rounded-xl border border-white/10 bg-[#0b1119]/90 text-muted/70"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </span>
              </div>

              <div class="mt-4">
                <h3 class="text-2xl font-semibold text-foreground">{{ project.title }}</h3>
                <p class="mt-1 text-sm font-semibold text-brand-magenta">
                  {{ project.subtitle }}
                </p>
                <p class="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-muted">Rol · {{ project.role }}</p>
              </div>

              <p class="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                {{ project.description }}
              </p>

              <div class="mt-5">
                <p class="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-muted">Stack</p>
                <div class="flex flex-wrap justify-center gap-2">
                  <span
                    v-for="item in project.stack"
                    :key="`${project.id}-${item}`"
                    class="rounded-lg border border-white/10 bg-white/3 px-3 py-1.5 text-xs font-semibold text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/35 hover:text-brand-magenta"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>

              <div class="mt-auto border-t border-white/8 pt-5">
                <a
                  v-if="project.available"
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-violet/25 bg-brand-violet/10 px-5 py-3 text-sm font-semibold text-brand-magenta transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/45 hover:bg-brand-violet/15 hover:shadow-lg hover:shadow-brand-violet/10 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-magenta"
                >
                  Ver proyecto
                  <svg viewBox="0 0 24 24" class="size-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
                <span
                  v-else
                  class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-violet/15 bg-brand-violet/8 px-5 py-3 text-sm font-semibold text-muted"
                >
                  En desarrollo
                </span>
              </div>
            </div>
          </MotionReveal>
        </div>

        <Teleport to="body">
          <Transition
            enter-active-class="transition duration-250 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-180 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="projectPreviewIsOpen"
              class="fixed inset-0 z-[90] grid place-items-center bg-space/88 p-4 backdrop-blur-xl"
              role="dialog"
              aria-modal="true"
              aria-label="Vista previa del proyecto Beto y Más"
              @click.self="closeProjectPreview"
            >
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.18),transparent_32%),radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.14),transparent_30%)]"></div>

              <button
                type="button"
                class="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full border border-white/10 bg-[#0f1720] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/40 hover:text-brand-magenta"
                aria-label="Cerrar vista previa"
                @click="closeProjectPreview"
              >
                <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>

              <Transition
                appear
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="translate-y-3 opacity-0 scale-[0.98] blur-sm"
                enter-to-class="translate-y-0 opacity-100 scale-100 blur-0"
              >
                <figure class="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0f1720] p-3 shadow-2xl shadow-black/50">
                  <img
                    :src="projectImageSrc"
                    alt="Vista ampliada del proyecto Beto y Más"
                    class="max-h-[76dvh] w-full rounded-2xl object-contain"
                    decoding="async"
                  />
                  <figcaption class="px-2 py-3">
                    <p class="font-semibold text-foreground">Beto y Más</p>
                    <p class="mt-1 text-sm text-muted">Vista previa del proyecto real.</p>
                  </figcaption>
                </figure>
              </Transition>
            </div>
          </Transition>
        </Teleport>
      </div>
    </section>

    <SkillsSection />
    <ContactSection />
  </div>
</template>
