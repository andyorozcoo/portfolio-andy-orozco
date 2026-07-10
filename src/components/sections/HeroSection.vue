<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const profileTags = ['Full Stack', 'Laravel', 'Vue', 'Scrum']
const imageUnavailable = ref(false)
const profileImageSrc = `${import.meta.env.BASE_URL}images/profile/profile-main.png`
</script>

<template>
  <section id="inicio" class="relative flex scroll-mt-20 items-center overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28 lg:min-h-[88vh] lg:pb-16">
    <div class="absolute left-0 top-28 -z-10 size-72 rounded-full bg-brand-violet/10 blur-[110px]"></div>
    <div class="absolute bottom-24 right-0 -z-10 h-80 w-96 rounded-full bg-brand-magenta/10 blur-[120px]"></div>

    <div class="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-8">
      <div class="motion-safe:animate-[hero-rise_700ms_ease-out_both]">
        <p
          class="mb-4 inline-flex rounded-full border border-brand-violet/20 bg-linear-to-r from-brand-violet/10 to-brand-magenta/10 px-3.5 py-1.5 text-xs font-medium text-brand-magenta backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
        >
          Andy Orozco Castro
        </p>

        <h1 class="max-w-3xl text-[2.15rem] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
          Full Stack
          <span class="block bg-linear-to-r from-brand-violet to-brand-magenta bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <div class="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-muted sm:mt-7 sm:text-lg">
          <p>
            Desarrollador full stack enfocado en construir soluciones web modernas, APIs REST y lógica de negocio para
            sistemas funcionales.
          </p>
          <p class="hidden sm:block">
            Trabajo con Laravel, Vue.js, React y bases de datos relacionales, aplicando buenas prácticas de
            arquitectura, modularidad y trabajo colaborativo bajo metodologías ágiles.
          </p>
        </div>

        <div class="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
          <span
            v-for="tag in profileTags"
            :key="tag"
            class="rounded-full border border-brand-violet/25 bg-white/3 px-3 py-1.5 text-[0.68rem] font-medium text-muted shadow-sm shadow-brand-violet/5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-magenta/35 hover:text-foreground sm:px-3.5 sm:py-2 sm:text-xs"
          >
            {{ tag }}
          </span>
        </div>

        <div class="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:flex-wrap">
          <RouterLink
            :to="{ path: '/', hash: '#proyecto-destacado' }"
            class="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-violet to-brand-magenta px-4 py-3 text-xs font-semibold text-foreground shadow-lg shadow-brand-magenta/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-magenta/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-magenta sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Ver proyecto
            <svg viewBox="0 0 24 24" class="size-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </RouterLink>

          <a
            href="/files/cv-andy-orozco.pdf"
            download
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-violet/45 bg-white/2 px-4 py-3 text-xs font-semibold text-brand-magenta backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-magenta/55 hover:bg-brand-violet/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet sm:px-7 sm:py-3.5 sm:text-sm"
          >
            <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M4 19.5h16" />
            </svg>
            Descargar CV
          </a>

          <a
            href="https://github.com/andyorozcoo"
            target="_blank"
            rel="noopener noreferrer"
            class="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/2.5 px-4 py-3 text-xs font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-magenta/40 hover:text-brand-magenta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet sm:col-span-1 sm:px-7 sm:py-3.5 sm:text-sm"
          >
            <svg viewBox="0 0 24 24" class="size-5" fill="currentColor">
              <path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <div class="relative mx-auto flex w-full max-w-[19rem] flex-col gap-4 motion-safe:animate-[hero-scale_700ms_180ms_ease-out_both] sm:max-w-[21rem] lg:ml-auto lg:max-w-[21.25rem]">
        <div class="absolute -right-4 top-10 -z-10 size-44 rounded-full bg-brand-violet/14 blur-[72px]"></div>
        <div class="absolute -bottom-4 left-5 -z-10 size-40 rounded-full bg-brand-magenta/12 blur-[72px]"></div>

        <div class="relative overflow-hidden rounded-[1.6rem] border border-brand-violet/18 bg-linear-to-br from-[#18181b]/70 to-space/78 p-2.5 shadow-xl shadow-black/25 backdrop-blur-md">
          <div class="absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-brand-magenta/45 to-transparent"></div>

          <div class="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-white/8 bg-linear-to-br from-brand-violet/12 to-brand-magenta/8">
            <img
              v-if="!imageUnavailable"
              :src="profileImageSrc"
              alt="Fotografía profesional de Andy Orozco Castro"
              class="h-full w-full object-cover object-[center_34%] saturate-95 transition-transform duration-700 hover:scale-[1.03]"
              @error="imageUnavailable = true"
            />

            <div class="absolute inset-0 bg-linear-to-t from-space/22 via-space/5 to-space/12"></div>
            <div class="absolute inset-0 bg-brand-magenta/5 mix-blend-multiply"></div>
            <div class="absolute -left-8 top-0 h-full w-20 bg-space/15 blur-xl"></div>
            <div class="absolute -right-8 top-0 h-full w-20 bg-space/15 blur-xl"></div>

            <div v-if="imageUnavailable" class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div class="grid size-16 place-items-center rounded-2xl bg-linear-to-br from-brand-violet to-brand-magenta text-base font-semibold text-foreground shadow-lg shadow-brand-magenta/20">
                AO
              </div>
              <p class="mt-4 text-xs font-medium text-foreground">Fotografía profesional</p>
              <p class="mt-1.5 max-w-44 text-[0.68rem] leading-relaxed text-muted">Agrega tu imagen en /images/profile/profile-main.png</p>
            </div>
          </div>
        </div>

        <div class="overflow-hidden rounded-2xl border border-white/8 bg-space/70 shadow-lg shadow-black/20 backdrop-blur-md">
          <div class="flex items-center gap-2 border-b border-white/8 px-4 py-3">
            <span class="size-2.5 rounded-full bg-brand-magenta"></span>
            <span class="size-2.5 rounded-full bg-brand-amber"></span>
            <span class="size-2.5 rounded-full bg-emerald-400"></span>
            <span class="ml-2 text-[0.68rem] text-muted">andy.profile</span>
          </div>
          <div class="space-y-2 px-4 py-4 font-mono text-[0.72rem] leading-relaxed text-muted">
            <p><span class="text-brand-magenta">const</span> rol = <span class="text-foreground">'Full Stack'</span></p>
            <p><span class="text-brand-magenta">stack</span> = ['Laravel', 'Vue']</p>
            <p><span class="text-emerald-300">status</span>: disponible</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
