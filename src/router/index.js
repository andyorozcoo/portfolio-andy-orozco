import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/inicio', redirect: { path: '/', hash: '#inicio' } },
  { path: '/sobre-mi', redirect: { path: '/', hash: '#sobre-mi' } },
  { path: '/experiencia', redirect: { path: '/', hash: '#experiencia' } },
  { path: '/proyectos', redirect: { path: '/', hash: '#proyecto' } },
  { path: '/proyecto', redirect: { path: '/', hash: '#proyecto' } },
  { path: '/habilidades', redirect: { path: '/', hash: '#habilidades' } },
  { path: '/stack', redirect: { path: '/', hash: '#habilidades' } },
  { path: '/certificaciones', redirect: { path: '/', hash: '#sobre-mi' } },
  { path: '/contacto', redirect: { path: '/', hash: '#contacto' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 88, behavior: 'smooth' }
    }

    return { top: 0 }
  },
})

export default router
