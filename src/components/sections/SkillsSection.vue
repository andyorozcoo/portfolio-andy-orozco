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
  <section id="habilidades" class="relative scroll-mt-20 overflow-hidden py-16 sm:py-24">
    <div class="absolute -right-32 top-1/3 -z-10 size-96 rounded-full bg-brand-magenta/6 blur-[140px]"></div>
    <div class="absolute -bottom-20 left-0 -z-10 size-80 rounded-full bg-brand-violet/7 blur-[130px]"></div>

    <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <MotionReveal as="header" class="mx-auto mb-9 max-w-3xl text-center sm:mb-11">
        <p class="mb-4 text-sm font-medium uppercase tracking-[0.26em] text-brand-magenta">Lo que manejo</p>
        <h2 class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Habilidades
          <span class="bg-linear-to-r from-brand-violet to-brand-magenta bg-clip-text text-transparent">
            técnicas
          </span>
        </h2>
        <p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Tecnologías, herramientas y metodologías que utilizo para construir soluciones digitales modernas,
          escalables y bien estructuradas.
        </p>
        <span class="mx-auto mt-7 block h-1 w-20 rounded-full bg-linear-to-r from-brand-violet to-brand-magenta"></span>
      </MotionReveal>

      <div class="mx-auto max-w-7xl">
        <MotionReveal class="-mx-6 overflow-x-auto overscroll-x-contain px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" :delay="0.08">
          <div
            class="flex min-w-max gap-3 sm:mx-auto sm:w-fit"
            role="tablist"
            aria-label="Categorías de habilidades"
          >
            <button
              v-for="category in skillCategories"
              :id="`skills-tab-${category.id}`"
              :key="category.id"
              type="button"
              role="tab"
              :aria-selected="activeCategoryId === category.id"
              :aria-controls="`skills-panel-${category.id}`"
              class="rounded-full border px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-violet sm:px-6 sm:py-3"
              :class="
                activeCategoryId === category.id
                  ? 'border-transparent bg-linear-to-r from-brand-violet to-brand-magenta text-foreground shadow-lg shadow-brand-magenta/22'
                  : 'border-white/10 bg-[#151c29]/75 text-muted hover:border-brand-violet/30 hover:text-foreground'
              "
              @click="activeCategoryId = category.id"
            >
              {{ category.label }}
            </button>
          </div>
        </MotionReveal>

        <div class="mt-8 sm:mt-10">
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
              <MotionReveal class="mx-auto mb-6 max-w-3xl rounded-2xl border border-brand-violet/18 bg-white/2.5 px-5 py-4 text-center text-sm leading-relaxed text-muted sm:mb-8 sm:text-base" :delay="0.08">
                {{ activeCategory.description }}
              </MotionReveal>
              <div class="grid grid-cols-2 gap-x-2 gap-y-1 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-3 md:grid-cols-4 xl:grid-cols-5">
                <MotionReveal
                  v-for="(skill, index) in activeCategory.skills"
                  :key="skill.name"
                  :delay="index * 0.05"
                  y="16"
                >
                  <SkillCard :skill="skill" />
                </MotionReveal>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
