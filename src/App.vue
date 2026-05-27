<script setup>
import Footer from './components/layout/Footer.vue'
import Navbar from './components/layout/Navbar.vue'
import SpaceBackground from './components/layout/SpaceBackground.vue'
import HeroSection from './components/sections/HeroSection.vue'
</script>

<template>
  <div class="relative isolate flex min-h-screen flex-col overflow-hidden bg-space text-foreground">
    <SpaceBackground />

    <Navbar />

    <main id="contenido" class="relative z-10 flex-1">
      <HeroSection />
    </main>

    <Footer />
  </div>
</template>
