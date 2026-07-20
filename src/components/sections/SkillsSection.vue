<script setup>
import { computed, ref } from 'vue'
import MotionReveal from '../ui/MotionReveal.vue'
import SkillCard from '../ui/SkillCard.vue'
import { skillCategories } from '../../data/skills'

const activeCategoryId = ref(skillCategories[0].id)

const activeCategory = computed(() => {
  return skillCategories.find((category) => category.id === activeCategoryId.value)
})
</script>

<template>
  <section id="habilidades" class="relative scroll-mt-20 px-5 py-10 sm:px-6 sm:py-12">
    <div class="mx-auto w-full max-w-5xl">
      <MotionReveal as="header" class="mb-7 max-w-2xl">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-magenta">Stack</p>
        <h2 class="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Habilidades técnicas
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Tecnologías y herramientas que utilizo para construir aplicaciones web, móviles y servicios backend.
        </p>
      </MotionReveal>

      <MotionReveal class="-mx-5 overflow-x-auto overscroll-x-contain px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" :delay="0.08">
        <div class="flex min-w-max gap-2" role="tablist" aria-label="Categorías de habilidades">
          <button
            v-for="category in skillCategories"
            :id="`skills-tab-${category.id}`"
            :key="category.id"
            type="button"
            role="tab"
            :aria-selected="activeCategoryId === category.id"
            :aria-controls="`skills-panel-${category.id}`"
            class="rounded-full border px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-violet sm:text-sm"
            :class="
              activeCategoryId === category.id
                ? 'border-brand-violet bg-brand-violet text-space shadow-lg shadow-brand-violet/15'
                : 'border-white/10 bg-[#0f1720]/75 text-muted hover:border-brand-violet/35 hover:bg-white/4 hover:text-foreground'
            "
            @click="activeCategoryId = category.id"
          >
            {{ category.label }}
          </button>
        </div>
      </MotionReveal>

      <div class="mt-5">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-250 ease-out"
          enter-from-class="translate-y-2 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="-translate-y-1 opacity-0"
        >
          <div
            :id="`skills-panel-${activeCategory.id}`"
            :key="activeCategory.id"
            role="tabpanel"
            :aria-labelledby="`skills-tab-${activeCategory.id}`"
          >
            <p class="mb-4 max-w-2xl text-sm leading-relaxed text-muted">{{ activeCategory.description }}</p>

            <div class="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
              <MotionReveal
                v-for="(skill, index) in activeCategory.skills"
                :key="skill.name"
                :delay="index * 0.035"
                y="10"
              >
                <SkillCard :skill="skill" />
              </MotionReveal>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
