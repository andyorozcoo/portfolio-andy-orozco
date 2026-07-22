<script setup>
import TypingTerminal from '../ui/TypingTerminal.vue'
</script>

<template>
  <section id="inicio" class="relative scroll-mt-20 px-5 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
    <div class="absolute inset-x-0 top-20 -z-10 mx-auto h-48 max-w-4xl rounded-full bg-brand-cyan/8 blur-3xl"></div>
    <div class="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1fr_23rem] lg:gap-14">
      <div class="motion-safe:animate-[hero-rise_650ms_ease-out_both]">
        <h1 class="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl sm:leading-[0.96]">
          Andy Orozco Castro
        </h1>
        <p class="mt-4 bg-linear-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">Full Stack Developer</p>

        <div class="mt-6 max-w-2xl space-y-3 text-sm leading-relaxed text-muted sm:text-base">
          <p>
            Desarrollador full stack enfocado en construir soluciones web modernas, APIs REST y lógica de negocio para
            sistemas funcionales.
          </p>
          <p>
            Trabajo con Laravel, Vue.js, React y bases de datos relacionales, aplicando arquitectura, modularidad y
            colaboración ágil.
          </p>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#contacto"
            class="premium-button-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
          >
            Contactarme
          </a>
          <a
            href="https://www.linkedin.com/in/andy-orozco"
            target="_blank"
            rel="noopener noreferrer"
            class="premium-button-secondary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-brand-cyan/35 hover:text-brand-cyan active:scale-[0.98]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/andyorozcoo"
            target="_blank"
            rel="noopener noreferrer"
            class="premium-button-secondary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-brand-cyan/35 hover:text-brand-cyan active:scale-[0.98]"
          >
            GitHub
          </a>
          <a
            href="/files/cv-andy-orozco.pdf"
            download
            class="premium-button-secondary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-brand-cyan/35 hover:text-brand-cyan active:scale-[0.98]"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div class="mx-auto flex w-full max-w-[22rem] flex-col motion-safe:animate-[hero-scale_650ms_140ms_ease-out_both] lg:ml-auto lg:-translate-y-5">
        <div class="motion-safe:animate-[premium-float_5.5s_ease-in-out_infinite]">
          <TypingTerminal />
        </div>
      </div>
    </div>
  </section>
</template>
