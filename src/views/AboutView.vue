<script setup>
import AboutSection from '../components/sections/AboutSection.vue'
import MotionReveal from '../components/ui/MotionReveal.vue'
import { certifications } from '../data/certifications'
</script>

<template>
  <div class="pt-20">
    <AboutSection />

    <section class="relative px-6 pb-16 sm:pb-24 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <MotionReveal as="header" class="mb-8 max-w-2xl">
          <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Formación y reconocimientos</p>
          <h2 class="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">Aprendizajes que respaldan mi proceso</h2>
        </MotionReveal>

        <div class="grid gap-4 md:grid-cols-3">
          <MotionReveal
            v-for="(certification, index) in certifications"
            :key="certification.id"
            as="article"
            class="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/30"
            :delay="index * 0.07"
          >
            <div class="mb-4 flex items-center justify-between gap-3">
              <span class="rounded-full border border-brand-violet/25 bg-brand-violet/10 px-3 py-1 text-xs font-medium text-brand-magenta">
                {{ certification.type }}
              </span>
              <span class="text-sm text-muted">{{ certification.year }}</span>
            </div>
            <h3 class="text-base font-medium text-foreground">{{ certification.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-muted">{{ certification.learning }}</p>
          </MotionReveal>
        </div>
      </div>
    </section>
  </div>
</template>
