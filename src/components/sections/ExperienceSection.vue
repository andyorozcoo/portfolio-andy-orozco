<script setup>
import MotionReveal from '../ui/MotionReveal.vue'
import ExperienceCard from '../ui/ExperienceCard.vue'
import { experiences } from '../../data/experience'
</script>

<template>
  <section id="experiencia" class="relative scroll-mt-20 overflow-hidden py-14 sm:py-20">
    <div class="absolute -left-32 top-1/3 -z-10 size-96 rounded-full bg-brand-magenta/6 blur-[140px]"></div>
    <div class="absolute -right-24 bottom-20 -z-10 size-80 rounded-full bg-brand-violet/7 blur-[130px]"></div>

    <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <MotionReveal as="header" class="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
        <p class="mb-4 text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Experiencia</p>
        <h2 class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Experiencia, liderazgo y
          <span class="bg-linear-to-r from-brand-violet to-brand-magenta bg-clip-text text-transparent">
            proyectos reales
          </span>
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Mi experiencia combina desarrollo de software, trabajo colaborativo, metodologías ágiles y participación
          activa en espacios universitarios.
        </p>
      </MotionReveal>

      <div class="relative mx-auto max-w-6xl">
        <div
          class="absolute bottom-8 left-5 top-8 hidden w-px bg-linear-to-b from-brand-violet/55 via-brand-magenta/45 to-brand-violet/5 sm:block"
        ></div>

        <div class="space-y-5 sm:space-y-7 sm:pl-14">
          <MotionReveal
            v-for="(experience, index) in experiences"
            :key="experience.id"
            class="relative"
            :delay="index * 0.1"
          >
            <div
              class="absolute -left-11 top-8 z-10 hidden size-5 items-center justify-center rounded-full border border-brand-magenta/40 bg-space sm:flex"
            >
              <span class="size-2 rounded-full bg-linear-to-br from-brand-violet to-brand-magenta"></span>
            </div>

            <ExperienceCard :experience="experience" />
          </MotionReveal>
        </div>
      </div>
    </div>
  </section>
</template>
