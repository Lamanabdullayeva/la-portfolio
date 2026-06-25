import { Component, HostListener, OnInit, OnDestroy, NgZone } from '@angular/core';
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
export class NavComponent implements OnInit, OnDestroy {
  readonly navLinks: typeof NAV_LINKS = NAV_LINKS;
  readonly links: typeof SOCIAL_LINKS = SOCIAL_LINKS;
  readonly cv: typeof CV_LINKS        = CV_LINKS;
  readonly langs: ('EN' | 'DE')[]    = ['EN', 'DE'];

  lang: 'EN' | 'DE'  = 'EN';
  langOpen            = false;
  activeFragment      = 'hero';

  private observer: IntersectionObserver | null = null;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            this.zone.run(() => {
              this.activeFragment = entry.target.id;
            });
          }
        });
      },
      { threshold: 0, rootMargin: '-40% 0px -40% 0px' }
    );

    setTimeout(() => {
      this.navLinks.forEach(({ fragment }) => {
        const el = document.getElementById(fragment);
        if (el) this.observer!.observe(el);
      });
    }, 300);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

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
