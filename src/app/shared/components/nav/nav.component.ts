import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SOCIAL_LINKS } from '../../../core/constants/social-links.constants';
import { CV_LINKS } from '../../../core/constants/cv-links.constants';
import { NAV_LINKS } from '../../../core/constants/nav-links.constants';

@Component({
  selector: 'la-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  readonly navLinks: typeof NAV_LINKS   = NAV_LINKS;
  readonly links: typeof SOCIAL_LINKS   = SOCIAL_LINKS;
  readonly cv: typeof CV_LINKS          = CV_LINKS;
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
