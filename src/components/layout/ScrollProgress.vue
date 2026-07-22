<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const progress = ref(0)
let ticking = false

const updateProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight

  progress.value = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0
  ticking = false
}

const handleScroll = () => {
  if (ticking) {
    return
  }

  ticking = true
  window.requestAnimationFrame(updateProgress)
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-[60] h-px bg-transparent" aria-hidden="true">
    <div
      class="h-full origin-left bg-linear-to-r from-brand-cyan via-brand-blue to-brand-violet shadow-[0_0_18px_rgba(34,211,238,0.36)] transition-transform duration-150 ease-out"
      :style="{ transform: `scaleX(${progress})` }"
    ></div>
  </div>
</template>
