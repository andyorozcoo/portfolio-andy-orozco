<script setup>
import Footer from './components/layout/Footer.vue'
import Navbar from './components/layout/Navbar.vue'
import SpaceBackground from './components/layout/SpaceBackground.vue'
</script>

<template>
  <div class="relative isolate flex min-h-screen flex-col overflow-hidden bg-space text-foreground">
    <SpaceBackground />

    <Navbar />

    <main id="contenido" class="relative z-10 flex-1">
      <div class="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <!-- Las secciones del portfolio se integraran aqui progresivamente. -->
      </div>
    </main>

    <Footer />
  </div>
</template>
