<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/experiencia', label: 'Experiencia' },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/contacto', label: 'Contacto' },
]

const route = useRoute()
const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const closeWithEscape = (event) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

const closeMenuOnDesktop = () => {
  if (window.innerWidth >= 1280) {
    closeMenu()
  }
}

const linkIsActive = (to) => {
  if (to === '/habilidades') {
    return route.path === '/habilidades' || route.path === '/stack'
  }

  return to === '/' ? route.path === '/' || route.path === '/inicio' : route.path === to
}

watch(isMenuOpen, (isOpen) => {
  document.body.classList.toggle('menu-open', isOpen)
})

watch(
  () => route.path,
  () => closeMenu(),
)

onMounted(() => {
  document.addEventListener('keydown', closeWithEscape)
  window.addEventListener('resize', closeMenuOnDesktop)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', closeWithEscape)
  window.removeEventListener('resize', closeMenuOnDesktop)
  document.body.classList.remove('menu-open')
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-brand-magenta/10 bg-space/75 backdrop-blur-xl">
    <nav aria-label="Navegación principal" class="mx-auto flex h-20 w-full max-w-7xl items-center px-6 lg:px-8">
      <RouterLink
        to="/"
        aria-label="Andy Orozco Castro, página principal"
        class="group flex shrink-0 items-center gap-3 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet"
        @click="closeMenu"
      >
        <span
          class="grid size-11 place-items-center rounded-full bg-linear-to-br from-brand-violet to-brand-magenta text-sm font-semibold tracking-wide text-foreground shadow-lg shadow-brand-violet/20 transition-transform duration-300 group-hover:scale-105"
        >
          AO
        </span>
        <span class="hidden text-sm font-medium tracking-wide text-foreground sm:block">
          Andy Orozco Castro
        </span>
      </RouterLink>

      <div class="ml-auto hidden items-center gap-5 xl:flex">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="group relative px-1 py-3 text-sm font-medium transition-colors duration-300"
          :class="linkIsActive(link.to) ? 'text-foreground' : 'text-muted hover:text-foreground'"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-0 bottom-1 h-px origin-center bg-linear-to-r from-brand-violet to-brand-magenta transition-transform duration-300"
            :class="linkIsActive(link.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
          ></span>
        </RouterLink>
      </div>

      <RouterLink
        to="/contacto"
        class="ml-7 hidden rounded-xl bg-linear-to-r from-brand-violet to-brand-magenta px-5 py-2.5 text-sm font-medium text-foreground shadow-lg shadow-brand-magenta/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-magenta/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-magenta xl:inline-flex"
      >
        Contáctame
      </RouterLink>

      <button
        type="button"
        class="ml-auto grid size-11 place-items-center rounded-xl border border-white/10 bg-white/3.5 text-foreground transition-colors duration-300 hover:border-brand-magenta/35 hover:text-brand-magenta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet xl:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        :aria-label="isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
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
        class="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/5 bg-space/95 px-6 pb-6 pt-3 backdrop-blur-xl xl:hidden"
      >
        <div class="mx-auto flex max-w-7xl flex-col">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors"
            :class="linkIsActive(link.to) ? 'bg-brand-violet/10 text-brand-magenta' : 'text-muted hover:bg-white/5 hover:text-foreground'"
            @click="closeMenu"
          >
            {{ link.label }}
            <span v-if="linkIsActive(link.to)" class="size-1.5 rounded-full bg-brand-magenta"></span>
          </RouterLink>
          <RouterLink
            to="/contacto"
            class="mt-3 rounded-xl bg-linear-to-r from-brand-violet to-brand-magenta px-6 py-3 text-center text-sm font-medium text-foreground"
            @click="closeMenu"
          >
            Contáctame
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
