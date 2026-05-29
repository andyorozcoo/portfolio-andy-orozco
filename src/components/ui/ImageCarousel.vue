<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import MotionReveal from './MotionReveal.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 4500,
  },
})

const currentIndex = ref(0)
const visibleCount = ref(1)
const isPaused = ref(false)
const isLightboxOpen = ref(false)
const lightboxIndex = ref(0)
const unavailableImages = ref(new Set())
const touchStartX = ref(0)
let autoplayTimer

const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const maxIndex = computed(() => Math.max(props.items.length - 1, 0))

const visibleItems = computed(() => {
  if (!props.items.length) {
    return []
  }

  return Array.from({ length: Math.min(visibleCount.value, props.items.length) }, (_, offset) => {
    const index = (currentIndex.value + offset) % props.items.length
    return props.items[index]
  })
})

const activeLightboxItem = computed(() => props.items[lightboxIndex.value])

const updateVisibleCount = () => {
  if (typeof window === 'undefined') {
    return
  }

  if (window.innerWidth >= 1280) {
    visibleCount.value = 3
    return
  }

  if (window.innerWidth >= 768) {
    visibleCount.value = 2
    return
  }

  visibleCount.value = 1
}

const goTo = (index) => {
  currentIndex.value = index
}

const goNext = () => {
  currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
}

const goPrevious = () => {
  currentIndex.value = currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1
}

const goNextLightbox = () => {
  lightboxIndex.value = lightboxIndex.value >= maxIndex.value ? 0 : lightboxIndex.value + 1
}

const goPreviousLightbox = () => {
  lightboxIndex.value = lightboxIndex.value <= 0 ? maxIndex.value : lightboxIndex.value - 1
}

const openLightbox = (src) => {
  const index = props.items.findIndex((item) => item.src === src)

  if (index === -1) {
    return
  }

  lightboxIndex.value = index
  isLightboxOpen.value = true
  isPaused.value = true
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  isPaused.value = false
}

const startAutoplay = () => {
  if (reduceMotion || props.items.length <= 1) {
    return
  }

  window.clearInterval(autoplayTimer)
  autoplayTimer = window.setInterval(() => {
    if (!isPaused.value) {
      goNext()
    }
  }, props.interval)
}

const markImageUnavailable = (src) => {
  const images = new Set(unavailableImages.value)
  images.add(src)
  unavailableImages.value = images
}

const imageIsUnavailable = (src) => unavailableImages.value.has(src)

const handleTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX
}

const handleTouchEnd = (event) => {
  const distance = touchStartX.value - event.changedTouches[0].clientX

  if (Math.abs(distance) < 40) {
    return
  }

  if (distance > 0) {
    goNext()
    return
  }

  goPrevious()
}

const handleKeydown = (event) => {
  if (!isLightboxOpen.value) {
    return
  }

  if (event.key === 'Escape') {
    closeLightbox()
  }

  if (event.key === 'ArrowRight') {
    goNextLightbox()
  }

  if (event.key === 'ArrowLeft') {
    goPreviousLightbox()
  }
}

watch(isLightboxOpen, (isOpen) => {
  document.body.classList.toggle('menu-open', isOpen)
})

onMounted(() => {
  updateVisibleCount()
  startAutoplay()
  window.addEventListener('resize', updateVisibleCount)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.clearInterval(autoplayTimer)
  window.removeEventListener('resize', updateVisibleCount)
  document.removeEventListener('keydown', handleKeydown)
  document.body.classList.remove('menu-open')
})
</script>

