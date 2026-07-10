<script setup>
import { ref } from 'vue'
import TypingTerminal from '../ui/TypingTerminal.vue'

const imageUnavailable = ref(false)
const profileImageSrc = `${import.meta.env.BASE_URL}images/profile/profile-main.png`
</script>

<template>
  <section id="inicio" class="relative scroll-mt-20 px-5 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-28">
    <div class="mx-auto grid w-full max-w-5xl items-center gap-8 lg:grid-cols-[1fr_20rem]">
      <div class="motion-safe:animate-[hero-rise_650ms_ease-out_both]">
        <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium text-muted">
          <span class="size-2 rounded-full bg-brand-magenta"></span>
          Disponible para oportunidades junior y prácticas
        </div>

        <h1 class="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Hola, soy Andy Orozco
        </h1>
        <p class="mt-3 text-xl font-semibold text-brand-magenta sm:text-2xl">Full Stack Developer</p>

        <div class="mt-5 max-w-2xl space-y-3 text-sm leading-relaxed text-muted sm:text-base">
          <p>
            Desarrollador full stack enfocado en construir soluciones web modernas, APIs REST y lógica de negocio para
            sistemas funcionales.
          </p>
          <p>
            Trabajo con Laravel, Vue.js, React y bases de datos relacionales, aplicando arquitectura, modularidad y
            colaboración ágil.
          </p>
        </div>

        <div class="mt-7 flex flex-wrap gap-3">
          <a
            href="#contacto"
            class="inline-flex items-center justify-center rounded-full bg-brand-violet px-5 py-2.5 text-sm font-semibold text-space transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-magenta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-magenta"
          >
            Contactarme
          </a>
          <a
            href="https://www.linkedin.com/in/andy-orozco"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-magenta/40 hover:text-brand-magenta"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/andyorozcoo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-magenta/40 hover:text-brand-magenta"
          >
            GitHub
          </a>
          <a
            href="/files/cv-andy-orozco.pdf"
            download
            class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-magenta/40 hover:text-brand-magenta"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div class="mx-auto flex w-full max-w-[18rem] flex-col gap-4 motion-safe:animate-[hero-scale_650ms_140ms_ease-out_both] lg:ml-auto">
        <div class="relative mx-auto w-40 overflow-hidden rounded-full border border-white/10 bg-[#0f1720] p-1 shadow-xl shadow-black/25 sm:w-44 lg:w-48">
          <div class="aspect-square overflow-hidden rounded-full bg-brand-violet/10">
            <img
              v-if="!imageUnavailable"
              :src="profileImageSrc"
              alt="Fotografía profesional de Andy Orozco"
              class="h-full w-full object-cover object-[center_30%]"
              loading="eager"
              decoding="async"
              @error="imageUnavailable = true"
            />
            <div v-else class="grid h-full place-items-center text-3xl font-semibold text-brand-magenta">
              AO
            </div>
          </div>
        </div>

        <TypingTerminal />
      </div>
    </div>
  </section>
</template>
