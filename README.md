# Laman Abdullayeva — Portfolio

Personal portfolio website built with Angular 18.

## Tech Stack

- Angular 18 (standalone components, Signals)
- TypeScript
- SCSS
- Angular Router

## Features

- **EN / DE i18n** — signal-based translations with URL-driven language routing (`/en`, `/de`); switching language preserves the current section
- Hero section with profile photo and quick-links
- Work page — screen recordings of implemented features
- CV section — experience, education, skills and languages (fully translated)
- Jewellery gallery — lightbox with keyboard navigation
- Hobbies section with skill tags
- Contact section
- Downloadable CV (EN / DE)
- Fully responsive — mobile-first layout with dynamic nav-height CSS variable

## Getting Started

```bash
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser. Navigates to `/en` by default.

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
│   │   ├── guards/      # lang resolver (sets language from :lang URL param)
│   │   ├── i18n/        # TranslationService, EN/DE translation files, interfaces
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

## i18n Architecture

Translations are managed with Angular Signals — no external library needed.

- `TranslationService` holds a `signal<'en'|'de'>` for the active language and a `computed<Translations>()` that returns the full translation object reactively.
- Components inject the service and expose `readonly t = ts.t`. Templates access translations as `t().nav.home`, `t().hero.title`, etc.
- The active language is set by a route resolver reading the `:lang` URL parameter, so direct links like `/de/jewellery` load in German automatically.
