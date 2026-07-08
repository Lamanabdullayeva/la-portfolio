import { Component, HostListener, computed, inject, afterNextRender, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JewelleryImage } from '../../core/interfaces/jewellery-image.interface';
import { JEWELLERY_IMAGES } from '../../core/data/jewellery.data';
import { TranslationService } from '../../core/i18n/translation.service';
import { Translations } from '../../core/i18n/translations.interface';

@Component({
  selector: 'la-jewellery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './jewellery.component.html',
  styleUrl: './jewellery.component.scss',
})
export class JewelleryComponent {
  readonly images: JewelleryImage[] = JEWELLERY_IMAGES;
  activeIndex: number | null = null;

  private readonly ts: TranslationService = inject(TranslationService);
  readonly t: Signal<Translations> = this.ts.t;
  readonly homeLink: Signal<string> = computed(() => `/${this.ts.currentLang()}`);

  constructor() {
    afterNextRender(() => window.scrollTo(0, 0));
  }

  get activeImage(): JewelleryImage | null {
    return this.activeIndex !== null ? this.images[this.activeIndex] : null;
  }

  open(index: number): void { this.activeIndex = index; }
  close(): void              { this.activeIndex = null; }

  prev(): void {
    if (this.activeIndex !== null) {
      this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
    }
  }

  next(): void {
    if (this.activeIndex !== null) {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (this.activeIndex === null) return;
    if (e.key === 'ArrowLeft') this.prev();
    else if (e.key === 'ArrowRight') this.next();
    else if (e.key === 'Escape') this.close();
  }
}
