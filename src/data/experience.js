/**
 * @typedef {Object} ExperienceGalleryItem
 * @property {string} src
 * @property {string} alt
 * @property {string} title
 * @property {string} [description]
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
        src: '/images/experience/assistant-activity-01.jpg',
        alt: 'Actividad grupal de integración universitaria en la Universidad Nacional',
        title: 'Participación universitaria',
        description: 'Acompañamiento en dinámicas de integración, convivencia y trabajo en equipo.',
      },
      {
        src: '/images/experience/assistant-activity-02.jpg',
        alt: 'Dinámica recreativa con estudiantes en actividad universitaria',
        title: 'Actividades institucionales',
        description: 'Apoyo logístico y coordinación de espacios recreativos para estudiantes.',
      },
      {
        src: '/images/experience/assistant-heredia.jpg',
        alt: 'Equipo de fútbol universitario durante indicaciones técnicas',
        title: 'Área deportiva',
        description: 'Acompañamiento en procesos deportivos y comunicación con equipos universitarios.',
      },
      {
        src: '/images/experience/assistant-cycle-02.jpg',
        alt: 'Grupo de estudiantes participando en actividad de inicio de ciclo',
        title: 'Inicio de ciclo',
        description: 'Participación activa en actividades de bienvenida e integración estudiantil.',
      },
      {
        src: '/images/experience/assistant-cycle-03.jpg',
        alt: 'Equipo de promoción estudiantil dando indicaciones a estudiantes',
        title: 'Liderazgo estudiantil',
        description: 'Organización, orientación y apoyo directo durante actividades universitarias.',
      },
      {
        src: '/images/experience/assistant-cycle-01.jpg',
        alt: 'Estudiantes asistentes coordinando una dinámica al aire libre',
        title: 'Trabajo en equipo',
        description: 'Coordinación colaborativa para ejecutar dinámicas seguras y ordenadas.',
      },
      {
        src: '/images/experience/assistant-limon.jpg',
        alt: 'Equipo universitario de fútbol recibiendo indicaciones en Limón',
        title: 'Representación deportiva',
        description: 'Acompañamiento en torneos y espacios de representación universitaria.',
      },
      {
        src: '/images/experience/assistant-perez.jpg',
        alt: 'Grupo universitario reunido en actividad institucional',
        title: 'Convivencia universitaria',
        description: 'Espacios que fortalecen disciplina, compañerismo y sentido de pertenencia.',
      },
      {
        src: '/images/experience/assistant-open-doors-02.jpg',
        alt: 'Estudiantes de Ingeniería en Sistemas en actividad de puertas abiertas',
        title: 'Puertas abiertas',
        description: 'Participación en actividades institucionales y promoción de vida universitaria.',
      },
      {
        src: '/images/experience/assistant-open-doors-01.jpg',
        alt: 'Actividad deportiva con estudiantes durante puertas abiertas',
        title: 'Promoción estudiantil',
        description: 'Apoyo en dinámicas deportivas para acercar la universidad a nuevos estudiantes.',
      },
      {
        src: '/images/experience/assistant-puerto-viejo.jpg',
        alt: 'Actividad recreativa con estudiantes en Puerto Viejo',
        title: 'Disciplina y recreación',
        description: 'Organización de actividades que combinan deporte, convivencia y liderazgo.',
      },
      {
        src: '/images/experience/assistant-team.jpg',
        alt: 'Equipo de estudiantes asistentes de la Universidad Nacional',
        title: 'Equipo UNA',
        description: 'Trabajo colaborativo con estudiantes asistentes y el área de promoción estudiantil.',
      },
    ],
  },
]
