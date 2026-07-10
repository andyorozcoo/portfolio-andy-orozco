<script setup>
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import MotionReveal from '../components/ui/MotionReveal.vue'

const competencies = [
  {
    title: 'Liderazgo',
    description: 'Apoyo y coordinación en actividades con estudiantes y equipos deportivos.',
  },
  {
    title: 'Disciplina',
    description: 'Constancia en compromisos deportivos, académicos y universitarios.',
  },
  {
    title: 'Organización',
    description: 'Apoyo en logística de eventos, entrenamientos y actividades institucionales.',
  },
  {
    title: 'Convivencia universitaria',
    description: 'Participación en espacios de integración, colaboración y comunidad estudiantil.',
  },
]
</script>

<template>
  <div class="pt-20">
    <ExperienceSection />

    <section class="relative px-6 pb-14 sm:pb-20 lg:px-8">
      <MotionReveal class="mx-auto max-w-6xl rounded-3xl border border-brand-violet/16 bg-white/2 p-5 sm:p-7">
        <MotionReveal as="header" class="mb-6 max-w-2xl">
          <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Logros relacionados</p>
          <h2 class="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">Competencias desarrolladas</h2>
        </MotionReveal>

        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <MotionReveal
            v-for="(competency, index) in competencies"
            :key="competency.title"
            as="article"
            class="rounded-xl border border-white/7 bg-space/38 p-4 transition-colors duration-300 hover:border-brand-magenta/30"
            :delay="0.08 + index * 0.06"
          >
            <h3 class="text-base font-medium text-foreground">{{ competency.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">{{ competency.description }}</p>
          </MotionReveal>
        </div>
      </MotionReveal>
    </section>
  </div>
</template>
