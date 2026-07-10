<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const code = `const developer = {
  name: "Andy Orozco Castro",
  role: "Full Stack Developer",
  education: "Ingeniería en Sistemas",
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
  typingTimer = window.setTimeout(() => typeCode(index + 1), 34)
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
  <div class="overflow-hidden rounded-2xl border border-white/8 bg-space/70 shadow-lg shadow-black/20 backdrop-blur-md">
    <div class="flex items-center gap-2 border-b border-white/8 px-4 py-3">
      <span class="size-2.5 rounded-full bg-brand-magenta"></span>
      <span class="size-2.5 rounded-full bg-brand-amber"></span>
      <span class="size-2.5 rounded-full bg-emerald-400"></span>
      <span class="ml-2 text-[0.68rem] text-muted">developer.js</span>
    </div>

    <pre class="min-h-[10.5rem] overflow-hidden whitespace-pre-wrap px-4 py-4 font-mono text-[0.68rem] leading-relaxed text-muted sm:text-[0.72rem]"><code>{{ typedCode }}</code><span
      v-if="!reduceMotion"
      class="ml-0.5 inline-block h-4 w-1 translate-y-0.5 animate-pulse bg-brand-magenta align-middle"
      :class="isComplete ? 'opacity-70' : 'opacity-100'"
    ></span></pre>
  </div>
</template>
