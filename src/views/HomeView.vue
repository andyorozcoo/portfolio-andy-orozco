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
    year: 'Formación académica',
    description: 'Base académica en software, bases de datos y resolución de problemas.',
    image: `${import.meta.env.BASE_URL}images/about/diplomado-sistemas.jpg`,
  },
  {
    id: 'estudiante-merito',
    title: 'Estudiante Mérito',
    year: '2025',
    description: 'Reconocimiento por desempeño y participación en el área deportiva.',
    image: `${import.meta.env.BASE_URL}images/about/estudiante-merito.jpg`,
  },
]

const projectImageUnavailable = ref(false)
const projectPreviewIsOpen = ref(false)
const credentialImageFailures = ref([])
const activeCredentialId = ref(null)

const projectImageSrc = `${import.meta.env.BASE_URL}images/projects/beto-showcase.jpg`
const projectUrl = 'https://betoymas.com/'

const activeCredential = computed(() => {
  return aboutCards.find((card) => card.id === activeCredentialId.value)
})

const markCredentialImageAsFailed = (id) => {
  if (!credentialImageFailures.value.includes(id)) {
    credentialImageFailures.value = [...credentialImageFailures.value, id]
  }
}

const credentialHasImage = (id) => !credentialImageFailures.value.includes(id)

const openCredential = (id) => {
  activeCredentialId.value = id
}

const closeCredential = () => {
  activeCredentialId.value = null
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
    closeCredential()
    closeProjectPreview()
  }
}

