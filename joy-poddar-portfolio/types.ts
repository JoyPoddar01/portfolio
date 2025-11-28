export interface EducationItem {
  id: number;
  degree: string;
  major: string;
  institute: string;
  board?: string;
  result: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface NavItem {
  label: string;
  href: string;
}