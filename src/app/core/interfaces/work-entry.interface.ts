export interface WorkEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  type: "job" | "internship" | "research";
}
