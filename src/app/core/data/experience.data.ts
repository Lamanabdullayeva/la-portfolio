import { WorkEntry } from '../models/portfolio.models';

export const EXPERIENCE: WorkEntry[] = [
  {
    company: 'simpleshow gmbh',
    role: 'Frontend Developer',
    period: 'Jun 2025 — May 2026',
    location: 'Berlin, Germany',
    type: 'job',
    description: [
      'Developed frontend features using Angular (v17+), TypeScript, HTML, CSS and RxJS.',
      'Implemented a video trimming feature.',
      'Optimised PPT upload with change history tracking.',
      'Built agentic video features — avatar selection, knowledge integration, interaction analytics.',
      'Created end-to-end tests with Cypress.',
    ],
    tags: ['Angular', 'TypeScript', 'RxJS', 'CSS', 'Cypress'],
  },
  {
    company: 'inno-focus digital gmbh',
    role: 'Frontend Developer',
    period: 'Apr 2022 — May 2025',
    location: 'Berlin, Germany',
    type: 'job',
    description: [
      'Built a user-centric web application for Reifen.com using Angular (v17+), TypeScript, RxJS and NgRx.',
      'Designed responsive layouts with Material UI, Kendo UI and Bootstrap.',
      'Maintained high code quality through Jasmine, Karma, code reviews and debugging in an agile environment (Azure DevOps, Git).',
    ],
    tags: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Material UI', 'Kendo UI', 'Bootstrap', 'Jasmine', 'Karma'],
  },
  {
    company: 'GFT Technologies SE',
    role: 'Frontend Developer',
    period: 'Jun 2020 — Mar 2022',
    location: 'Konstanz, Germany',
    type: 'job',
    description: [
      'Developed internal web applications for Audi and Daimler using Angular 9/13, TypeScript, Material UI and PrimeNG.',
      'Conducted unit tests and automated end-to-end tests with Selenium.',
    ],
    tags: ['Angular', 'TypeScript', 'Material UI', 'PrimeNG', 'Selenium'],
  },
  {
    company: 'metaphacts',
    role: 'Intern — Frontend Development',
    period: 'Mar 2019 — Jul 2019',
    location: 'Walldorf, Germany',
    type: 'internship',
    description: [
      'Contributed to the Metaphactory platform (Docker, AWS).',
      'Developed UI components using JavaScript, HTML, CSS and Bootstrap.',
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Docker', 'AWS'],
  },
  {
    company: 'Universität Konstanz',
    role: 'Research Associate — Computer & Information Science',
    period: 'Jan 2017 — Mar 2020',
    location: 'Konstanz, Germany',
    type: 'research',
    description: [
      'Developed a website for the DBVIS research group (HTML, CSS).',
      'Led tutorials for the "Introduction to Visualisation with D3" course.',
    ],
    tags: ['HTML', 'CSS', 'D3.js'],
  },
];
