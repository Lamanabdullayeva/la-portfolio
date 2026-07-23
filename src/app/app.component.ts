import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet, NavigationStart, NavigationEnd } from "@angular/router";
import { filter } from "rxjs";
import { NavComponent } from "./shared/components/nav/nav.component";

@Component({
  selector: "la-root",
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    history.scrollRestoration = "manual";
    this.router.events
      .pipe(filter((e) => e instanceof NavigationStart || e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const url: string = e.url ?? e.urlAfterRedirects;
        if (!url.includes("#")) {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      });
  }
}
