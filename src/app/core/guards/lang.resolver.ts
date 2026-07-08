import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { TranslationService } from '../i18n/translation.service';

export const langResolver: ResolveFn<void> = (route: ActivatedRouteSnapshot) => {
  const lang = route.paramMap.get('lang');
  const ts = inject(TranslationService);
  if (lang === 'en' || lang === 'de') {
    ts.setLang(lang);
  }
};