watch([activeCredentialId, projectPreviewIsOpen], ([id, isProjectOpen]) => {
  document.body.classList.toggle('menu-open', Boolean(id) || isProjectOpen)
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

        <MotionReveal
          as="article"
          class="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0f1720]/78 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-brand-violet/10"
          :delay="0.1"
          :y="26"
        >
          <div class="relative h-44 overflow-hidden bg-space/70 sm:h-56">
            <button
              v-if="!projectImageUnavailable"
              type="button"
              class="group/preview h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-brand-violet"
              aria-label="Abrir vista previa de Beto y Más"
              @click="openProjectPreview"
            >
              <img
                :src="projectImageSrc"
                alt="Vista previa de Beto y Más"
                class="h-full w-full object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.04]"
                loading="lazy"
                decoding="async"
                @error="projectImageUnavailable = true"
              />
            </button>
            <div v-else class="grid h-full place-items-center p-6 text-center">
              <div>
                <p class="text-2xl font-semibold text-foreground">Beto y Más</p>
                <p class="mt-2 text-sm text-muted">Plataforma de fidelización y gamificación</p>
              </div>
            </div>
            <div class="absolute inset-0 bg-linear-to-t from-space/80 via-space/10 to-transparent"></div>
          </div>

          <div class="relative px-5 pb-6 pt-0 sm:px-7 sm:pb-7">
            <div class="-mt-8 flex items-end justify-between gap-4">
              <div
                class="grid size-14 place-items-center rounded-2xl border border-brand-violet/30 bg-[#0b1119] text-sm font-bold text-brand-magenta shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-0.5"
              >
                B+
              </div>

              <a
                :href="projectUrl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Beto y Más"
                class="grid size-10 place-items-center rounded-xl border border-white/10 bg-[#0b1119]/90 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/35 hover:text-brand-magenta active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>

            <div class="mt-4">
              <h3 class="text-2xl font-semibold text-foreground">Beto y Más</h3>
              <p class="mt-1 text-sm font-semibold text-brand-magenta">
                Plataforma de fidelización y gamificación
              </p>
              <p class="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-muted">Rol · Full Stack Developer</p>
            </div>

            <p class="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              Sistema web desarrollado para centralizar clientes, puntos, recompensas, promociones y dinámicas de
              fidelización mediante una plataforma moderna y modular.
            </p>

            <div class="mt-5">
              <p class="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-muted">Stack</p>
              <div class="flex flex-wrap justify-center gap-2">
                <span
                  v-for="item in projectStack"
                  :key="item"
                  class="rounded-lg border border-white/10 bg-white/3 px-3 py-1.5 text-xs font-semibold text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/35 hover:text-brand-magenta"
                >
                  {{ item }}
                </span>
              </div>
            </div>

            <div class="mt-6 border-t border-white/8 pt-5">
              <a
                :href="projectUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-violet/25 bg-brand-violet/10 px-5 py-3 text-sm font-semibold text-brand-magenta transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/45 hover:bg-brand-violet/15 hover:shadow-lg hover:shadow-brand-violet/10 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-magenta"
              >
                Ver proyecto
                <svg viewBox="0 0 24 24" class="size-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>
        </MotionReveal>

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

    <section id="sobre-mi" class="relative scroll-mt-20 px-5 py-10 sm:px-6 sm:py-12">
      <div class="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <MotionReveal :x="-14" :delay="0.02">
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-magenta">Sobre mí</p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Más allá del código
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Soy desarrollador full stack en formación y estudiante de Ingeniería en Sistemas de Información en la
            Universidad Nacional de Costa Rica.
          </p>
          <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Mi trayectoria combina desarrollo de software, trabajo colaborativo, participación universitaria y formación
            técnica orientada a crear soluciones funcionales y bien estructuradas.
          </p>
        </MotionReveal>

        <div class="grid gap-3 sm:grid-cols-2">
          <MotionReveal
            v-for="(card, index) in aboutCards"
            :key="card.id"
            as="article"
            class="group overflow-hidden rounded-2xl border border-white/10 bg-[#0f1720]/72 shadow-lg shadow-black/15 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-brand-violet/10"
            :delay="0.08 + index * 0.08"
            :x="index % 2 === 0 ? 12 : -12"
          >
            <button
              type="button"
              class="block w-full text-left"
              :aria-label="`Abrir imagen de ${card.title}`"
              @click="openCredential(card.id)"
            >
              <div class="relative h-32 overflow-hidden bg-space/70">
                <img
                  v-if="credentialHasImage(card.id)"
                  :src="card.image"
                  :alt="card.title"
                  class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  @error="markCredentialImageAsFailed(card.id)"
                />
                <div v-else class="grid h-full place-items-center bg-brand-violet/8 text-sm font-semibold text-brand-magenta">
                  Evidencia
                </div>
                <div class="absolute inset-0 bg-linear-to-t from-space/45 to-transparent"></div>
              </div>
              <div class="p-4">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-sm font-semibold text-foreground">{{ card.title }}</h3>
                  <span class="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[0.68rem] text-muted">
                    {{ card.year }}
                  </span>
                </div>
                <p class="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{{ card.description }}</p>
              </div>
            </button>
          </MotionReveal>
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
            v-if="activeCredential"
            class="fixed inset-0 z-[90] grid place-items-center bg-space/88 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            :aria-label="activeCredential.title"
            @click.self="closeCredential"
          >
            <button
              type="button"
              class="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/10 bg-[#0f1720] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/40 hover:text-brand-magenta"
              aria-label="Cerrar imagen"
              @click="closeCredential"
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
              <figure class="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0f1720] p-3 shadow-2xl shadow-black/50">
                <img
                  v-if="credentialHasImage(activeCredential.id)"
                  :src="activeCredential.image"
                  :alt="activeCredential.title"
                  class="max-h-[74dvh] w-full rounded-2xl object-contain"
                  decoding="async"
                />
                <figcaption class="px-2 py-3">
                  <p class="font-semibold text-foreground">{{ activeCredential.title }}</p>
                  <p class="mt-1 text-sm text-muted">{{ activeCredential.description }}</p>
                </figcaption>
              </figure>
            </Transition>
          </div>
        </Transition>
      </Teleport>
    </section>

    <SkillsSection />
    <ContactSection />
  </div>
</template>
