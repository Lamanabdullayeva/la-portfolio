import { Component, HostListener } from '@angular/core';
import { SOCIAL_LINKS } from '../../../core/constants/social-links.constants';
import { CV_LINKS } from '../../../core/constants/cv-links.constants';

@Component({
  selector: 'la-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  readonly links = SOCIAL_LINKS;
  readonly cv = CV_LINKS;
  readonly langs: ('EN' | 'DE')[] = ['EN', 'DE'];
  lang: 'EN' | 'DE' = 'EN';
  langOpen = false;

  selectLang(option: 'EN' | 'DE'): void {
    this.lang = option;
    this.langOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav_lang')) {
      this.langOpen = false;
    }
  }
}
