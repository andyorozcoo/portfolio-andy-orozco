<script setup>
import MotionReveal from '../ui/MotionReveal.vue'

const values = [
  { title: 'Aprendizaje constante', description: 'Me gusta entender el porqué de cada solución y mejorar con cada proyecto.' },
  { title: 'Trabajo en equipo', description: 'Valoro la comunicación clara, la responsabilidad y el avance compartido.' },
  { title: 'Buenas prácticas', description: 'Busco construir con orden, criterio y código que pueda mantenerse.' },
]
</script>

<template>
  <section id="sobre-mi" class="relative scroll-mt-20 overflow-hidden py-16 sm:py-24">
    <div class="absolute -right-24 top-12 -z-10 size-80 rounded-full bg-brand-violet/8 blur-[120px]"></div>
    <div class="absolute -bottom-28 left-1/3 -z-10 size-72 rounded-full bg-brand-magenta/6 blur-[120px]"></div>

    <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <MotionReveal as="header" class="mb-10 max-w-3xl sm:mb-14">
        <p class="mb-4 text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Sobre mí</p>
        <h2 class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Construyendo criterio,
          <span class="bg-linear-to-r from-brand-violet to-brand-magenta bg-clip-text text-transparent">
            experiencia y propósito
          </span>
        </h2>
      </MotionReveal>

      <div class="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <MotionReveal
          as="article"
          class="rounded-2xl border border-brand-violet/20 bg-linear-to-br from-[#18181b]/65 to-space/60 p-5 shadow-xl shadow-brand-violet/4 backdrop-blur-xl sm:p-8"
          :delay="0.08"
        >
          <p class="text-base leading-relaxed text-muted sm:text-lg">
            Soy estudiante de Ingeniería en Sistemas de Información en la Universidad Nacional de Costa Rica. Me
            interesa crear soluciones digitales que sean funcionales, claras y útiles para las personas que las usan.
          </p>

          <p class="mt-5 text-base leading-relaxed text-muted">
            Mi enfoque combina curiosidad técnica, disciplina y colaboración. Estoy construyendo experiencia desde
            proyectos académicos, trabajo en equipo y participación universitaria, siempre procurando aprender con
            intención y aportar con responsabilidad.
          </p>

          <div class="mt-8 rounded-2xl border border-white/7 bg-white/2.5 p-5">
            <p class="text-xs font-medium uppercase tracking-[0.24em] text-brand-magenta">Filosofía de trabajo</p>
            <p class="mt-3 text-sm leading-relaxed text-muted">
              Prefiero soluciones simples antes que complejidad innecesaria. Para mí, un buen proyecto no solo debe
              funcionar: también debe ser entendible, usable y sostenible.
            </p>
          </div>
        </MotionReveal>

        <div class="grid gap-4">
          <MotionReveal
            v-for="(value, index) in values"
            :key="value.title"
            as="article"
            class="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/30"
            :delay="0.12 + index * 0.07"
          >
            <span class="mb-4 block h-1 w-10 rounded-full bg-linear-to-r from-brand-violet to-brand-magenta"></span>
            <h3 class="text-base font-medium text-foreground">{{ value.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-muted">{{ value.description }}</p>
          </MotionReveal>
        </div>
      </div>
    </div>
  </section>
</template>
