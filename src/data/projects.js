/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string[]} technologies
 * @property {string} image
 * @property {string} repositoryUrl
 * @property {string} demoUrl
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'beto-y-mas',
    title: 'Beto y Más',
    description:
      'Sistema web de fidelización y gamificación con panel administrativo, juegos, puntos, recompensas y módulos para clientes.',
    technologies: ['Laravel', 'Vue 3', 'Inertia.js', 'MySQL', 'Docker', 'Railway', 'Scrum'],
    image: '/images/projects/beto-y-mas.jpg',
    repositoryUrl: '#',
    demoUrl: '#',
  },
  {
    id: 'cima',
    title: 'Aplicación Financiera CIMA',
    description:
      'Aplicación móvil financiera desarrollada con Android, MVVM, Clean Architecture, Retrofit y persistencia de sesión.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'MVVM', 'Clean Architecture'],
    image: '/images/projects/cima.jpg',
    repositoryUrl: '#',
    demoUrl: '#',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Personal',
    description:
      'Portafolio profesional desarrollado con Vue 3, Vite y Tailwind CSS, enfocado en mostrar proyectos, experiencia y habilidades.',
    technologies: ['Vue 3', 'Vite', 'Tailwind CSS', 'Vercel'],
    image: '/images/projects/portfolio.jpg',
    repositoryUrl: '#',
    demoUrl: '#',
  },
]
