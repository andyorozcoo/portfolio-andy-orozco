<script setup>
import AboutSection from '../components/sections/AboutSection.vue'

const focusItems = [
  { title: 'Código limpio', text: 'Busco soluciones organizadas, mantenibles y fáciles de comprender.' },
  { title: 'Aprendizaje constante', text: 'Refuerzo mis conocimientos con cada proyecto y nuevo reto técnico.' },
  { title: 'Experiencia de usuario', text: 'Me interesa que cada interfaz sea funcional, clara y agradable.' },
  { title: 'Trabajo en equipo', text: 'Valoro la comunicación y la responsabilidad compartida.' },
]
</script>

<template>
  <div class="pt-20">
    <AboutSection />

    <section class="relative px-6 pb-16 sm:pb-24 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <header class="mb-8 max-w-2xl">
          <p class="text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Mi enfoque</p>
          <h2 class="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">Cómo aporto en cada proyecto</h2>
        </header>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in focusItems"
            :key="item.title"
            class="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/30"
          >
            <span class="mb-4 grid size-9 place-items-center rounded-lg border border-brand-violet/25 bg-brand-violet/10 text-brand-magenta">
              <span class="size-2 rounded-full bg-brand-magenta"></span>
            </span>
            <h3 class="text-base font-medium text-foreground">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-muted">{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
