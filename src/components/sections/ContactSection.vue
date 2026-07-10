<script setup>
import MotionReveal from '../ui/MotionReveal.vue'

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:andyorozcocastro98@gmail.com?subject=Contacto%20desde%20portfolio&body=Hola%20Andy%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andy-orozco',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/andyorozcoo',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/50685419197',
  },
]
</script>

<template>
  <section id="contacto" class="relative scroll-mt-20 px-5 py-10 sm:px-6 sm:py-12">
    <MotionReveal
      class="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0f1720]/72 p-6 shadow-xl shadow-black/20 backdrop-blur-md sm:p-8"
    >
      <div class="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-magenta">Contacto</p>
          <h2 class="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">Hablemos</h2>
          <p class="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Estoy abierto a oportunidades de práctica profesional, posiciones junior y proyectos colaborativos.
          </p>
        </div>

        <div class="flex flex-wrap gap-2.5 md:justify-end">
          <a
            v-for="contact in contactLinks"
            :key="contact.label"
            :href="contact.href"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-magenta/40 hover:text-brand-magenta"
          >
            {{ contact.label }}
          </a>
        </div>
      </div>
    </MotionReveal>
  </section>
</template>
