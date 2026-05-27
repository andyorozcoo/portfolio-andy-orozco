<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/layout/Footer.vue'
import Navbar from './components/layout/Navbar.vue'
import SpaceBackground from './components/layout/SpaceBackground.vue'
</script>

<template>
  <div class="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-space text-foreground">
    <SpaceBackground />

    <Navbar />

    <main id="contenido" class="relative z-10 flex-1">
      <RouterView v-slot="{ Component }">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="translate-y-3 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
  </div>
</template>
