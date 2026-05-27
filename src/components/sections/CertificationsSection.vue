<script setup>
import { certifications } from '../../data/certifications'
</script>

<template>
  <section id="certificaciones" class="relative scroll-mt-20 overflow-hidden py-20 sm:py-24">
    <div class="absolute -left-20 top-12 -z-10 size-80 rounded-full bg-brand-violet/7 blur-[130px]"></div>
    <div class="absolute -right-24 bottom-8 -z-10 size-72 rounded-full bg-brand-magenta/5 blur-[120px]"></div>

    <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <header class="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
        <p class="mb-4 text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">
          Certificaciones y reconocimientos
        </p>
        <h2 class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Formación, mérito y
          <span class="bg-linear-to-r from-brand-violet to-brand-magenta bg-clip-text text-transparent">
            crecimiento profesional
          </span>
        </h2>
        <p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Certificaciones, reconocimientos académicos y logros universitarios que reflejan mi compromiso con el
          aprendizaje, la disciplina y el desarrollo profesional.
        </p>
        <span class="mx-auto mt-7 block h-1 w-20 rounded-full bg-linear-to-r from-brand-violet to-brand-magenta"></span>
      </header>

      <div class="mx-auto grid max-w-5xl gap-5">
        <article
          v-for="certification in certifications"
          :key="certification.id"
          class="group rounded-2xl border border-brand-violet/20 bg-linear-to-br from-[#18181b]/62 to-space/62 p-6 shadow-xl shadow-brand-violet/4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-magenta/38 hover:shadow-brand-magenta/9 sm:p-7"
        >
          <div class="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div
              class="grid size-16 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-brand-violet to-brand-magenta text-foreground shadow-lg shadow-brand-magenta/15 transition-all duration-300 group-hover:scale-105 group-hover:shadow-brand-magenta/25"
            >
              <svg
                v-if="certification.icon === 'certificate'"
                viewBox="0 0 24 24"
                class="size-8"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.7 13.4-.9 7 4.2-2.3 4.2 2.3-.9-7" />
              </svg>
              <svg
                v-else-if="certification.icon === 'achievement'"
                viewBox="0 0 24 24"
                class="size-8"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m12 3.5 2.7 5.4 6 .9-4.4 4.2 1.1 6-5.4-2.8L6.6 20l1.1-6-4.4-4.2 6-.9L12 3.5Z" />
              </svg>
              <svg
                v-else
                viewBox="0 0 24 24"
                class="size-8"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.5 9.2 12 4.5l8.5 4.7L12 14 3.5 9.2Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 11.3v4.3c2.8 2.2 7.2 2.2 10 0v-4.3M20.5 9.2v5.5" />
              </svg>
            </div>

            <div class="min-w-0 flex-1">
              <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span
                    class="inline-flex rounded-full border border-brand-violet/25 bg-brand-violet/10 px-3 py-1 text-xs font-medium text-brand-magenta"
                  >
                    {{ certification.type }}
                  </span>
                  <h3
                    class="mt-3 text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-brand-magenta"
                  >
                    {{ certification.title }}
                  </h3>
                </div>

                <span
                  class="inline-flex shrink-0 self-start rounded-full border border-brand-violet/25 bg-linear-to-r from-brand-violet/12 to-brand-magenta/10 px-4 py-2 text-sm font-medium text-brand-magenta"
                >
                  {{ certification.year }}
                </span>
              </div>

              <p class="mt-4 text-sm leading-relaxed text-muted sm:text-base">{{ certification.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
