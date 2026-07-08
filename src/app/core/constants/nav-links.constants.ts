import { NavTranslations } from '../i18n/translations.interface';

export const NAV_LINKS: ReadonlyArray<{ key: keyof NavTranslations; fragment: string }> = [
  { key: 'home',    fragment: 'hero'    },
  { key: 'work',    fragment: 'work'    },
  { key: 'hobbies', fragment: 'hobbies' },
  { key: 'contact', fragment: 'contact' },
] as const;
