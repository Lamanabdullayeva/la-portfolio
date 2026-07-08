import { Component, computed, inject, Signal } from "@angular/core";
import { BadgeComponent } from "../../shared/components/badge/badge.component";
import { HERO } from "../../core/constants/hero.constants";
import { TranslationService } from "../../core/i18n/translation.service";
import { Translations } from "../../core/i18n/translations.interface";

@Component({
  selector: "la-hero",
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
})
export class HeroComponent {
  readonly photo: string = HERO.photo;
  readonly name: string = HERO.name;
  readonly pronunciation: string = HERO.pronunciation;

  private readonly ts: TranslationService = inject(TranslationService);
  readonly t: Signal<Translations> = this.ts.t;
  readonly projectsLink: Signal<string> = computed(
    () => `/${this.ts.currentLang()}/projects`,
  );
  readonly jewelleryLink: Signal<string> = computed(
    () => `/${this.ts.currentLang()}/jewellery`,
  );
}
