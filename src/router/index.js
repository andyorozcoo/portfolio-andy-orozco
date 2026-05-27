import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import CertificationsView from '../views/CertificationsView.vue'
import ContactView from '../views/ContactView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import SkillsView from '../views/SkillsView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/inicio', redirect: '/' },
  { path: '/sobre-mi', name: 'about', component: AboutView },
  { path: '/experiencia', name: 'experience', component: ExperienceView },
  { path: '/proyectos', name: 'projects', component: ProjectsView },
  { path: '/habilidades', name: 'skills', component: SkillsView },
  { path: '/certificaciones', name: 'certifications', component: CertificationsView },
  { path: '/contacto', name: 'contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
