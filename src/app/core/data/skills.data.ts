import { SkillGroup, Language } from '../models/portfolio.models';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Core',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'RxJS', 'NgRx'],
  },
  {
    label: 'UI Libraries',
    items: ['Material UI', 'Bootstrap', 'Kendo UI'],
  },
  {
    label: 'Data Visualisation',
    items: ['D3.js', 'Plotly.js'],
  },
  {
    label: 'Testing',
    items: ['Cypress', 'Jasmine', 'Karma', 'Selenium'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Azure Repos', 'Azure DevOps', 'JIRA', 'Confluence', 'REST APIs', 'Swagger'],
  },
  {
    label: 'AI Tools',
    items: ['GitHub Copilot', 'Cursor AI'],
  },
];

export const LANGUAGES: Language[] = [
  { name: 'Azerbaijani', level: 'Native' },
  { name: 'Turkish',     level: 'Native' },
  { name: 'English',     level: 'Fluent' },
  { name: 'German',      level: 'Fluent' },
  { name: 'Russian',     level: 'Conversational' },
];
