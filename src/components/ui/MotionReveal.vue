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
  x: {
    type: Number,
    default: 0,
  },
  scale: {
    type: Number,
    default: 0.98,
  },
  blur: {
    type: Number,
    default: 0,
  },
})

const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const initialMotion = computed(() => {
  if (reduceMotion) {
    return { opacity: 1, x: 0, y: 0, scale: 1 }
  }

  const motion = {
    opacity: 0,
    x: props.x,
    y: props.y,
    scale: props.scale,
  }

  if (props.blur > 0) {
    motion.filter = `blur(${props.blur}px)`
  }

  return motion
})

const visibleMotion = computed(() => {
  if (reduceMotion) {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 1 },
    }
  }

  const motion = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 105,
      damping: 20,
      mass: 0.5,
      delay: props.delay,
    },
  }

  if (props.blur > 0) {
    motion.filter = 'blur(0px)'
  }

  return motion
})
</script>

<template>
  <component :is="as" v-motion :initial="initialMotion" :visible-once="visibleMotion" v-bind="$attrs">
    <slot />
  </component>
</template>
