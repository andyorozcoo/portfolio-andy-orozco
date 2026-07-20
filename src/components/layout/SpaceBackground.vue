<template>
  <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-space">
    <div class="starfield stars-soft absolute inset-0"></div>
    <div class="starfield stars-blue absolute inset-0"></div>
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
}

.stars-soft {
  background-image:
    radial-gradient(circle, rgba(248, 250, 252, 0.48) 0.8px, transparent 1.15px),
    radial-gradient(circle, rgba(96, 165, 250, 0.42) 1px, transparent 1.35px);
  background-position:
    18px 34px,
    82px 112px;
  background-size:
    172px 172px,
    254px 254px;
  opacity: 0.32;
  mask-image: radial-gradient(ellipse at 50% 18%, black 6%, transparent 76%);
  animation: drift-stars 38s ease-in-out infinite alternate;
}

.stars-blue {
  background-image:
    radial-gradient(circle, rgba(167, 139, 250, 0.34) 0.9px, transparent 1.25px),
    radial-gradient(circle, rgba(96, 165, 250, 0.24) 0.8px, transparent 1.2px);
  background-position:
    64px 92px,
    148px 42px;
  background-size:
    292px 292px,
    348px 348px;
  opacity: 0.2;
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
  background: rgba(96, 165, 250, 0.12);
  transform: rotate(-18deg);
  animation: aurora-shift 24s ease-in-out infinite alternate;
}

.nebula-lilac {
  right: -12rem;
  top: -6rem;
  width: min(43rem, 68vw);
  height: 33rem;
  background: rgba(167, 139, 250, 0.1);
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
  background: linear-gradient(110deg, transparent, rgba(96, 165, 250, 0.08), rgba(167, 139, 250, 0.04), transparent);
}

.mist-bottom {
  bottom: 8%;
  right: 14%;
  height: 12rem;
  width: 42rem;
  max-width: 70vw;
  border-radius: 55% 45% 57% 43%;
  background: linear-gradient(110deg, transparent, rgba(96, 165, 250, 0.05), rgba(167, 139, 250, 0.05), transparent);
}

.vignette {
  background:
    radial-gradient(circle at 52% 15%, transparent 0%, rgba(7, 10, 18, 0.16) 44%, #070a12 86%),
    linear-gradient(to bottom, transparent, rgba(7, 10, 18, 0.52) 82%, #070a12 100%);
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
}

@media (prefers-reduced-motion: reduce) {
  .starfield,
  .nebula {
    animation: none;
  }
}
</style>
