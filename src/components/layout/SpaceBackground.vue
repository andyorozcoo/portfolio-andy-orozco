<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const parallaxOffset = ref(0)
let ticking = false

const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const updateParallax = () => {
  parallaxOffset.value = window.scrollY * 0.018
  ticking = false
}

const handleScroll = () => {
  if (reduceMotion || ticking) {
    return
  }

  ticking = true
  window.requestAnimationFrame(updateParallax)
}

onMounted(() => {
  if (reduceMotion) {
    return
  }

  updateParallax()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-space"
    :style="{ '--parallax-y': `${parallaxOffset}px` }"
  >
    <div class="premium-grid absolute inset-0"></div>
    <div class="starfield stars-soft absolute inset-0"></div>
    <div class="starfield stars-blue absolute inset-0"></div>
    <div class="constellation constellation-a"></div>
    <div class="constellation constellation-b"></div>
    <div class="nebula nebula-violet"></div>
    <div class="nebula nebula-lilac"></div>
    <div class="mist mist-top"></div>
    <div class="mist mist-bottom"></div>
    <div class="vignette absolute inset-0"></div>
  </div>
</template>

<style scoped>
.starfield {
  background-repeat: repeat;
  will-change: transform;
}

.premium-grid {
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.045) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(to bottom, black 0%, transparent 78%);
  opacity: 0.35;
}

.stars-soft {
  background-image:
    radial-gradient(circle, rgba(248, 250, 252, 0.34) 0.8px, transparent 1.15px),
    radial-gradient(circle, rgba(34, 211, 238, 0.32) 1px, transparent 1.35px);
  background-position:
    18px 34px,
    82px 112px;
  background-size:
    172px 172px,
    254px 254px;
  opacity: 0.22;
  mask-image: radial-gradient(ellipse at 50% 18%, black 6%, transparent 76%);
  transform: translate3d(0, calc(var(--parallax-y, 0px) * -1), 0);
  animation: drift-stars 38s ease-in-out infinite alternate;
}

.stars-blue {
  background-image:
    radial-gradient(circle, rgba(139, 92, 246, 0.3) 0.9px, transparent 1.25px),
    radial-gradient(circle, rgba(96, 165, 250, 0.2) 0.8px, transparent 1.2px);
  background-position:
    64px 92px,
    148px 42px;
  background-size:
    292px 292px,
    348px 348px;
  opacity: 0.16;
  mask-image: radial-gradient(ellipse at 58% 22%, black, transparent 72%);
  transform: translate3d(0, calc(var(--parallax-y, 0px) * -1.6), 0);
  animation: drift-warm-stars 45s ease-in-out infinite alternate;
}

.constellation {
  position: absolute;
  width: 16rem;
  height: 16rem;
  border-radius: 9999px;
  opacity: 0.18;
  background:
    linear-gradient(35deg, transparent 45%, rgba(34, 211, 238, 0.34) 46%, transparent 47%),
    radial-gradient(circle at 24% 28%, rgba(34, 211, 238, 0.75) 0 1.2px, transparent 1.4px),
    radial-gradient(circle at 68% 46%, rgba(139, 92, 246, 0.7) 0 1.2px, transparent 1.4px),
    radial-gradient(circle at 44% 72%, rgba(248, 250, 252, 0.58) 0 1px, transparent 1.3px);
  filter: blur(0.1px);
  will-change: transform;
}

.constellation-a {
  left: 8%;
  top: 22%;
  transform: translate3d(0, calc(var(--parallax-y, 0px) * -2.2), 0) rotate(-12deg);
  animation: constellation-float 18s ease-in-out infinite alternate;
}

.constellation-b {
  right: 12%;
  bottom: 18%;
  transform: translate3d(0, calc(var(--parallax-y, 0px) * -1.8), 0) rotate(18deg);
  animation: constellation-float 22s ease-in-out infinite alternate-reverse;
}

.nebula {
  position: absolute;
  border-radius: 9999px;
  filter: blur(92px);
  will-change: transform;
}

.nebula-violet {
  left: -9rem;
  top: 12%;
  width: min(45rem, 70vw);
  height: 35rem;
  background: rgba(34, 211, 238, 0.12);
  transform: rotate(-18deg);
  animation: aurora-shift 24s ease-in-out infinite alternate;
}

.nebula-lilac {
  right: -12rem;
  top: -6rem;
  width: min(43rem, 68vw);
  height: 33rem;
  background: rgba(139, 92, 246, 0.11);
  transform: rotate(14deg);
  animation: aurora-shift 28s ease-in-out infinite alternate-reverse;
}

.mist {
  position: absolute;
  filter: blur(56px);
  opacity: 0.4;
}

.mist-top {
  left: 18%;
  top: -4rem;
  height: 17rem;
  width: 52rem;
  max-width: 70vw;
  border-radius: 45% 55% 48% 52%;
  background: linear-gradient(110deg, transparent, rgba(34, 211, 238, 0.08), rgba(139, 92, 246, 0.05), transparent);
}

.mist-bottom {
  bottom: 8%;
  right: 14%;
  height: 12rem;
  width: 42rem;
  max-width: 70vw;
  border-radius: 55% 45% 57% 43%;
  background: linear-gradient(110deg, transparent, rgba(96, 165, 250, 0.05), rgba(34, 211, 238, 0.05), transparent);
}

.vignette {
  background:
    radial-gradient(circle at 52% 15%, transparent 0%, rgba(5, 7, 13, 0.1) 42%, #05070d 88%),
    linear-gradient(to bottom, transparent, rgba(5, 7, 13, 0.46) 76%, #05070d 100%);
}

@keyframes drift-stars {
  to {
    background-position:
      28px 24px,
      92px 102px;
  }
}

@keyframes drift-warm-stars {
  to {
    background-position:
      54px 105px,
      138px 55px;
  }
}

@keyframes constellation-float {
  to {
    opacity: 0.26;
  }
}

@media (max-width: 640px) {
  .nebula {
    filter: blur(86px);
  }

  .nebula-violet,
  .nebula-lilac {
    width: 24rem;
    height: 21rem;
  }

  .mist {
    display: none;
  }

  .constellation {
    opacity: 0.1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .starfield,
  .nebula,
  .constellation {
    animation: none;
  }
}
</style>
