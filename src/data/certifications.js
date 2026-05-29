/**
 * @typedef {Object} Certification
 * @property {string} id
 * @property {'certificate' | 'achievement' | 'academic'} icon
 * @property {string} title
 * @property {string} type
 * @property {string} year
 * @property {string} description
 * @property {string} learning
 */

/** @type {Certification[]} */
export const certifications = [
  {
    id: 'scrum-fundamentals',
    icon: 'certificate',
    title: 'Scrum Fundamentals Certified',
    type: 'Certificación',
    year: '2026',
    description:
      'Certificación enfocada en los fundamentos de Scrum, roles, eventos, artefactos y principios ágiles aplicados al desarrollo de software.',
    learning: 'Organización del trabajo ágil, eventos Scrum y colaboración orientada a entregables.',
  },
  {
    id: 'merito-deportivo',
    icon: 'achievement',
    title: 'Estudiante Mérito 2024 - Área Deportiva',
    type: 'Reconocimiento',
    year: '2025',
    description:
      'Reconocimiento otorgado por el desempeño, compromiso y participación destacada en el área deportiva durante el año 2024 en la Universidad Nacional.',
    learning: 'Liderazgo, constancia y coordinación de actividades con la comunidad estudiantil.',
  },
  {
    id: 'merito-academico',
    icon: 'academic',
    title: 'Reconocimiento académico por buenas notas',
    type: 'Reconocimiento académico',
    year: '2025',
    description:
      'Reconocimiento otorgado por el buen desempeño académico y compromiso demostrado durante el proceso universitario.',
    learning: 'Disciplina de estudio, responsabilidad y mejora continua en la formación profesional.',
  },
]
