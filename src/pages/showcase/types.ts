export interface Showcase {
  showcaseId: number;
  title: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
}

export interface ShowcaseSection {
  sectionId: number;
  theme: string;
  title: string;
  showcases: Showcase[];
}
