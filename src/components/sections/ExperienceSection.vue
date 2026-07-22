<script setup>
import MotionReveal from '../ui/MotionReveal.vue'
import ExperienceCard from '../ui/ExperienceCard.vue'
import { experiences } from '../../data/experience'
</script>

<template>
  <section id="experiencia" class="section-shell">
    <div class="section-container">
      <MotionReveal as="header" class="mb-7 max-w-2xl">
        <p class="section-eyebrow">Experiencia</p>
        <h2 class="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
          Trayectoria universitaria y liderazgo
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Experiencia práctica en organización, acompañamiento estudiantil y participación activa en espacios
          universitarios.
        </p>
      </MotionReveal>

      <div class="relative">
        <div
          class="absolute bottom-5 left-4 top-5 hidden w-px bg-linear-to-b from-brand-cyan/45 via-brand-violet/25 to-transparent sm:block"
        ></div>

        <div class="sm:pl-10">
          <MotionReveal
            v-for="(experience, index) in experiences"
            :key="experience.id"
            class="relative"
            :delay="index * 0.08"
          >
            <div
               class="absolute -left-[2.05rem] top-7 z-10 hidden size-4 items-center justify-center rounded-full border border-brand-cyan/45 bg-space shadow-lg shadow-brand-cyan/20 sm:flex"
            >
              <span class="size-1.5 rounded-full bg-brand-cyan motion-safe:animate-[subtle-pulse_3s_ease-in-out_infinite]"></span>
            </div>

            <ExperienceCard :experience="experience" />
          </MotionReveal>
        </div>
      </div>
    </div>
  </section>
</template>
