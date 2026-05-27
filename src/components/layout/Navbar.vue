<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'certificaciones', label: 'Certificaciones' },
  { id: 'contacto', label: 'Contacto' },
]

const activeSection = ref('inicio')
const isMenuOpen = ref(false)
let sectionObserver

const setActiveLink = (id) => {
  activeSection.value = id
  isMenuOpen.value = false
}

const closeWithEscape = (event) => {
  if (event.key === 'Escape') {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', closeWithEscape)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-30% 0px -60%', threshold: 0.05 },
  )

  document.querySelectorAll('section[id]').forEach((section) => sectionObserver.observe(section))
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', closeWithEscape)
  sectionObserver?.disconnect()
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-brand-magenta/10 bg-space/75 backdrop-blur-xl">
    <nav aria-label="Navegación principal" class="mx-auto flex h-20 w-full max-w-7xl items-center px-6 lg:px-8">
      <a
        href="#inicio"
        aria-label="Andy Orozco Castro, página principal"
        class="group flex shrink-0 items-center gap-3 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet"
        @click="setActiveLink('inicio')"
      >
        <span
          class="grid size-11 place-items-center rounded-full bg-linear-to-br from-brand-violet to-brand-magenta text-sm font-semibold tracking-wide text-foreground shadow-lg shadow-brand-violet/20 transition-transform duration-300 group-hover:scale-105"
        >
          AO
        </span>
        <span class="hidden text-sm font-medium tracking-wide text-foreground sm:block">
          Andy Orozco Castro
        </span>
      </a>

      <div class="ml-auto hidden items-center gap-3 lg:flex xl:gap-5">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="group relative px-1 py-3 text-sm font-medium transition-colors duration-300"
          :class="activeSection === link.id ? 'text-foreground' : 'text-muted hover:text-foreground'"
          @click="setActiveLink(link.id)"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-0 bottom-1 h-px origin-center bg-linear-to-r from-brand-violet to-brand-magenta transition-transform duration-300"
            :class="activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
          ></span>
        </a>
      </div>

      <a
        href="#contacto"
        class="ml-7 hidden rounded-xl bg-linear-to-r from-brand-violet to-brand-magenta px-5 py-2.5 text-sm font-medium text-foreground shadow-lg shadow-brand-magenta/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-magenta/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-magenta lg:inline-flex"
        @click="setActiveLink('contacto')"
      >
        Contáctame
      </a>

      <button
        type="button"
        class="ml-auto grid size-11 place-items-center rounded-xl border border-white/10 bg-white/3.5 text-foreground transition-colors duration-300 hover:border-brand-magenta/35 hover:text-brand-magenta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        aria-label="Abrir menú de navegación"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg v-if="!isMenuOpen" viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="1.7">
          <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="1.7">
          <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-navigation"
        class="border-t border-white/5 bg-space/95 px-6 pb-6 pt-3 backdrop-blur-xl lg:hidden"
      >
        <div class="mx-auto flex max-w-7xl flex-col">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors"
            :class="activeSection === link.id ? 'bg-brand-violet/10 text-brand-magenta' : 'text-muted hover:bg-white/5 hover:text-foreground'"
            @click="setActiveLink(link.id)"
          >
            {{ link.label }}
            <span v-if="activeSection === link.id" class="size-1.5 rounded-full bg-brand-magenta"></span>
          </a>
          <a
            href="#contacto"
            class="mt-3 rounded-xl bg-linear-to-r from-brand-violet to-brand-magenta px-6 py-3 text-center text-sm font-medium text-foreground"
            @click="setActiveLink('contacto')"
          >
            Contáctame
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
