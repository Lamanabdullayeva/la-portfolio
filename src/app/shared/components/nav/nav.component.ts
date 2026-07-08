import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  NgZone,
  inject,
  computed,
} from "@angular/core";
import { Router, NavigationEnd, RouterLink } from "@angular/router";
import { filter, Subscription } from "rxjs";
import { SOCIAL_LINKS } from "../../../core/constants/social-links.constants";
import { CV_LINKS } from "../../../core/constants/cv-links.constants";
import { NAV_LINKS } from "../../../core/constants/nav-links.constants";
import { TranslationService } from "../../../core/i18n/translation.service";

@Component({
  selector: "la-nav",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.scss",
})
export class NavComponent implements OnInit, OnDestroy {
  readonly navLinks = NAV_LINKS;
  readonly links = SOCIAL_LINKS;
  readonly cv = CV_LINKS;
  readonly langs: ("EN" | "DE")[] = ["EN", "DE"];

  lang: "EN" | "DE" = "EN";
  langOpen = false;
  activeFragment = "hero";

  private readonly ts = inject(TranslationService);
  readonly t = this.ts.t;
  readonly langPrefix = computed(() => `/${this.ts.currentLang()}`);

  private observer: IntersectionObserver | null = null;
  private routerSub: Subscription | null = null;

  constructor(
    private zone: NgZone,
    private router: Router,
  ) {}

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
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" },
    );

    this.routerSub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const path = e.urlAfterRedirects.split("#")[0];
        const isHome = /^\/(en|de)\/?$/.test(path);
        this.observer!.disconnect();
        if (isHome) {
          setTimeout(() => this.observeSections(), 300);
        } else {
          this.activeFragment = "";
        }
      });

    const isHome = /^\/(en|de)\/?$/.test(this.router.url.split("#")[0]);
    if (isHome) {
      setTimeout(() => this.observeSections(), 300);
    } else {
      this.activeFragment = "";
    }
  }

  private observeSections(): void {
    this.observer!.disconnect();
    this.navLinks.forEach(({ fragment }) => {
      const el = document.getElementById(fragment);
      if (el) this.observer!.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.routerSub?.unsubscribe();
  }

  selectLang(option: "EN" | "DE"): void {
    this.lang = option;
    this.langOpen = false;
    const newLang = option.toLowerCase() as "en" | "de";
    this.ts.setLang(newLang);
    // Navigate to same sub-page in new language, or home if switching from home
    const currentPath = this.router.url.split("#")[0];
    const newPath = currentPath.replace(/^\/(en|de)/, `/${newLang}`);
    this.router.navigateByUrl(newPath);
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest(".nav_lang")) {
      this.langOpen = false;
    }
  }
}
