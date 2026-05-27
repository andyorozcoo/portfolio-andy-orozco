<script setup>
const quickFacts = [
  { label: 'Ubicación', value: 'Costa Rica' },
  { label: 'Carrera', value: 'Ingeniería en Sistemas de Información' },
  { label: 'Enfoque', value: 'Full Stack Development' },
  { label: 'Metodología', value: 'Scrum' },
  { label: 'Intereses', value: 'Web, APIs, UX, Móvil' },
]

const technologies = ['Laravel', 'Vue.js', 'React', 'MySQL', 'Android', 'Scrum']

const strengths = [
  { title: 'Compromiso', description: 'Responsabilidad en cada proyecto.' },
  { title: 'Aprendizaje', description: 'Mejora constante y curiosidad técnica.' },
  { title: 'Equipo', description: 'Colaboración ágil y comunicación clara.' },
  { title: 'Buenas prácticas', description: 'Código organizado y mantenible.' },
]
</script>

<template>
  <section id="sobre-mi" class="relative scroll-mt-20 overflow-hidden py-20 sm:py-24">
    <div class="absolute -right-24 top-12 -z-10 size-80 rounded-full bg-brand-violet/8 blur-[120px]"></div>
    <div class="absolute -bottom-28 left-1/3 -z-10 size-72 rounded-full bg-brand-magenta/6 blur-[120px]"></div>

    <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <header class="mb-12 max-w-3xl sm:mb-14">
        <p class="mb-4 text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Sobre mí</p>
        <h2 class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Desarrollador en formación,
          <span class="bg-linear-to-r from-brand-violet to-brand-magenta bg-clip-text text-transparent">
            creando soluciones con propósito
          </span>
        </h2>
      </header>

      <div class="grid items-start gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <article
          class="group rounded-2xl border border-brand-violet/20 bg-linear-to-br from-[#18181b]/65 to-space/60 p-6 shadow-xl shadow-brand-violet/4 backdrop-blur-xl transition-all duration-300 hover:border-brand-magenta/30 hover:shadow-brand-magenta/7 sm:p-8"
        >
          <div class="mb-7 flex items-center gap-4">
            <div
              class="grid size-14 shrink-0 place-items-center rounded-2xl border border-brand-violet/25 bg-linear-to-br from-brand-violet/15 to-brand-magenta/10 text-brand-magenta transition-transform duration-300 group-hover:scale-105"
            >
              <svg viewBox="0 0 24 24" class="size-7" fill="none" stroke="currentColor" stroke-width="1.7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 20a7.5 7.5 0 0 1 15 0" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-medium text-foreground">Andy Orozco Castro</h3>
              <p class="mt-1 text-sm text-brand-magenta">Full Stack Developer en formación</p>
            </div>
          </div>

          <p class="text-base leading-relaxed text-muted sm:text-lg">
            Soy estudiante de Ingeniería en Sistemas de Información en la Universidad Nacional de Costa Rica. Me
            interesa crear soluciones digitales que combinen funcionalidad, buen diseño y una experiencia clara para
            el usuario.
          </p>

          <p class="mt-5 text-base leading-relaxed text-muted">
            He trabajado en proyectos académicos y colaborativos aplicando desarrollo full stack, APIs REST, bases de
            datos relacionales, control de versiones con Git y metodologías ágiles como Scrum.
          </p>

          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            <div
              v-for="strength in strengths"
              :key="strength.title"
              class="rounded-xl border border-white/6 bg-white/2.5 p-4 transition-colors duration-300 hover:border-brand-violet/30 hover:bg-brand-violet/6"
            >
              <div class="mb-2 flex items-center gap-2">
                <span class="size-1.5 rounded-full bg-linear-to-r from-brand-violet to-brand-magenta"></span>
                <h4 class="text-sm font-medium text-foreground">{{ strength.title }}</h4>
              </div>
              <p class="text-sm leading-relaxed text-muted">{{ strength.description }}</p>
            </div>
          </div>
        </article>

        <aside
          class="rounded-2xl border border-brand-violet/20 bg-[#18181b]/45 p-6 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-brand-magenta/30 sm:p-8"
        >
          <div class="flex items-center justify-between border-b border-white/7 pb-5">
            <div>
              <p class="text-xs uppercase tracking-[0.24em] text-muted">Perfil</p>
              <h3 class="mt-2 text-xl font-medium text-foreground">Datos rápidos</h3>
            </div>
            <div class="flex gap-2">
              <span class="size-2 rounded-full bg-brand-violet/80"></span>
              <span class="size-2 rounded-full bg-brand-magenta/80"></span>
            </div>
          </div>

          <dl class="mt-5 space-y-1">
            <div
              v-for="fact in quickFacts"
              :key="fact.label"
              class="rounded-xl px-3 py-3 transition-colors duration-300 hover:bg-white/3.5 sm:flex sm:items-start sm:justify-between sm:gap-5"
            >
              <dt class="text-sm text-muted">{{ fact.label }}</dt>
              <dd class="mt-1 text-sm font-medium text-foreground sm:mt-0 sm:max-w-60 sm:text-right">
                {{ fact.value }}
              </dd>
            </div>
          </dl>

          <div class="mt-7 border-t border-white/7 pt-6">
            <p class="mb-4 text-xs uppercase tracking-[0.24em] text-muted">Tecnologías</p>
            <div class="flex flex-wrap gap-2.5">
              <span
                v-for="technology in technologies"
                :key="technology"
                class="rounded-full border border-brand-violet/25 bg-linear-to-r from-brand-violet/9 to-brand-magenta/8 px-3.5 py-2 text-sm text-foreground transition-all duration-300 hover:border-brand-magenta/40 hover:text-brand-magenta"
              >
                {{ technology }}
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
