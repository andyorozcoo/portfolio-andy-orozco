<script setup>
import MotionReveal from '../ui/MotionReveal.vue'

const contactLinks = [
  {
    label: 'LinkedIn',
    detail: 'Conectemos profesionalmente',
    href: 'https://www.linkedin.com/in/andy-orozco',
    type: 'linkedin',
  },
  {
    label: 'GitHub',
    detail: 'Explora mi código y proyectos',
    href: 'https://github.com/andyorozcoo',
    type: 'github',
  },
  {
    label: 'Gmail',
    detail: 'Escríbeme por correo',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=andyorozcocastro98@gmail.com&su=Contacto%20desde%20portfolio&body=Hola%20Andy%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo.',
    type: 'gmail',
  },
  {
    label: 'WhatsApp',
    detail: 'Hablemos directamente',
    href: 'https://wa.me/50685419197',
    type: 'whatsapp',
  },
]
</script>

<template>
  <section id="contacto" class="relative scroll-mt-20 overflow-hidden py-16 sm:py-28">
    <div class="absolute left-1/2 top-1/2 -z-10 h-80 w-[38rem] max-w-[86vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-violet/9 blur-[140px]"></div>
    <div class="absolute bottom-4 right-1/4 -z-10 size-60 rounded-full bg-brand-magenta/8 blur-[110px]"></div>

    <div class="mx-auto w-full max-w-6xl px-6 lg:px-8">
      <MotionReveal
        class="relative overflow-hidden rounded-3xl border border-brand-violet/20 bg-linear-to-br from-[#18181b]/58 via-space/60 to-[#18181b]/48 px-5 py-10 shadow-2xl shadow-brand-violet/5 backdrop-blur-xl sm:px-10 sm:py-16"
      >
        <div class="absolute inset-x-16 top-0 h-px bg-linear-to-r from-transparent via-brand-magenta/55 to-transparent"></div>

        <header class="mx-auto max-w-3xl text-center">
          <p class="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-brand-magenta">Contacto</p>
          <h2 class="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hablemos
          </h2>
          <p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Estoy abierto a oportunidades, colaboraciones y proyectos donde pueda aportar desde el desarrollo full
            stack, la resolución de problemas y el trabajo en equipo.
          </p>
          <span class="mx-auto mt-8 block h-1 w-20 rounded-full bg-linear-to-r from-brand-violet to-brand-magenta"></span>
        </header>

        <div class="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          <MotionReveal
            v-for="(contact, index) in contactLinks"
            :key="contact.label"
            as="a"
            :href="contact.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col items-center rounded-2xl border border-white/8 bg-white/2 px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/38 hover:bg-brand-violet/7 hover:shadow-xl hover:shadow-brand-magenta/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet sm:py-8"
            :aria-label="`Contactar por ${contact.label}`"
            :delay="0.12 + index * 0.08"
          >
            <span
              class="grid size-16 place-items-center rounded-2xl border border-brand-violet/25 bg-linear-to-br from-brand-violet/14 to-brand-magenta/10 text-brand-magenta transition-all duration-300 group-hover:border-brand-magenta/45 group-hover:bg-linear-to-br group-hover:from-brand-violet group-hover:to-brand-magenta group-hover:text-foreground"
            >
              <svg v-if="contact.type === 'linkedin'" viewBox="0 0 24 24" class="size-7" fill="currentColor">
                <path d="M5.1 8.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Zm-1.9 12.9H7V10H3.2v11.2Zm6 0H13v-6.3c0-1.7.3-3.2 2.4-3.2 2.1 0 2.1 1.9 2.1 3.3v6.2h3.8v-7c0-3.4-.7-6-4.7-6-1.9 0-3.2 1-3.7 2h-.1V10H9.2v11.2Z" />
              </svg>
              <svg v-else-if="contact.type === 'github'" viewBox="0 0 24 24" class="size-7" fill="currentColor">
                <path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" />
              </svg>
              <svg v-else-if="contact.type === 'gmail'" viewBox="0 0 24 24" class="size-7" fill="currentColor">
                <path d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-1.4 2L12 11.7 5.4 7h13.2ZM4 17V8.2l7.4 5.2a1 1 0 0 0 1.2 0L20 8.2V17H4Z" />
              </svg>
              <svg v-else viewBox="0 0 24 24" class="size-7" fill="currentColor">
                <path d="M19.1 4.8A9.9 9.9 0 0 0 3.5 16.6L2 22l5.6-1.5A9.9 9.9 0 1 0 19.1 4.8ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-3.3.9.9-3.2-.2-.3a8 8 0 1 1 7 3.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.5.7c-.2.2-.3.3-.6.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.3 0-.4.1-.5l.4-.5.2-.4c.1-.1 0-.3 0-.4L9.9 8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.4c.1.2 1.6 2.7 4.1 3.7 2 .8 2.5.6 3 .6.4-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.7-.4Z" />
              </svg>
            </span>

            <h3 class="mt-5 text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-brand-magenta">
              {{ contact.label }}
            </h3>
            <p class="mt-2 text-sm text-muted">{{ contact.detail }}</p>
            <span class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-magenta">
              Ir al contacto
              <svg viewBox="0 0 24 24" class="size-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </span>
          </MotionReveal>
        </div>
      </MotionReveal>
    </div>
  </section>
</template>
