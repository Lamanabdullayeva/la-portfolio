import { HeroBadge } from '../interfaces/hero-badge.interface';

export const HERO = {
  name:          'Laman Abdullayeva',
  greeting:      "Hello, I'm Laman",
  pronunciation: '[Leman, Läman]',
  title:         'Senior Frontend Developer & Jewellery Maker',
  location:      'based in Berlin.',
  photo:         'assets/profile_photo.JPG',
} as const;

export const HERO_BADGES: HeroBadge[] = [
  { label: 'My Work',      link: '/projects',   fragment: null   },
  { label: 'My Jewellery', link: '/jewellery',  fragment: null   },
];
