import { Translations } from "./translations.interface";

export const DE: Translations = {
  nav: {
    home: "Home",
    work: "Beruf",
    hobbies: "Hobbys",
    contact: "Kontakt",
    downloadCv: "Lebenslauf herunterladen",
  },

  hero: {
    greeting: "Hallo, ich bin Laman",
    title: "Senior Frontend Entwicklerin & Schmuckkünstlerin",
    location: "wohnhaft in Berlin.",
    badgeWork: "Meine Arbeit",
    badgeJewellery: "Mein Schmuck",
  },

  work: {
    experience: "Erfahrung",
    education: "Ausbildung",
    skills: "Fähigkeiten",
    languages: "Sprachen",
  },

  workContent: {
    experience: [
      {
        role: "Frontend Entwicklerin",
        description: [
          "Frontend-Features mit Angular (v17+), TypeScript, HTML, CSS und RxJS entwickelt.",
          "Ein Video-Trimming-Feature implementiert.",
          "Den PPT-Upload mit Change-History-Tracking optimiert.",
          "Agentische Video-Features entwickelt – Avatar-Auswahl, Wissensintegration, Interaktionsanalyse.",
          "End-to-End-Tests mit Cypress erstellt.",
        ],
      },
      {
        role: "Frontend Entwicklerin",
        description: [
          "Eine nutzerzentrierte Webanwendung für Reifen.com mit Angular (v17+), TypeScript, RxJS und NgRx entwickelt.",
          "Responsive Layouts mit Material UI, Kendo UI und Bootstrap gestaltet.",
          "Hohe Codequalität durch Jasmine, Karma, Code-Reviews und Debugging in einem agilen Umfeld (Azure DevOps, Git) sichergestellt.",
        ],
      },
      {
        role: "Frontend Entwicklerin",
        description: [
          "Interne Webanwendungen für Audi und Daimler mit Angular 9/13, TypeScript, Material UI und PrimeNG entwickelt.",
          "Unit-Tests und automatisierte End-to-End-Tests mit Selenium durchgeführt.",
        ],
      },
      {
        role: "Praktikantin – Frontend-Entwicklung",
        description: [
          "Zur Metaphactory-Plattform beigetragen (Docker, AWS).",
          "UI-Komponenten mit JavaScript, HTML, CSS und Bootstrap entwickelt.",
        ],
      },
      {
        role: "Wissenschaftliche Mitarbeiterin – Informatik",
        description: [
          "Eine Website für die DBVIS-Forschungsgruppe entwickelt (HTML, CSS).",
          'Tutorien für den Kurs „Einführung in die Visualisierung mit D3" geleitet.',
        ],
      },
    ],
    education: [
      { degree: "Master of Science", field: "Informatik" },
      { degree: "Bachelor of Science", field: "Informatik" },
    ],
    skillGroupLabels: [
      "Kerntechnologien",
      "UI-Bibliotheken",
      "Datenvisualisierung",
      "Testing",
      "Tools & Plattformen",
      "KI-Tools",
    ],
    languages: [
      { name: "Aserbaidschanisch", level: "Muttersprache" },
      { name: "Türkisch", level: "Muttersprache" },
      { name: "Englisch", level: "Fließend" },
      { name: "Deutsch", level: "Fließend" },
      { name: "Russisch", level: "Konversationsniveau" },
    ],
  },

  hobbies: {
    jewellery: {
      name: "Schmuck herstellen",
      description:
        "Ich stelle seit frühester Kindheit handgemachten Schmuck her. Jedes Stück ist einzigartig und wird mit Sorgfalt und Liebe zum Detail von Grund auf neu gefertigt. Meine Arbeiten findest du auf Instagram.",
      linkLabel: "Galerie ansehen",
    },
    sewing: {
      name: "Nähen",
      description:
        "Nähen ist etwas, womit ich erst kürzlich angefangen habe – ich lerne noch. Ich liebe die Idee, Dinge mit meinen eigenen Händen zu erschaffen.",
    },
    community: {
      name: "Menschen & Gemeinschaft",
      description:
        "Ich verbringe gerne Zeit mit Freunden, mache gemeinsam Sport, gehe aus oder halte einfach Kontakt.\nIch engagiere mich auch bei Serve the City, wo ich ältere Menschen aus Pflegeheimen bei Spaziergängen, Bingo und anderen Aktivitäten begleite.",
    },
    sport: {
      name: "Sport",
      description:
        "Ich gehe regelmäßig zu Pilates, Bouldern und Yoga und versuche, mindestens einmal pro Woche ins Fitnessstudio zu gehen.",
    },
    nature: {
      name: "Natur & Outdoor",
      description:
        "Wann immer ich die Möglichkeit habe, bin ich gerne draußen in der Natur. Camping- und Trekking-Touren, Tage am See, Paddleboarding, Schnorcheln und Muscheln sammeln gehören zu meinen Lieblingsaktivitäten. Ich habe auch Surfen ausprobiert und bin noch ganz am Anfang.",
    },
    anime: {
      name: "Bücher / Manga / Anime",
      description:
        "Manchmal lese ich Manga – meistens Junji-Ito-Horror –, manchmal Sachbücher oder Romane. Früher habe ich viel über Astronomie gelesen, heute nicht mehr so oft. Ich schaue auch gerne Anime. Mein absoluter Favorit ist One Piece.",
    },
    photography: {
      name: "Fotografie",
      description:
        "Ich war auf beiden Seiten der Kamera. Ich habe eine Zeit lang als Fotomodell gearbeitet und Erfahrung als Model für Porträtfotografie gesammelt. Derzeit lerne ich auch, meine eigenen Schmuckstücke zu fotografieren.",
    },
    plants: {
      name: "Pflanzen",
      description:
        "Ich liebe es, mich um unsere Zimmer- und Gartenpflanzen zu kümmern und jeden Frühling neue zu vermehren.",
    },
  },

  contact: {
    title: "Kontakt",
    backToTop: "↑ Nach oben",
  },

  jewellery: {
    back: "← Zurück",
    title: "Schmuck",
    subtitle: "Handgefertigte Stücke, von Grund auf neu gestaltet.",
    backToTop: "↑ Nach oben",
  },

  projects: {
    back: "← Zurück",
    title: "Meine Arbeit",
    subtitle: "simpleshow gmbh · Frontend Entwicklerin",
  },
};
