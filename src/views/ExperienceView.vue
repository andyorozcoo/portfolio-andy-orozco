<script setup>
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import MotionReveal from '../components/ui/MotionReveal.vue'

const achievements = [
  { title: 'Liderazgo', description: 'Apoyo activo en actividades y espacios de participación estudiantil.' },
  { title: 'Disciplina', description: 'Constancia dentro de los compromisos deportivos y universitarios.' },
  { title: 'Organización', description: 'Colaboración en logística de eventos, entrenamientos y convivios.' },
  { title: 'Convivencia universitaria', description: 'Promoción de comunidad, integración y trabajo en equipo.' },
]
</script>

<template>
  <div class="pt-20">
    <ExperienceSection />

    <section class="relative px-6 pb-16 sm:pb-24 lg:px-8">
      <MotionReveal class="mx-auto max-w-6xl rounded-3xl border border-brand-violet/16 bg-white/2 p-5 sm:p-8">
        <MotionReveal as="header" class="mb-7 max-w-2xl">
          <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Logros relacionados</p>
          <h2 class="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">Más allá del desarrollo</h2>
        </MotionReveal>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MotionReveal
            v-for="(achievement, index) in achievements"
            :key="achievement.title"
            as="article"
            class="rounded-xl border border-white/7 bg-space/38 p-4 transition-colors duration-300 hover:border-brand-magenta/30"
            :delay="0.08 + index * 0.06"
          >
            <h3 class="text-base font-medium text-foreground">{{ achievement.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-muted">{{ achievement.description }}</p>
          </MotionReveal>
        </div>
      </MotionReveal>
    </section>
  </div>
</template>
