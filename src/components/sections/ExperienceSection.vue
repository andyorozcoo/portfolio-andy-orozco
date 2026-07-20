<script setup>
import MotionReveal from '../ui/MotionReveal.vue'
import ExperienceCard from '../ui/ExperienceCard.vue'
import { experiences } from '../../data/experience'
</script>

<template>
  <section id="experiencia" class="relative scroll-mt-20 px-5 py-10 sm:px-6 sm:py-12">
    <div class="mx-auto w-full max-w-5xl">
      <MotionReveal as="header" class="mb-7 max-w-2xl">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-magenta">Experiencia</p>
        <h2 class="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Trayectoria universitaria y liderazgo
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Experiencia práctica en organización, acompañamiento estudiantil y participación activa en espacios
          universitarios.
        </p>
      </MotionReveal>

      <div class="relative">
        <div
          class="absolute bottom-5 left-4 top-5 hidden w-px bg-linear-to-b from-brand-violet/45 via-brand-magenta/25 to-transparent sm:block"
        ></div>

        <div class="sm:pl-10">
          <MotionReveal
            v-for="(experience, index) in experiences"
            :key="experience.id"
            class="relative"
            :delay="index * 0.08"
          >
            <div
              class="absolute -left-[2.05rem] top-7 z-10 hidden size-4 items-center justify-center rounded-full border border-brand-violet/45 bg-space shadow-lg shadow-brand-violet/20 sm:flex"
            >
              <span class="size-1.5 rounded-full bg-brand-violet motion-safe:animate-[subtle-pulse_3s_ease-in-out_infinite]"></span>
            </div>

            <ExperienceCard :experience="experience" />
          </MotionReveal>
        </div>
      </div>
    </div>
  </section>
</template>
