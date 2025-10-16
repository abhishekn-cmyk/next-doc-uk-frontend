export interface AboutItem {
  title: string;
  description: string;
  icon?: string;
}

export interface Section {
  title: string;
  subtitle?: string;
  items: AboutItem[];
}

export interface IAbout {
  title: string;
  description: string;
  mission: AboutItem;
  vision: AboutItem;
  whyChoose: Section;
  researchAndDevelopment: Section;
  values: Section;
  createdAt: string;
  updatedAt: string;
}
