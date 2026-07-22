<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const code = `const developer = {
  name: "Andy Orozco",
  role: "Full Stack Developer",
  stack: ["Laravel", "Vue", "MySQL"],
  available: true
}`

const typedCode = ref('')
const isComplete = ref(false)
let typingTimer
let restartTimer

const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const clearTimers = () => {
  window.clearTimeout(typingTimer)
  window.clearTimeout(restartTimer)
}

const typeCode = (index = 0) => {
  if (index >= code.length) {
    isComplete.value = true
    restartTimer = window.setTimeout(() => {
      typedCode.value = ''
      isComplete.value = false
      typeCode()
    }, 3200)
    return
  }

  typedCode.value += code[index]
  typingTimer = window.setTimeout(() => typeCode(index + 1), 36)
}

onMounted(() => {
  if (reduceMotion) {
    typedCode.value = code
    isComplete.value = true
    return
  }

  typeCode()
})

onBeforeUnmount(() => {
  clearTimers()
})
</script>

<template>
  <div class="premium-card premium-glass overflow-hidden rounded-[1.35rem] transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/25 hover:shadow-brand-cyan/10">
    <div class="relative flex items-center gap-2 border-b border-white/8 bg-white/[0.025] px-4 py-3">
      <div class="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-brand-cyan/45 to-transparent"></div>
      <span class="size-2 rounded-full bg-red-400"></span>
      <span class="size-2 rounded-full bg-brand-amber"></span>
      <span class="size-2 rounded-full bg-brand-cyan"></span>
      <span class="ml-2 text-[0.66rem] text-muted">developer.js</span>
    </div>

    <pre class="min-h-[10rem] overflow-hidden whitespace-pre-wrap px-4 py-4 font-mono text-[0.68rem] leading-relaxed text-slate-300 sm:text-[0.74rem]"><code>{{ typedCode }}</code><span
      v-if="!reduceMotion"
      class="ml-0.5 inline-block h-3.5 w-1 translate-y-0.5 animate-pulse bg-brand-cyan align-middle"
      :class="isComplete ? 'opacity-70' : 'opacity-100'"
    ></span></pre>
  </div>
</template>
