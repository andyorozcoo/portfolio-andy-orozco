<script setup>
import { ref } from 'vue'
import MotionReveal from '../components/ui/MotionReveal.vue'

const failedImages = ref([])

const aboutCards = [
  {
    id: 'estudiante-merito',
    icon: '🏆',
    title: 'Estudiante Mérito',
    description: 'Reconocimiento por desempeño, compromiso y participación destacada en el área deportiva universitaria.',
    year: '2025',
    image: `${import.meta.env.BASE_URL}images/about/estudiante-merito.jpg`,
  },
  {
    id: 'ingenieria-sistemas',
    icon: '🎓',
    title: 'Ingeniería en Sistemas',
    description: 'Formación universitaria orientada al desarrollo de software, bases de datos, lógica de negocio y soluciones digitales.',
    year: 'En curso',
    image: `${import.meta.env.BASE_URL}images/about/ingenieria-sistemas.jpg`,
  },
  {
    id: 'scrum-certified',
    icon: '📜',
    title: 'Scrum Fundamentals Certified',
    description: 'Certificación enfocada en fundamentos ágiles, roles, eventos y principios Scrum aplicados a proyectos de software.',
    year: '2026',
    image: `${import.meta.env.BASE_URL}images/about/scrum-certified.jpg`,
  },
]

const markImageAsFailed = (id) => {
  if (!failedImages.value.includes(id)) {
    failedImages.value = [...failedImages.value, id]
  }
}

const hasImage = (id) => !failedImages.value.includes(id)
</script>

<template>
  <main class="relative overflow-hidden px-6 pb-16 pt-28 sm:pb-24 lg:px-8">
    <div class="absolute -left-28 top-28 -z-10 size-96 rounded-full bg-brand-violet/10 blur-[140px]"></div>
    <div class="absolute -right-24 bottom-24 -z-10 size-96 rounded-full bg-brand-magenta/8 blur-[140px]"></div>

    <div class="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
      <MotionReveal as="section" class="lg:sticky lg:top-28">
        <p class="text-sm font-semibold uppercase tracking-[0.34em] text-brand-magenta">Sobre mí</p>
        <h1 class="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Más allá del código
        </h1>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Formación, reconocimientos y experiencias que han contribuido a mi crecimiento profesional.
        </p>

        <div class="mt-8 rounded-[1.75rem] border border-brand-violet/20 bg-linear-to-br from-[#18181b]/70 to-space/60 p-6 shadow-xl shadow-brand-violet/5 backdrop-blur-xl sm:p-8">
          <p class="text-base leading-relaxed text-muted sm:text-lg">
            Soy Andy Orozco Castro, desarrollador full stack en crecimiento, con una trayectoria universitaria marcada
            por el desarrollo de software, la participación institucional y experiencias reales que me han permitido
            fortalecer criterio técnico, disciplina y visión profesional.
          </p>
          <p class="mt-5 text-base leading-relaxed text-muted">
            Mi perfil combina formación en Ingeniería en Sistemas, participación activa en la Universidad Nacional y
            certificaciones que respaldan mi interés por construir soluciones útiles, ordenadas y conectadas con
            necesidades reales.
          </p>
        </div>
      </MotionReveal>

      <section class="grid gap-5">
        <MotionReveal
          v-for="(card, index) in aboutCards"
          :key="card.id"
          as="article"
          class="group overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/2.5 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/35 hover:shadow-brand-magenta/10 sm:grid sm:grid-cols-[0.9fr_1.1fr]"
          :delay="index * 0.08"
        >
          <div class="relative min-h-56 overflow-hidden bg-space/70 sm:min-h-full">
            <img
              v-if="hasImage(card.id)"
              :src="card.image"
              :alt="card.title"
              class="h-full min-h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              decoding="async"
              @error="markImageAsFailed(card.id)"
            />
            <div
              v-else
              class="grid h-full min-h-56 place-items-center bg-[radial-gradient(circle_at_35%_20%,rgba(124,58,237,0.28),transparent_34%),radial-gradient(circle_at_75%_80%,rgba(236,72,153,0.22),transparent_36%)]"
            >
              <div class="grid size-20 place-items-center rounded-3xl border border-brand-magenta/25 bg-space/65 text-4xl shadow-2xl shadow-brand-magenta/10">
                {{ card.icon }}
              </div>
            </div>
            <div class="absolute inset-0 bg-linear-to-t from-space/50 via-transparent to-transparent"></div>
          </div>

          <div class="flex flex-col justify-between p-5 sm:p-6">
            <div>
              <div class="flex items-center justify-between gap-4">
                <span class="grid size-12 place-items-center rounded-2xl border border-brand-violet/25 bg-brand-violet/10 text-2xl">
                  {{ card.icon }}
                </span>
                <span class="rounded-full border border-brand-magenta/25 bg-brand-magenta/8 px-3 py-1 text-xs font-medium text-brand-magenta">
                  {{ card.year }}
                </span>
              </div>
              <h2 class="mt-5 text-xl font-semibold text-foreground sm:text-2xl">{{ card.title }}</h2>
              <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">{{ card.description }}</p>
            </div>
            <span class="mt-6 h-px w-full bg-linear-to-r from-brand-violet/50 via-brand-magenta/35 to-transparent"></span>
          </div>
        </MotionReveal>
      </section>
    </div>
  </main>
</template>
