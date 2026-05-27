<script setup>
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  as: {
    type: String,
    default: 'div',
  },
  delay: {
    type: Number,
    default: 0,
  },
  y: {
    type: Number,
    default: 22,
  },
  scale: {
    type: Number,
    default: 0.98,
  },
})

const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const initialMotion = computed(() => {
  if (reduceMotion) {
    return { opacity: 1, y: 0, scale: 1 }
  }

  return {
    opacity: 0,
    y: props.y,
    scale: props.scale,
  }
})

const visibleMotion = computed(() => {
  if (reduceMotion) {
    return {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1 },
    }
  }

  return {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 22,
      mass: 0.45,
      delay: props.delay,
    },
  }
})
</script>

<template>
  <component :is="as" v-motion :initial="initialMotion" :visible-once="visibleMotion" v-bind="$attrs">
    <slot />
  </component>
</template>
