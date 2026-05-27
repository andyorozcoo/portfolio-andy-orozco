<template>
  <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-space">
    <div class="stars stars-small star-drift absolute inset-0"></div>
    <div class="stars stars-wide star-drift-reverse absolute inset-0"></div>
    <div class="stars stars-dust absolute inset-0"></div>
    <div class="nebula nebula-blue"></div>
    <div class="nebula nebula-cyan"></div>
    <div class="nebula nebula-violet"></div>
    <div class="orbit"></div>
    <svg class="constellation" viewBox="0 0 320 240" fill="none">
      <path d="M32 166 98 112l66 24 50-78 66 34" />
      <circle cx="32" cy="166" r="2.5" />
      <circle cx="98" cy="112" r="3" />
      <circle cx="164" cy="136" r="2.5" />
      <circle cx="214" cy="58" r="3.5" />
      <circle cx="280" cy="92" r="2.5" />
    </svg>
    <div class="vignette absolute inset-0"></div>
  </div>
</template>

<style scoped>
.stars {
  background-repeat: repeat;
}

.stars-small {
  background-image:
    radial-gradient(circle, rgba(248, 250, 252, 0.78) 1px, transparent 1.25px),
    radial-gradient(circle, rgba(34, 211, 238, 0.58) 1px, transparent 1.4px);
  background-position:
    12px 24px,
    64px 78px;
  background-size:
    132px 132px,
    186px 186px;
  opacity: 0.58;
  mask-image: radial-gradient(ellipse at top, black 8%, transparent 80%);
}

.stars-wide {
  background-image:
    radial-gradient(circle, rgba(248, 250, 252, 0.95) 1px, transparent 1.6px),
    radial-gradient(circle, rgba(139, 92, 246, 0.62) 1px, transparent 1.6px);
  background-position:
    36px 42px,
    132px 96px;
  background-size:
    298px 298px,
    344px 344px;
  opacity: 0.45;
  mask-image: radial-gradient(ellipse at 50% 10%, black, transparent 68%);
}

.stars-dust {
  background-image: radial-gradient(circle, rgba(34, 211, 238, 0.46) 0.75px, transparent 1px);
  background-position: 24px 18px;
  background-size: 76px 76px;
  opacity: 0.2;
  mask-image: radial-gradient(ellipse at 82% 18%, black, transparent 55%);
}

.star-drift {
  animation: drift-stars 28s ease-in-out infinite alternate;
}

.star-drift-reverse {
  animation: drift-stars-reverse 34s ease-in-out infinite alternate;
}

.nebula {
  position: absolute;
  border-radius: 9999px;
  filter: blur(112px);
}

.nebula-blue {
  left: -10rem;
  top: 4rem;
  width: min(38rem, 62vw);
  height: 30rem;
  background: rgba(37, 99, 235, 0.2);
  animation: breathe-blue 18s ease-in-out infinite alternate;
}

.nebula-cyan {
  right: -8rem;
  top: -5rem;
  width: min(38rem, 62vw);
  height: 29rem;
  background: rgba(34, 211, 238, 0.16);
  animation: breathe-cyan 21s ease-in-out infinite alternate;
}

.nebula-violet {
  bottom: 8%;
  left: 36%;
  width: min(28rem, 48vw);
  height: 20rem;
  background: rgba(139, 92, 246, 0.13);
  animation: breathe-violet 24s ease-in-out infinite alternate;
}

.orbit {
  position: absolute;
  right: -17rem;
  top: 8rem;
  width: 44rem;
  height: 44rem;
  border: 1px solid rgba(34, 211, 238, 0.12);
  border-radius: 9999px;
  box-shadow: inset 0 0 40px rgba(139, 92, 246, 0.05);
  transform: rotate(-28deg);
}

.constellation {
  position: absolute;
  right: clamp(1rem, 7vw, 7rem);
  top: clamp(7rem, 18vh, 13rem);
  width: min(19rem, 34vw);
  opacity: 0.3;
  stroke: rgba(34, 211, 238, 0.4);
  stroke-width: 1;
}

.constellation circle {
  fill: rgba(139, 92, 246, 0.9);
  stroke: none;
}

.vignette {
  background:
    radial-gradient(circle at 70% 12%, transparent 0%, rgba(5, 8, 22, 0.16) 38%, #050816 82%),
    linear-gradient(to bottom, transparent 0%, rgba(5, 8, 22, 0.38) 72%, #050816 100%);
}

@keyframes drift-stars {
  to {
    transform: translate3d(10px, -8px, 0);
  }
}

@keyframes drift-stars-reverse {
  to {
    transform: translate3d(-8px, 10px, 0);
  }
}

@keyframes breathe-blue {
  to {
    opacity: 0.7;
    transform: translate3d(18px, -8px, 0) scale(1.06);
  }
}

@keyframes breathe-cyan {
  to {
    opacity: 0.72;
    transform: translate3d(-18px, 10px, 0) scale(1.08);
  }
}

@keyframes breathe-violet {
  to {
    opacity: 0.7;
    transform: translateY(-14px) scale(1.08);
  }
}

@media (max-width: 640px) {
  .nebula {
    filter: blur(86px);
  }

  .nebula-blue,
  .nebula-cyan {
    width: 23rem;
    height: 20rem;
  }

  .orbit,
  .constellation {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .star-drift,
  .star-drift-reverse,
  .nebula {
    animation: none;
  }
}
</style>
