import { Injectable, computed, signal } from "@angular/core";
import { Translations } from "./translations.interface";
import { EN } from "./en.translations";
import { DE } from "./de.translations";

export type Lang = "en" | "de";

const TRANSLATIONS: Record<Lang, Translations> = { en: EN, de: DE };

@Injectable({ providedIn: "root" })
export class TranslationService {
  private readonly _lang = signal<Lang>("en");

  readonly currentLang = this._lang.asReadonly();
  readonly t = computed<Translations>(() => TRANSLATIONS[this._lang()]);

  setLang(lang: Lang): void {
    this._lang.set(lang);
  }
}
