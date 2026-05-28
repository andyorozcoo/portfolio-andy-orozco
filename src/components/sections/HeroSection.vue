<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const profileTags = ['Full Stack Developer', 'APIs REST', 'Arquitectura modular', 'Scrum']
const imageUnavailable = ref(false)
const profileImageSrc = `${import.meta.env.BASE_URL}images/profile/profile-main.png`
</script>

<template>
  <section id="inicio" class="relative flex scroll-mt-20 items-center overflow-hidden pb-16 pt-28 sm:pt-32 lg:min-h-screen lg:pb-20">
    <div class="absolute left-0 top-28 -z-10 size-72 rounded-full bg-brand-violet/10 blur-[110px]"></div>
    <div class="absolute bottom-24 right-0 -z-10 h-80 w-96 rounded-full bg-brand-magenta/10 blur-[120px]"></div>

    <div class="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8">
      <div class="motion-safe:animate-[hero-rise_700ms_ease-out_both]">
        <p
          class="mb-6 inline-flex rounded-full border border-brand-violet/20 bg-linear-to-r from-brand-violet/10 to-brand-magenta/10 px-4 py-2 text-sm font-medium text-brand-magenta backdrop-blur-sm"
        >
          Andy Orozco Castro
        </p>

        <h1 class="max-w-3xl text-[2.45rem] font-semibold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
          Full Stack
          <span class="block bg-linear-to-r from-brand-violet to-brand-magenta bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <div class="mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            Desarrollador full stack enfocado en construir soluciones web modernas, APIs REST y lógica de negocio
            orientada a sistemas administrativos y experiencias digitales funcionales.
          </p>
          <p>
            Trabajo con Laravel, Vue.js, React y bases de datos relacionales, aplicando buenas prácticas de
            arquitectura, modularidad y desarrollo colaborativo bajo metodologías ágiles.
          </p>
        </div>

        <div class="mt-7 flex flex-wrap gap-2.5">
          <span
            v-for="tag in profileTags"
            :key="tag"
            class="rounded-full border border-brand-violet/25 bg-white/3 px-3.5 py-2 text-xs font-medium text-muted shadow-sm shadow-brand-violet/5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-magenta/35 hover:text-foreground"
          >
            {{ tag }}
          </span>
        </div>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <RouterLink
            :to="{ path: '/', hash: '#proyecto-destacado' }"
            class="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-violet to-brand-magenta px-7 py-3.5 text-sm font-semibold text-foreground shadow-lg shadow-brand-magenta/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-magenta/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-magenta"
          >
            Ver proyectos
            <svg viewBox="0 0 24 24" class="size-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </RouterLink>
          <a
            href="/andy-orozco-castro-cv.pdf"
            download
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-violet/45 bg-white/2 px-7 py-3.5 text-sm font-semibold text-brand-magenta backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-magenta/55 hover:bg-brand-violet/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet"
          >
            <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M4 19.5h16" />
            </svg>
            Descargar CV
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/2.5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-magenta/40 hover:text-brand-magenta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet"
          >
            <svg viewBox="0 0 24 24" class="size-5" fill="currentColor">
              <path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-[31rem] motion-safe:animate-[hero-scale_700ms_180ms_ease-out_both] lg:ml-auto">
        <div class="absolute -right-5 top-12 -z-10 size-64 rounded-full bg-brand-violet/22 blur-[100px]"></div>
        <div class="absolute -bottom-6 left-4 -z-10 size-56 rounded-full bg-brand-magenta/18 blur-[100px]"></div>

        <div class="relative overflow-hidden rounded-[2rem] border border-brand-violet/20 bg-linear-to-br from-[#18181b]/76 to-space/80 p-3 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-4">
          <div class="absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-brand-magenta/60 to-transparent"></div>

          <div class="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/8 bg-linear-to-br from-brand-violet/16 to-brand-magenta/10">
            <img
              v-if="!imageUnavailable"
              :src="profileImageSrc"
              alt="Fotografía profesional de Andy Orozco Castro"
              class="h-full w-full object-cover object-[center_34%] saturate-95 transition-transform duration-700 hover:scale-[1.03]"
              @error="imageUnavailable = true"
            />

            <div class="absolute inset-0 bg-linear-to-t from-space/28 via-space/8 to-space/18"></div>
            <div class="absolute inset-0 bg-brand-magenta/5 mix-blend-multiply"></div>
            <div class="absolute -left-10 top-0 h-full w-28 bg-space/20 blur-2xl"></div>
            <div class="absolute -right-10 top-0 h-full w-28 bg-space/20 blur-2xl"></div>

            <div v-if="imageUnavailable" class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div class="grid size-16 place-items-center rounded-2xl bg-linear-to-br from-brand-violet to-brand-magenta text-base font-semibold text-foreground shadow-lg shadow-brand-magenta/20">
                AO
              </div>
              <p class="mt-4 text-xs font-medium text-foreground">Fotografía profesional</p>
              <p class="mt-1.5 max-w-44 text-[0.68rem] leading-relaxed text-muted">Agrega tu imagen en /images/profile/profile-main.png</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
