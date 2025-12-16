export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  imageUrl: string;
  category?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceStart: string;
  features: string[];
}

export interface GameState {
  clicks: number;
  yolkCurrency: number;
  clickPower: number;
  autoClickers: number;
  unlockedLore: string[];
}

export enum ViewState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  GUILDS = 'GUILDS',
  SOCIALS = 'SOCIALS',
  PARTNERS = 'PARTNERS',
  BLOG = 'BLOG',
  GAME = 'GAME',
  CONTACT = 'CONTACT'
}