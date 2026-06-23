export interface WorkEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  type: 'job' | 'internship' | 'research';
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}
