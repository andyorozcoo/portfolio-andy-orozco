<script setup>
import { RouterLink } from 'vue-router'

const stackItems = [
  { name: 'Laravel', area: 'Backend', className: 'border-red-400/20 bg-red-400/6 text-red-300' },
  { name: 'Vue.js', area: 'Frontend', className: 'border-emerald-400/20 bg-emerald-400/6 text-emerald-300' },
  { name: 'React', area: 'Frontend', className: 'border-sky-400/20 bg-sky-400/6 text-sky-300' },
  { name: 'MySQL', area: 'Datos', className: 'border-brand-amber/20 bg-brand-amber/6 text-brand-amber' },
  { name: 'Docker', area: 'Deploy', className: 'border-blue-400/20 bg-blue-400/6 text-blue-300' },
  { name: 'Scrum', area: 'Agile', className: 'border-brand-magenta/20 bg-brand-magenta/6 text-brand-magenta' },
]

const profileDetails = [
  { label: 'Base', value: 'Costa Rica' },
  { label: 'Carrera', value: 'Ingeniería en Sistemas' },
  { label: 'Enfoque', value: 'Full Stack Development' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Gmail', to: '/contacto' },
]
</script>

<template>
  <section id="inicio" class="relative flex scroll-mt-20 items-center overflow-hidden pb-14 pt-28 sm:pt-32 lg:min-h-screen lg:pb-20">
    <div class="absolute left-0 top-32 -z-10 size-72 rounded-full bg-brand-violet/10 blur-[110px]"></div>
    <div class="absolute bottom-24 right-0 -z-10 h-80 w-96 rounded-full bg-brand-magenta/10 blur-[120px]"></div>

    <div class="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8">
      <div class="motion-safe:animate-[hero-rise_700ms_ease-out_both]">
        <p
          class="mb-6 inline-flex rounded-full border border-brand-violet/20 bg-linear-to-r from-brand-violet/10 to-brand-magenta/10 px-4 py-2 text-sm font-medium text-brand-magenta backdrop-blur-sm"
        >
          Hola, soy
        </p>

        <h1 class="max-w-3xl text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
          Andy Orozco
          <span class="block bg-linear-to-r from-foreground via-foreground to-muted bg-clip-text text-transparent">
            Castro
          </span>
        </h1>

        <p class="mt-6 max-w-xl bg-linear-to-r from-brand-violet to-brand-magenta bg-clip-text text-xl font-medium leading-snug text-transparent sm:text-2xl">
          Estudiante de Ingeniería en Sistemas &amp; Full Stack Developer
        </p>

        <p class="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Me apasiona crear soluciones digitales modernas combinando frontend, backend y experiencia de usuario.
          Trabajo con tecnologías como Laravel, Vue, React y bases de datos relacionales para construir aplicaciones
          web funcionales, escalables y bien estructuradas.
        </p>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <RouterLink
            to="/proyectos"
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
        </div>

        <div class="mt-10 flex items-center gap-3">
          <component
            v-for="social in socialLinks"
            :key="social.label"
            :is="social.to ? RouterLink : 'a'"
            :to="social.to"
            :href="social.href"
            :target="social.href ? '_blank' : undefined"
            :rel="social.href ? 'noopener noreferrer' : undefined"
            :aria-label="social.label"
            class="group grid size-11 place-items-center rounded-xl border border-white/10 bg-white/2.5 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/35 hover:text-brand-magenta hover:shadow-lg hover:shadow-brand-magenta/10"
          >
            <svg v-if="social.label === 'GitHub'" viewBox="0 0 24 24" class="size-5" fill="currentColor">
              <path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" />
            </svg>
            <svg v-else-if="social.label === 'LinkedIn'" viewBox="0 0 24 24" class="size-5" fill="currentColor">
              <path d="M5.1 8.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Zm-1.9 12.9H7V10H3.2v11.2Zm6 0H13v-6.3c0-1.7.3-3.2 2.4-3.2 2.1 0 2.1 1.9 2.1 3.3v6.2h3.8v-7c0-3.4-.7-6-4.7-6-1.9 0-3.2 1-3.7 2h-.1V10H9.2v11.2Z" />
            </svg>
            <svg v-else viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.8 6.6 12 12.5l8.2-5.9M5.5 19h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
            </svg>
          </component>
        </div>
      </div>

      <div class="relative motion-safe:animate-[hero-scale_700ms_180ms_ease-out_both]">
        <div class="absolute -right-8 top-12 -z-10 size-60 rounded-full bg-brand-violet/22 blur-[105px]"></div>
        <div class="absolute -bottom-8 left-5 -z-10 size-56 rounded-full bg-brand-magenta/16 blur-[105px]"></div>

        <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#15101f]/78 p-5 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-7">
          <div class="absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-brand-magenta/65 to-transparent"></div>
          <div class="absolute -right-16 -top-16 size-44 rounded-full border border-brand-violet/18"></div>
          <div class="absolute -right-10 -top-10 size-28 rounded-full border border-brand-magenta/12"></div>

          <div class="relative flex flex-wrap items-center justify-between gap-4">
            <p class="text-xs font-medium uppercase tracking-[0.25em] text-muted">Perfil profesional</p>
            <span class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/7 px-3 py-1.5 text-xs text-emerald-300">
              <span class="size-1.5 animate-pulse rounded-full bg-emerald-300"></span>
              Disponible
            </span>
          </div>

          <div class="relative mt-7 flex items-center gap-4">
            <div class="grid size-16 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-brand-violet to-brand-magenta text-lg font-semibold text-foreground shadow-lg shadow-brand-magenta/20 sm:size-20 sm:text-xl">
              AO
            </div>
            <div>
              <h2 class="text-xl font-semibold text-foreground sm:text-2xl">Andy Orozco Castro</h2>
              <p class="mt-1 text-sm font-medium text-brand-magenta">Full Stack Developer en formación</p>
            </div>
          </div>

          <dl class="relative mt-7 grid gap-3 sm:grid-cols-3">
            <div
              v-for="detail in profileDetails"
              :key="detail.label"
              class="rounded-xl border border-white/7 bg-white/2.5 p-3.5"
            >
              <dt class="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted">{{ detail.label }}</dt>
              <dd class="mt-2 text-sm leading-snug text-foreground">{{ detail.value }}</dd>
            </div>
          </dl>

          <div class="relative mt-7 border-t border-white/7 pt-6">
            <div class="mb-4 flex items-center justify-between gap-4">
              <h3 class="text-sm font-medium text-foreground">Tecnologías principales</h3>
              <span class="text-xs text-muted">Stack</span>
            </div>

            <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div
                v-for="technology in stackItems"
                :key="technology.name"
                class="rounded-xl border p-3 transition-all duration-300 hover:-translate-y-0.5"
                :class="technology.className"
              >
                <p class="text-sm font-medium text-foreground">{{ technology.name }}</p>
                <p class="mt-1 text-xs opacity-80">{{ technology.area }}</p>
              </div>
            </div>
          </div>

          <p class="relative mt-6 rounded-xl border border-brand-violet/14 bg-brand-violet/6 px-4 py-3 text-sm leading-relaxed text-muted">
            Construyendo soluciones funcionales con frontend, backend y buenas prácticas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
