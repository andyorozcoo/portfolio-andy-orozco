<script setup>
import Footer from './components/layout/Footer.vue'
import Navbar from './components/layout/Navbar.vue'
import SpaceBackground from './components/layout/SpaceBackground.vue'
import AboutSection from './components/sections/AboutSection.vue'
import CertificationsSection from './components/sections/CertificationsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
</script>

<template>
  <div class="relative isolate flex min-h-screen flex-col overflow-hidden bg-space text-foreground">
    <SpaceBackground />

    <Navbar />

    <main id="contenido" class="relative z-10 flex-1">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>