<template>
  <div
    class="relative overflow-hidden rounded-2xl border border-brand-violet/18 bg-white/2.5 p-3 shadow-xl shadow-brand-violet/5 backdrop-blur-xl sm:p-4"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
    @focusin="isPaused = true"
    @focusout="isPaused = false"
    @touchstart.passive="handleTouchStart"
    @touchend.passive="handleTouchEnd"
  >
    <div class="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-brand-magenta/45 to-transparent"></div>

    <div class="mb-4 flex items-center justify-between gap-3">
      <p class="text-xs font-medium uppercase tracking-[0.22em] text-brand-magenta">Galería</p>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="grid size-9 place-items-center rounded-full border border-white/10 bg-space/65 text-muted transition-all duration-300 hover:border-brand-magenta/40 hover:text-brand-magenta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-violet"
          aria-label="Imagen anterior"
          @click="goPrevious"
        >
          <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15 6-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          class="grid size-9 place-items-center rounded-full border border-white/10 bg-space/65 text-muted transition-all duration-300 hover:border-brand-magenta/40 hover:text-brand-magenta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-violet"
          aria-label="Imagen siguiente"
          @click="goNext"
        >
          <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>

    <TransitionGroup
      tag="div"
      class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3"
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="translate-y-3 opacity-0 scale-98"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="hidden"
    >
      <MotionReveal
        v-for="(item, index) in visibleItems"
        :key="`${currentIndex}-${item.src}`"
        as="figure"
        class="group/photo relative h-56 overflow-hidden rounded-xl border border-brand-violet/15 bg-[#12121b] transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/40 sm:h-60 md:h-52 xl:h-56"
        :delay="index * 0.06"
        y="14"
      >
        <button
          v-if="!imageIsUnavailable(item.src)"
          type="button"
          class="h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-brand-magenta"
          :aria-label="`Abrir imagen: ${item.title}`"
          @click="openLightbox(item.src)"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            class="h-full w-full object-cover object-center transition-transform duration-500 group-hover/photo:scale-105"
            loading="lazy"
            decoding="async"
            @error="markImageUnavailable(item.src)"
          />
        </button>

        <div
          v-else
          class="flex h-full w-full flex-col items-center justify-center bg-linear-to-br from-brand-violet/15 via-[#18181b] to-brand-magenta/10 p-5 text-center"
        >
          <svg viewBox="0 0 24 24" class="size-9 text-brand-magenta/65" fill="none" stroke="currentColor" stroke-width="1.4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 17 9 12l3.5 3.5 2.5-3 5 4.5M6.5 5h11A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5v-11A1.5 1.5 0 0 1 6.5 5Z" />
            <path stroke-linecap="round" d="M9 9h.01" />
          </svg>
          <p class="mt-3 text-xs font-medium text-foreground">Imagen pendiente</p>
        </div>

        <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-space via-space/35 to-transparent"></div>
        <figcaption class="pointer-events-none absolute inset-x-0 bottom-0 p-4">
          <p class="text-sm font-semibold text-foreground">{{ item.title }}</p>
          <p v-if="item.description" class="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
            {{ item.description }}
          </p>
        </figcaption>
      </MotionReveal>
    </TransitionGroup>

    <div class="mt-4 flex flex-wrap justify-center gap-2">
      <button
        v-for="(item, index) in items"
        :key="item.src"
        type="button"
        class="h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-violet"
        :class="currentIndex === index ? 'w-7 bg-linear-to-r from-brand-violet to-brand-magenta' : 'w-2 bg-white/18 hover:bg-brand-magenta/45'"
        :aria-label="`Ir a imagen ${index + 1}`"
        :aria-current="currentIndex === index"
        @click="goTo(index)"
      ></button>
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
          v-if="isLightboxOpen && activeLightboxItem"
          class="fixed inset-0 z-[90] flex items-center justify-center bg-space/88 p-4 backdrop-blur-xl sm:p-6"
          role="dialog"
          aria-modal="true"
          :aria-label="activeLightboxItem.title"
          @click.self="closeLightbox"
        >
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.20),transparent_32%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.16),transparent_30%)]"></div>

          <button
            type="button"
            class="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full border border-white/10 bg-space/75 text-foreground shadow-lg shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:border-brand-magenta/45 hover:text-brand-magenta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-magenta sm:right-6 sm:top-6"
            aria-label="Cerrar imagen"
            @click="closeLightbox"
          >
            <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <button
            type="button"
            class="absolute left-3 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-space/75 text-foreground shadow-lg shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:border-brand-magenta/45 hover:text-brand-magenta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-magenta sm:left-6"
            aria-label="Imagen anterior"
            @click="goPreviousLightbox"
          >
            <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="m15 6-6 6 6 6" />
            </svg>
          </button>

          <button
            type="button"
            class="absolute right-3 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-space/75 text-foreground shadow-lg shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:border-brand-magenta/45 hover:text-brand-magenta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-magenta sm:right-6"
            aria-label="Imagen siguiente"
            @click="goNextLightbox"
          >
            <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9 6 6 6-6 6" />
            </svg>
          </button>

          <Transition
            mode="out-in"
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="translate-y-3 opacity-0 scale-98"
            enter-to-class="translate-y-0 opacity-100 scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100 scale-100"
            leave-to-class="-translate-y-2 opacity-0 scale-98"
          >
            <figure
              :key="activeLightboxItem.src"
              class="relative z-10 w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-brand-violet/20 bg-linear-to-br from-[#18181b]/85 to-space/90 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-4"
            >
              <div class="relative flex max-h-[78dvh] min-h-[18rem] items-center justify-center overflow-hidden rounded-[1.25rem] bg-black/30">
                <img
                  :src="activeLightboxItem.src"
                  :alt="activeLightboxItem.alt"
                  class="max-h-[78dvh] w-full object-contain"
                  decoding="async"
                />
              </div>

              <figcaption class="px-2 pb-1 pt-4 sm:px-3">
                <p class="text-base font-semibold text-foreground">{{ activeLightboxItem.title }}</p>
                <p v-if="activeLightboxItem.description" class="mt-1 max-w-3xl text-sm leading-relaxed text-muted">
                  {{ activeLightboxItem.description }}
                </p>
              </figcaption>
            </figure>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
