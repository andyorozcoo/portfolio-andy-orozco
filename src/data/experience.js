/**
 * @typedef {Object} ExperienceGalleryItem
 * @property {string} src
 * @property {string} alt
 * @property {string} title
 *
 * @typedef {Object} Experience
 * @property {string} id
 * @property {'education' | 'development' | 'projects'} type
 * @property {string} role
 * @property {string} organization
 * @property {string} area
 * @property {string} period
 * @property {string} description
 * @property {string[]} technologies
 * @property {ExperienceGalleryItem[]} [gallery]
 */

/** @type {Experience[]} */
export const experiences = [
  {
    id: 'estudiante-asistente',
    type: 'education',
    role: 'Estudiante Asistente',
    organization: 'Universidad Nacional',
    area: 'Área de Promoción Estudiantil / Fútbol',
    period: '2023 - Actualidad',
    description:
      'Apoyo en actividades deportivas, organización de convivios, logística de eventos, acompañamiento estudiantil y promoción de la participación universitaria.',
    technologies: ['Liderazgo', 'Trabajo en equipo', 'Organización', 'Comunicación', 'Disciplina'],
    gallery: [
      {
        src: '/images/experience/activity-1.jpg',
        alt: 'Convivios universitarios de la Universidad Nacional',
        title: 'Convivios universitarios',
      },
      {
        src: '/images/experience/activity-2.jpg',
        alt: 'Entrenamientos deportivos universitarios',
        title: 'Entrenamientos',
      },
      {
        src: '/images/experience/activity-3.jpg',
        alt: 'Torneos de futbol universitario',
        title: 'Torneos',
      },
      {
        src: '/images/experience/activity-4.jpg',
        alt: 'Actividades deportivas y trabajo en equipo',
        title: 'Actividades deportivas',
      },
    ],
  },
  {
    id: 'beto-y-mas',
    type: 'development',
    role: 'Beto y Más',
    organization: 'Sistema de fidelización y gamificación',
    area: 'Desarrollo Full Stack',
    period: '2025 - Actualidad',
    description:
      'Participación en el desarrollo de un sistema web de fidelización y gamificación con panel administrativo, juegos, recompensas, puntos y módulos para clientes.',
    technologies: ['Laravel', 'Vue 3', 'Inertia.js', 'MySQL', 'Docker', 'Railway', 'Scrum'],
  },
  {
    id: 'proyectos-academicos',
    type: 'projects',
    role: 'Proyectos académicos de software',
    organization: 'Universidad Nacional',
    area: 'Desarrollo de aplicaciones',
    period: '2024 - Actualidad',
    description:
      'Desarrollo de aplicaciones web, móviles y proyectos académicos aplicando arquitectura limpia, APIs REST, bases de datos relacionales, control de versiones y buenas prácticas de programación.',
    technologies: ['Vue', 'React', 'Android', 'Kotlin', 'Python', '.NET', 'GitHub'],
  },
]
