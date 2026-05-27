import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import HomeView from '../views/HomeView.vue'
import SkillsView from '../views/SkillsView.vue'
import StackView from '../views/StackView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/inicio', redirect: '/' },
  { path: '/sobre-mi', name: 'about', component: AboutView },
  { path: '/experiencia', name: 'experience', component: ExperienceView },
  { path: '/stack', name: 'stack', component: StackView },
  { path: '/habilidades', name: 'skills', component: SkillsView },
  { path: '/proyectos', redirect: { path: '/', hash: '#proyecto-destacado' } },
  { path: '/certificaciones', redirect: '/sobre-mi' },
  { path: '/contacto', name: 'contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 96, behavior: 'smooth' }
    }

    return { top: 0 }
  },
})

export default router
