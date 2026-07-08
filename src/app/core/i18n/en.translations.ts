import { Translations } from "./translations.interface";

export const EN: Translations = {
  nav: {
    home: "Home",
    work: "Work",
    hobbies: "Hobbies",
    contact: "Contact",
    downloadCv: "Download my CV",
  },

  hero: {
    greeting: "Hello, I'm Laman",
    title: "Senior Frontend Developer & Jewellery Maker",
    location: "based in Berlin.",
    badgeWork: "My Work",
    badgeJewellery: "My Jewellery",
  },

  work: {
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
  },

  workContent: {
    experience: [
      {
        role: "Frontend Developer",
        description: [
          "Developed frontend features using Angular (v17+), TypeScript, HTML, CSS and RxJS.",
          "Implemented a video trimming feature.",
          "Optimised PPT upload with change history tracking.",
          "Built agentic video features — avatar selection, knowledge integration, interaction analytics.",
          "Created end-to-end tests with Cypress.",
        ],
      },
      {
        role: "Frontend Developer",
        description: [
          "Built a user-centric web application for Reifen.com using Angular (v17+), TypeScript, RxJS and NgRx.",
          "Designed responsive layouts with Material UI, Kendo UI and Bootstrap.",
          "Maintained high code quality through Jasmine, Karma, code reviews and debugging in an agile environment (Azure DevOps, Git).",
        ],
      },
      {
        role: "Frontend Developer",
        description: [
          "Developed internal web applications for Audi and Daimler using Angular 9/13, TypeScript, Material UI and PrimeNG.",
          "Conducted unit tests and automated end-to-end tests with Selenium.",
        ],
      },
      {
        role: "Intern — Frontend Development",
        description: [
          "Contributed to the Metaphactory platform (Docker, AWS).",
          "Developed UI components using JavaScript, HTML, CSS and Bootstrap.",
        ],
      },
      {
        role: "Research Associate — Computer & Information Science",
        description: [
          "Developed a website for the DBVIS research group (HTML, CSS).",
          'Led tutorials for the "Introduction to Visualisation with D3" course.',
        ],
      },
    ],
    education: [
      { degree: "Master of Science", field: "Computer & Information Science" },
      { degree: "Bachelor of Science", field: "Computer Science" },
    ],
    skillGroupLabels: [
      "Core",
      "UI Libraries",
      "Data Visualisation",
      "Testing",
      "Tools & Platforms",
      "AI Tools",
    ],
    languages: [
      { name: "Azerbaijani", level: "Native" },
      { name: "Turkish", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "German", level: "Fluent" },
      { name: "Russian", level: "Conversational" },
    ],
  },

  hobbies: {
    jewellery: {
      name: "Jewellery Making",
      description:
        "I've been making handmade jewellery since a very young age. Each piece is unique and crafted entirely from scratch with care and attention to detail. You can find my work on Instagram.",
      linkLabel: "View Gallery",
    },
    sewing: {
      name: "Sewing",
      description:
        "Sewing is something I recently picked up and I am still learning. I love the idea of being able to create things with my own hands.",
    },
    community: {
      name: "People & Community",
      description:
        "I like spending time with friends, doing sports together, going out, or just catching up.\nI also volunteer with Serve the City, visiting elderly people from nursing homes for walks, bingo and other activities.",
    },
    sport: {
      name: "Sport",
      description:
        "I go to pilates and yoga regularly and try to make it to the gym at least once a week.",
    },
    nature: {
      name: "Nature & Outdoors",
      description:
        "Whenever I get the chance I love being outside in nature. Camping and trekking trips, lake days, paddle boarding, snorkelling and collecting shells are some of my favourite activities. I also tried surfing and I am still very much a beginner.",
    },
    anime: {
      name: "Books / Manga / Anime",
      description:
        "There are times I read manga, mostly Junji Ito horror, sometimes educational books or novels. I used to read a lot about astronomy, not as much anymore. I also like to watch anime. My absolute favourite is One Piece.",
    },
    photography: {
      name: "Photography",
      description:
        "I have been on both sides of the camera. I did photomodelling for a while and have experience as a model for portrait photography. These days I am also learning to photograph my own jewellery pieces.",
    },
    plants: {
      name: "Plants",
      description:
        "I love taking care of our indoor and outdoor plants and propagating new ones almost every spring.",
    },
  },

  contact: {
    title: "Contact me",
    backToTop: "↑ Back to top",
  },

  jewellery: {
    back: "← Back",
    title: "Jewellery",
    subtitle: "Handmade pieces, crafted from scratch.",
    backToTop: "↑ Back to top",
  },

  projects: {
    back: "← Back",
    title: "My Work",
    subtitle: "simpleshow gmbh · Frontend Developer",
  },
};
