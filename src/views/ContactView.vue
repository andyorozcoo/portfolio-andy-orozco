<script setup>
import ContactSection from '../components/sections/ContactSection.vue'
import MotionReveal from '../components/ui/MotionReveal.vue'

const opportunities = [
  'Prácticas profesionales',
  'Proyectos colaborativos',
  'Oportunidades junior',
  'Freelance pequeños o académicos',
]
</script>

<template>
  <div class="pt-20">
    <ContactSection />

    <section class="px-6 pb-16 sm:pb-24 lg:px-8">
      <MotionReveal class="mx-auto max-w-5xl rounded-3xl border border-brand-violet/18 bg-white/2.5 p-6 sm:p-9">
        <div class="grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Disponible para</p>
            <h2 class="mt-3 text-2xl font-semibold text-foreground">Nuevas oportunidades</h2>
            <p class="mt-4 text-sm leading-relaxed text-muted">
              Me interesa aprender, aportar y crecer en proyectos donde la tecnología resuelva necesidades reales.
            </p>
          </div>

          <ul class="grid gap-3 sm:grid-cols-2">
            <MotionReveal
              v-for="(opportunity, index) in opportunities"
              :key="opportunity"
              as="li"
              class="flex items-center gap-3 rounded-xl border border-white/7 bg-space/40 p-4 text-sm text-foreground"
              :delay="index * 0.06"
            >
              <span class="size-2 shrink-0 rounded-full bg-brand-magenta"></span>
              {{ opportunity }}
            </MotionReveal>
          </ul>
        </div>
      </MotionReveal>
    </section>
  </div>
</template>
