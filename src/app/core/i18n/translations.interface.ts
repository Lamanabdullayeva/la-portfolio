export interface NavTranslations {
  home: string;
  work: string;
  hobbies: string;
  contact: string;
  downloadCv: string;
}

export interface HeroTranslations {
  greeting: string;
  title: string;
  location: string;
  badgeWork: string;
  badgeJewellery: string;
}

export interface WorkTranslations {
  experience: string;
  education: string;
  skills: string;
  languages: string;
}

export interface HobbyContent {
  name: string;
  description: string;
  linkLabel?: string;
}

export interface ContactTranslations {
  title: string;
  backToTop: string;
}

export interface JewelleryTranslations {
  back: string;
  title: string;
  subtitle: string;
  backToTop: string;
}

export interface ProjectsTranslations {
  back: string;
  title: string;
  subtitle: string;
}

export interface ExperienceTranslation {
  role: string;
  description: string[];
}

export interface EducationTranslation {
  degree: string;
  field: string;
}

export interface WorkContentTranslations {
  experience: ExperienceTranslation[];
  education: EducationTranslation[];
  skillGroupLabels: string[];
  languages: { name: string; level: string }[];
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  work: WorkTranslations;
  workContent: WorkContentTranslations;
  hobbies: Record<string, HobbyContent>;
  contact: ContactTranslations;
  jewellery: JewelleryTranslations;
  projects: ProjectsTranslations;
}
