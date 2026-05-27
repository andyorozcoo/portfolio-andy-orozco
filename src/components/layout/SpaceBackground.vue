<template>
  <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-space">
    <div class="stars stars-small absolute inset-0 opacity-55"></div>
    <div class="stars stars-wide absolute inset-0 opacity-40"></div>
    <div class="glow glow-violet"></div>
    <div class="glow glow-magenta"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,transparent_0%,#09090f_72%)]"></div>
  </div>
</template>

<style scoped>
.stars {
  background-repeat: repeat;
}

.stars-small {
  background-image:
    radial-gradient(circle, rgba(248, 250, 252, 0.72) 1px, transparent 1px),
    radial-gradient(circle, rgba(124, 58, 237, 0.68) 1px, transparent 1px);
  background-position:
    12px 24px,
    64px 78px;
  background-size:
    132px 132px,
    186px 186px;
  mask-image: radial-gradient(ellipse at top, black 4%, transparent 76%);
}

.stars-wide {
  background-image:
    radial-gradient(circle, rgba(248, 250, 252, 0.9) 1px, transparent 1.5px),
    radial-gradient(circle, rgba(236, 72, 153, 0.55) 1px, transparent 1.5px);
  background-position:
    36px 42px,
    132px 96px;
  background-size:
    298px 298px,
    344px 344px;
  mask-image: radial-gradient(ellipse at 50% 10%, black, transparent 68%);
}

.glow {
  position: absolute;
  border-radius: 9999px;
  filter: blur(110px);
}

.glow-violet {
  top: -10rem;
  left: 50%;
  width: min(52rem, 76vw);
  height: 28rem;
  background: rgba(124, 58, 237, 0.3);
  transform: translateX(-62%);
}

.glow-magenta {
  top: 3rem;
  right: -9rem;
  width: min(34rem, 58vw);
  height: 23rem;
  background: rgba(236, 72, 153, 0.16);
}

@media (max-width: 640px) {
  .glow {
    filter: blur(82px);
  }

  .glow-violet {
    width: 24rem;
    height: 22rem;
  }
}
</style>
