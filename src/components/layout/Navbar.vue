<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyecto', label: 'Proyecto' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
]

const isMenuOpen = ref(false)
const activeSection = ref('inicio')
const avatarUnavailable = ref(false)
const isScrolled = ref(false)
const profileImageSrc = `${import.meta.env.BASE_URL}images/optimized/profile/profile-main-avatar.jpg`
let observer
let sectionMutationObserver
const observedSectionIds = new Set()

const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToSection = (href) => {
  closeMenu()

  const target = document.querySelector(href)

  if (!target) {
    return
  }

  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', href)
}

const closeWithEscape = (event) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

const closeMenuOnDesktop = () => {
  if (window.innerWidth >= 1024) {
    closeMenu()
  }
}

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 12
}

const observeAvailableSections = () => {
  navLinks.forEach((link) => {
    const section = document.querySelector(link.href)

    if (section && !observedSectionIds.has(section.id)) {
      observer.observe(section)
      observedSectionIds.add(section.id)
    }
  })

  if (observedSectionIds.size === navLinks.length) {
    sectionMutationObserver?.disconnect()
  }
}

watch(isMenuOpen, (isOpen) => {
  document.body.classList.toggle('menu-open', isOpen)
})

onMounted(() => {
  document.addEventListener('keydown', closeWithEscape)
  window.addEventListener('resize', closeMenuOnDesktop)
  window.addEventListener('scroll', updateScrollState, { passive: true })
  updateScrollState()

  observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visibleEntry?.target?.id) {
        activeSection.value = visibleEntry.target.id
      }
    },
    {
      rootMargin: '-22% 0px -58% 0px',
      threshold: [0.16, 0.32, 0.5],
    },
  )

  observeAvailableSections()

  sectionMutationObserver = new MutationObserver(observeAvailableSections)
  sectionMutationObserver.observe(document.body, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', closeWithEscape)
  window.removeEventListener('resize', closeMenuOnDesktop)
  window.removeEventListener('scroll', updateScrollState)
  observer?.disconnect()
  sectionMutationObserver?.disconnect()
  observedSectionIds.clear()
  document.body.classList.remove('menu-open')
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b transition-all duration-300"
    :class="isScrolled ? 'border-white/10 bg-space/86 shadow-2xl shadow-black/25 backdrop-blur-xl' : 'border-white/6 bg-space/68 backdrop-blur-lg'"
  >
    <nav aria-label="Navegación principal" class="mx-auto flex h-16 w-full max-w-5xl items-center px-5 sm:px-6">
      <a
        href="#inicio"
        aria-label="Andy Orozco, inicio"
        class="group flex shrink-0 items-center gap-3 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
        @click.prevent="scrollToSection('#inicio')"
      >
        <span class="relative grid size-10 place-items-center rounded-full border border-white/12 bg-white/5 p-0.5 shadow-lg shadow-brand-cyan/8 transition-transform duration-300 group-hover:scale-105 group-active:scale-[0.98]">
          <span class="overflow-hidden rounded-full">
            <img
              v-if="!avatarUnavailable"
              :src="profileImageSrc"
              alt="Andy Orozco"
              width="36"
              height="36"
              class="size-9 object-cover object-[center_28%]"
              loading="eager"
              decoding="async"
              @error="avatarUnavailable = true"
            />
            <span v-else class="grid size-9 place-items-center text-xs font-semibold tracking-wide text-brand-cyan">
              AO
            </span>
          </span>
          <span class="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-space bg-brand-cyan motion-safe:animate-[subtle-pulse_2.8s_ease-in-out_infinite]"></span>
        </span>
        <span class="hidden text-sm font-semibold tracking-wide text-foreground sm:block">
          Andy Orozco Castro
        </span>
      </a>

      <div class="ml-auto hidden items-center gap-4 lg:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="group relative px-1 py-3 text-sm font-medium transition-colors duration-300"
          :class="activeSection === link.href.slice(1) ? 'text-brand-cyan' : 'text-muted hover:text-foreground'"
          @click.prevent="scrollToSection(link.href)"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-0 bottom-1 h-px origin-center bg-linear-to-r from-brand-cyan to-brand-violet transition-transform duration-300"
            :class="activeSection === link.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
          ></span>
        </a>
      </div>

      <button
        type="button"
        class="ml-auto grid size-10 place-items-center rounded-xl border border-white/10 bg-white/4 text-foreground shadow-lg shadow-black/10 transition-colors duration-300 hover:border-brand-cyan/35 hover:text-brand-cyan focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        :aria-label="isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg v-if="!isMenuOpen" viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.7">
          <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.7">
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
        class="border-t border-white/5 bg-space/96 px-5 pb-5 pt-3 backdrop-blur-sm lg:hidden"
      >
        <div class="mx-auto flex max-w-5xl flex-col">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors"
            :class="activeSection === link.href.slice(1) ? 'bg-brand-cyan/10 text-brand-cyan' : 'text-muted hover:bg-white/5 hover:text-foreground'"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.label }}
          <span v-if="activeSection === link.href.slice(1)" class="size-1.5 rounded-full bg-brand-cyan"></span>
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
