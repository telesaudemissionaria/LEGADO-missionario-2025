
export type Language = 'PT' | 'EN' | 'ES';

export interface ContentStrings {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutText: string;
  galleryTitle: string;
  gallerySubtitle: string;
  galleryIntroTitle: string;
  galleryIntroText: string;
  footerText: string;
  navHome: string;
  navLegacy: string;
  tributeTitle: string;
  tributeDesc: string;
  tributePlaceholder: string;
  tributeButton: string;
  deathLabel: string;
}

export interface MissionaryProfile {
  id: string;
  name: string;
  dates: string;
  description: string;
  image: string;
  flag: string;
  deathInfo: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  caption: string;
  span: string; // Tailwind grid span class
}