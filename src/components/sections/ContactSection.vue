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
  <section id="contacto" class="section-shell">
    <MotionReveal
      class="premium-card mx-auto max-w-5xl overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/25 hover:shadow-brand-cyan/8 sm:p-8"
    >
      <div class="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-brand-cyan/55 to-transparent"></div>
      <div class="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p class="section-eyebrow">Contacto</p>
          <h2 class="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">Hablemos</h2>
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
            class="premium-button-secondary rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:border-brand-cyan/40 hover:text-brand-cyan active:scale-[0.98]"
          >
            {{ contact.label }}
          </a>
        </div>
      </div>
    </MotionReveal>
  </section>
</template>
