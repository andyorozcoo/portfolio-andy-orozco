<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative z-10 px-6 pb-8 pt-4 sm:px-8 sm:py-6">
    <div
      class="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left"
    >
      <p>&copy; {{ currentYear }} Andy Orozco. Todos los derechos reservados.</p>
      <p class="text-xs uppercase tracking-[0.24em] text-muted/70">Portfolio</p>
    </div>
  </footer>
</template>
