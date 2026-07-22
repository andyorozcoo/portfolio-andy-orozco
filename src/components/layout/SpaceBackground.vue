<template>
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-space"
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
  opacity: 0.18;
  mask-image: radial-gradient(ellipse at 50% 18%, black 6%, transparent 76%);
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
  opacity: 0.12;
  mask-image: radial-gradient(ellipse at 58% 22%, black, transparent 72%);
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
}

.constellation-a {
  left: 8%;
  top: 22%;
  transform: rotate(-12deg);
}

.constellation-b {
  right: 12%;
  bottom: 18%;
  transform: rotate(18deg);
}

.nebula {
  position: absolute;
  border-radius: 9999px;
  filter: blur(72px);
}

.nebula-violet {
  left: -9rem;
  top: 12%;
  width: min(45rem, 70vw);
  height: 35rem;
  background: rgba(34, 211, 238, 0.12);
  transform: rotate(-18deg);
}

.nebula-lilac {
  right: -12rem;
  top: -6rem;
  width: min(43rem, 68vw);
  height: 33rem;
  background: rgba(139, 92, 246, 0.11);
  transform: rotate(14deg);
}

.mist {
  position: absolute;
  filter: blur(38px);
  opacity: 0.32;
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

@media (max-width: 640px) {
  .nebula {
    filter: blur(52px);
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
    opacity: 0.08;
  }

  .constellation-a,
  .constellation-b {
    transform: none;
  }
}
</style>
