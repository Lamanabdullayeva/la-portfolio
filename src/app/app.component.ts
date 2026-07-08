import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { NavComponent } from './shared/components/nav/nav.component';

@Component({
  selector: 'la-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    history.scrollRestoration = 'manual';
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const path = e.urlAfterRedirects.split('#')[0];
        const isHome = /^\/(en|de)\/?$/.test(path);
        if (!isHome) {
          window.scrollTo(0, 0);
        }
      });
  }
}
