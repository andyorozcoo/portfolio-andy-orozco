import {
  siAndroidstudio,
  siBootstrap,
  siCss,
  siDocker,
  siDotnet,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siJetpackcompose,
  siKotlin,
  siLaravel,
  siMysql,
  siNodedotjs,
  siOpenapiinitiative,
  siOpenjdk,
  siPhp,
  siPostman,
  siRailway,
  siReact,
  siScrumalliance,
  siSpringboot,
  siTailwindcss,
  siTrello,
  siTypescript,
  siVercel,
  siVuedotjs,
} from 'simple-icons'

const swaggerIcon = {
  path: 'M7.2 4.3c-1.3 0-2.1.7-2.1 2v3.1c0 .8-.4 1.3-1.2 1.4v2.4c.8.1 1.2.6 1.2 1.4v3.1c0 1.3.8 2 2.1 2h1.5v-2.3h-.5c-.4 0-.6-.2-.6-.7v-2.8c0-1-.4-1.6-1.3-1.9.9-.3 1.3-.9 1.3-1.9V7.3c0-.5.2-.7.6-.7h.5V4.3H7.2Zm9.6 0h-1.5v2.3h.5c.4 0 .6.2.6.7v2.8c0 1 .4 1.6 1.3 1.9-.9.3-1.3.9-1.3 1.9v2.8c0 .5-.2.7-.6.7h-.5v2.3h1.5c1.3 0 2.1-.7 2.1-2v-3.1c0-.8.4-1.3 1.2-1.4v-2.4c-.8-.1-1.2-.6-1.2-1.4V6.3c0-1.3-.8-2-2.1-2ZM10 12a1.1 1.1 0 1 0 2.2 0A1.1 1.1 0 0 0 10 12Zm3.1 0a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0Z',
}

/**
 * @typedef {Object} Skill
 * @property {string} name
 * @property {string} mark
 * @property {{ path: string } | undefined} [icon]
 * @property {string} colorClass
 *
 * @typedef {Object} SkillCategory
 * @property {string} id
 * @property {string} label
 * @property {Skill[]} skills
 */

/** @type {SkillCategory[]} */
export const skillCategories = [
  {
    id: 'frontend',
    label: 'Front-End',
    skills: [
      { name: 'Vue.js', mark: 'Vue', icon: siVuedotjs, colorClass: 'text-[#4FC08D]' },
      { name: 'React', mark: 'Re', icon: siReact, colorClass: 'text-[#61DAFB]' },
      { name: 'JavaScript', mark: 'JS', icon: siJavascript, colorClass: 'text-[#F7DF1E]' },
      { name: 'TypeScript', mark: 'TS', icon: siTypescript, colorClass: 'text-[#3178C6]' },
      { name: 'HTML5', mark: 'H5', icon: siHtml5, colorClass: 'text-[#E34F26]' },
      { name: 'CSS3', mark: 'C3', icon: siCss, colorClass: 'text-[#1572B6]' },
      { name: 'Tailwind CSS', mark: 'TW', icon: siTailwindcss, colorClass: 'text-[#06B6D4]' },
      { name: 'Bootstrap', mark: 'BS', icon: siBootstrap, colorClass: 'text-[#7952B3]' },
    ],
  },
  {
    id: 'backend',
    label: 'Back-End',
    skills: [
      { name: 'PHP', mark: 'PHP', icon: siPhp, colorClass: 'text-[#777BB4]' },
      { name: 'Laravel', mark: 'Lv', icon: siLaravel, colorClass: 'text-[#FF2D20]' },
      { name: 'Java', mark: 'Java', icon: siOpenjdk, colorClass: 'text-[#437291]' },
      { name: '.NET', mark: '.N', icon: siDotnet, colorClass: 'text-[#512BD4]' },
      { name: 'REST APIs', mark: 'API', icon: siOpenapiinitiative, colorClass: 'text-[#6BA539]' },
      { name: 'Node.js', mark: 'Nd', icon: siNodedotjs, colorClass: 'text-[#5FA04E]' },
      { name: 'Spring Boot', mark: 'Sp', icon: siSpringboot, colorClass: 'text-[#6DB33F]' },
    ],
  },
  {
    id: 'databases',
    label: 'Bases de Datos',
    skills: [
      { name: 'MySQL', mark: 'My', icon: siMysql, colorClass: 'text-[#4479A1]' },
      { name: 'SQL Server', mark: 'SQL', colorClass: 'text-[#CC2927]' },
    ],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    skills: [
      { name: 'Git', mark: 'Git', icon: siGit, colorClass: 'text-[#F05032]' },
      { name: 'GitHub', mark: 'GH', icon: siGithub, colorClass: 'text-foreground' },
      { name: 'Docker', mark: 'Dk', icon: siDocker, colorClass: 'text-[#2496ED]' },
      { name: 'Vercel', mark: 'Vc', icon: siVercel, colorClass: 'text-foreground' },
      { name: 'Railway', mark: 'Rw', icon: siRailway, colorClass: 'text-foreground' },
      { name: 'Postman', mark: 'Pm', icon: siPostman, colorClass: 'text-[#FF6C37]' },
      { name: 'Swagger', mark: 'Sw', icon: swaggerIcon, colorClass: 'text-[#85EA2D]' },
    ],
  },
  {
    id: 'mobile',
    label: 'Móvil',
    skills: [
      { name: 'Android Studio', mark: 'An', icon: siAndroidstudio, colorClass: 'text-[#3DDC84]' },
      { name: 'Kotlin', mark: 'Kt', icon: siKotlin, colorClass: 'text-[#7F52FF]' },
      { name: 'Jetpack Compose', mark: 'JC', icon: siJetpackcompose, colorClass: 'text-[#4285F4]' },
      { name: 'Retrofit', mark: 'Rf', colorClass: 'text-[#48B983]' },
    ],
  },
  {
    id: 'methods',
    label: 'Metodologías',
    skills: [
      { name: 'Scrum', mark: 'Sc', icon: siScrumalliance, colorClass: 'text-[#009FDA]' },
      { name: 'Kanban', mark: 'Kb', icon: siTrello, colorClass: 'text-[#0052CC]' },
    ],
  },
]
