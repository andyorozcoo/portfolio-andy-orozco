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
    id: 'diplomado-sistemas',
    icon: '🎓',
    title: 'Diplomado en Ingeniería en Sistemas',
    description: 'Formación académica en desarrollo de software, bases de datos, arquitectura y resolución de problemas tecnológicos.',
    year: 'Formación académica',
    image: `${import.meta.env.BASE_URL}images/about/diplomado-sistemas.jpg`,
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
    <div class="absolute -left-28 top-28 -z-10 size-80 rounded-full bg-brand-violet/10 blur-[120px]"></div>
    <div class="absolute -right-24 bottom-24 -z-10 size-80 rounded-full bg-brand-magenta/8 blur-[120px]"></div>

    <div class="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-10">
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
            Soy Andy Orozco Castro, desarrollador full stack en formación y estudiante de Ingeniería en Sistemas de
            Información en la Universidad Nacional de Costa Rica.
          </p>
          <p class="mt-5 text-base leading-relaxed text-muted">
            Mi trayectoria combina desarrollo de software, participación universitaria, trabajo colaborativo y formación
            técnica orientada a construir soluciones funcionales y bien estructuradas.
          </p>
        </div>
      </MotionReveal>

      <section class="grid gap-5">
        <MotionReveal
          v-for="(card, index) in aboutCards"
          :key="card.id"
          as="article"
          class="group overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/2.5 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/35 hover:shadow-brand-magenta/10 sm:grid sm:grid-cols-[0.92fr_1.08fr]"
          :delay="index * 0.08"
        >
          <div class="relative min-h-56 overflow-hidden bg-space/70 sm:min-h-full">
            <img
              v-if="hasImage(card.id)"
              :src="card.image"
              :alt="card.title"
              class="h-full min-h-56 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
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
            <div class="absolute inset-0 bg-linear-to-t from-space/45 via-transparent to-transparent"></div>
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

            <button
              type="button"
              class="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-brand-violet/30 bg-brand-violet/8 px-4 py-2 text-xs font-medium text-brand-magenta transition-all duration-300 hover:border-brand-magenta/45 hover:bg-brand-magenta/10"
            >
              Ver credencial
              <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8" />
              </svg>
            </button>
          </div>
        </MotionReveal>
      </section>
    </div>
  </main>
</template>
