# Laman Abdullayeva — Portfolio

Personal portfolio website built with Angular 18.

## Tech Stack

- Angular 18 (standalone components)
- TypeScript
- SCSS
- Angular Router

## Features

- Hero section with profile photo and quick-links
- Work page — screen recordings of implemented features
- CV section — experience, education, skills and languages
- Jewellery gallery — lightbox with keyboard navigation
- Hobbies section with skill tags
- Contact section
- Downloadable CV (EN / DE)
- Responsive design

## Getting Started

```bash
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Build

```bash
ng build
```

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── constants/   # nav links, hero content, CV links
│   │   ├── data/        # experience, education, skills, hobbies, jewellery, projects
│   │   └── interfaces/  # TypeScript interfaces
│   ├── features/
│   │   ├── hero/
│   │   ├── work/
│   │   ├── hobbies/
│   │   ├── contact/
│   │   ├── jewellery/   # standalone gallery page
│   │   └── projects/    # standalone work showcase page
│   └── shared/
│       └── components/
│           ├── nav/
│           └── badge/
└── assets/
```
