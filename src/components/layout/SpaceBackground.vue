<template>
  <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-space">
    <div class="starfield stars-soft absolute inset-0"></div>
    <div class="starfield stars-teal absolute inset-0"></div>
    <div class="nebula nebula-violet"></div>
    <div class="nebula nebula-cyan"></div>
    <div class="mist mist-top"></div>
    <div class="mist mist-bottom"></div>
    <div class="vignette absolute inset-0"></div>
  </div>
</template>

<style scoped>
.starfield {
  background-repeat: repeat;
}

.stars-soft {
  background-image:
    radial-gradient(circle, rgba(248, 250, 252, 0.52) 0.8px, transparent 1.15px),
    radial-gradient(circle, rgba(20, 184, 166, 0.48) 1px, transparent 1.35px);
  background-position:
    18px 34px,
    82px 112px;
  background-size:
    172px 172px,
    254px 254px;
  opacity: 0.34;
  mask-image: radial-gradient(ellipse at 50% 18%, black 6%, transparent 76%);
  animation: drift-stars 38s ease-in-out infinite alternate;
}

.stars-teal {
  background-image:
    radial-gradient(circle, rgba(45, 212, 191, 0.38) 0.9px, transparent 1.25px),
    radial-gradient(circle, rgba(56, 189, 248, 0.28) 0.8px, transparent 1.2px);
  background-position:
    64px 92px,
    148px 42px;
  background-size:
    292px 292px,
    348px 348px;
  opacity: 0.22;
  mask-image: radial-gradient(ellipse at 58% 22%, black, transparent 72%);
  animation: drift-warm-stars 45s ease-in-out infinite alternate;
}

.nebula {
  position: absolute;
  border-radius: 9999px;
  filter: blur(92px);
}

.nebula-violet {
  left: -9rem;
  top: 12%;
  width: min(45rem, 70vw);
  height: 35rem;
  background: rgba(20, 184, 166, 0.12);
  transform: rotate(-18deg);
  animation: float-violet 22s ease-in-out infinite alternate;
}

.nebula-cyan {
  right: -12rem;
  top: -6rem;
  width: min(43rem, 68vw);
  height: 33rem;
  background: rgba(45, 212, 191, 0.09);
  transform: rotate(14deg);
  animation: float-coral 25s ease-in-out infinite alternate;
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
  background: linear-gradient(110deg, transparent, rgba(20, 184, 166, 0.08), rgba(56, 189, 248, 0.04), transparent);
}

.mist-bottom {
  bottom: 8%;
  right: 14%;
  height: 12rem;
  width: 42rem;
  max-width: 70vw;
  border-radius: 55% 45% 57% 43%;
  background: linear-gradient(110deg, transparent, rgba(45, 212, 191, 0.05), rgba(56, 189, 248, 0.04), transparent);
}

.vignette {
  background:
    radial-gradient(circle at 52% 15%, transparent 0%, rgba(8, 11, 16, 0.16) 44%, #080b10 86%),
    linear-gradient(to bottom, transparent, rgba(8, 11, 16, 0.5) 82%, #080b10 100%);
}

@keyframes drift-stars {
  to {
    transform: translate3d(10px, -10px, 0);
  }
}

@keyframes drift-warm-stars {
  to {
    transform: translate3d(-9px, 13px, 0);
  }
}

@keyframes float-violet {
  to {
    opacity: 0.72;
    transform: translate3d(22px, -12px, 0) rotate(-14deg) scale(1.08);
  }
}

@keyframes float-coral {
  to {
    opacity: 0.72;
    transform: translate3d(-22px, 12px, 0) rotate(10deg) scale(1.07);
  }
}

@media (max-width: 640px) {
  .nebula {
    filter: blur(86px);
  }

  .nebula-violet,
  .nebula-cyan {
    width: 24rem;
    height: 21rem;
  }

  .mist {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .starfield,
  .nebula {
    animation: none;
  }
}
</style>
