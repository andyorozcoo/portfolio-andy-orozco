<script setup>
import { RouterLink } from 'vue-router'

const codeLines = [
  { key: 'nombre', value: 'Andy Orozco Castro' },
  { key: 'rol', value: 'Full Stack Developer' },
  { key: 'formación', value: 'Ingeniería en Sistemas' },
  { key: 'disponible', value: 'true', boolean: true },
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
        <div class="absolute -right-8 top-16 -z-10 size-56 rounded-full bg-brand-violet/25 blur-[100px]"></div>
        <div class="absolute -bottom-8 -left-8 -z-10 size-52 rounded-full bg-brand-magenta/20 blur-[100px]"></div>

        <div class="overflow-hidden rounded-2xl border border-brand-violet/20 bg-linear-to-br from-[#18181b]/85 to-space/80 shadow-2xl shadow-black/35 backdrop-blur-xl">
          <div class="flex items-center justify-between border-b border-brand-violet/10 bg-space/45 px-5 py-4">
            <div class="flex items-center gap-3">
              <span class="flex gap-2">
                <span class="size-3 rounded-full bg-red-500/80"></span>
                <span class="size-3 rounded-full bg-amber-500/80"></span>
                <span class="size-3 rounded-full bg-emerald-500/80"></span>
              </span>
              <span class="font-mono text-xs text-muted sm:text-sm">andy@portfolio</span>
            </div>
            <span class="rounded-full border border-brand-magenta/20 bg-brand-magenta/8 px-3 py-1 text-xs text-brand-magenta">
              profile.vue
            </span>
          </div>

          <div class="p-5 font-mono text-sm sm:p-8">
            <div class="mb-5 flex items-center gap-2">
              <span class="text-brand-violet">const</span>
              <span class="text-foreground">perfil</span>
              <span class="text-brand-magenta">=</span>
              <span class="text-foreground">{</span>
            </div>

            <div class="space-y-3 pl-5 sm:pl-8">
              <div
                v-for="line in codeLines"
                :key="line.key"
                class="group flex flex-wrap items-center gap-2"
              >
                <span class="text-muted">{{ line.key }}:</span>
                <span :class="line.boolean ? 'text-emerald-300' : 'text-brand-magenta'">
                  {{ line.boolean ? line.value : `'${line.value}'` }}
                </span>
                <span class="text-muted">,</span>
              </div>
            </div>

            <div class="mt-5 text-foreground">}</div>
            <div class="mt-7 flex items-center gap-2 text-xs text-muted">
              <span class="size-2 animate-pulse rounded-full bg-brand-magenta"></span>
              <span>Listo para nuevos retos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
