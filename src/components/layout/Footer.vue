<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative z-10 px-6 py-6 sm:px-8">
    <div
      class="mx-auto flex w-full max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"
    >
      <p>&copy; {{ currentYear }} Andy Orozco. Todos los derechos reservados.</p>
      <p class="text-xs uppercase tracking-[0.24em] text-muted/70">Portfolio</p>
    </div>
  </footer>
</template>
