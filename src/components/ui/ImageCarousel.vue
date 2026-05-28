<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
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

onMounted(() => {
  updateVisibleCount()
  startAutoplay()
  window.addEventListener('resize', updateVisibleCount)
})

onBeforeUnmount(() => {
  window.clearInterval(autoplayTimer)
  window.removeEventListener('resize', updateVisibleCount)
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
        <img
          v-if="!imageIsUnavailable(item.src)"
          :src="item.src"
          :alt="item.alt"
          class="h-full w-full object-cover object-center transition-transform duration-500 group-hover/photo:scale-105"
          loading="lazy"
          @error="markImageUnavailable(item.src)"
        />

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

        <div class="absolute inset-0 bg-linear-to-t from-space via-space/35 to-transparent"></div>
        <figcaption class="absolute inset-x-0 bottom-0 p-4">
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
  </div>
</template>
