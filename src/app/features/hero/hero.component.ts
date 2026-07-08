import { Component, computed, inject } from '@angular/core';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { HERO } from '../../core/constants/hero.constants';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'la-hero',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly photo         = HERO.photo;
  readonly name          = HERO.name;
  readonly pronunciation = HERO.pronunciation;

  private readonly ts    = inject(TranslationService);
  readonly t             = this.ts.t;
  readonly projectsLink  = computed(() => `/${this.ts.currentLang()}/projects`);
  readonly jewelleryLink = computed(() => `/${this.ts.currentLang()}/jewellery`);
}
