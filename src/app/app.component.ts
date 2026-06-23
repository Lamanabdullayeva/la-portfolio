import { Component } from '@angular/core';
import { NavComponent } from './shared/components/nav/nav.component';
import { HeroComponent } from './features/hero/hero.component';
import { WorkComponent } from './features/work/work.component';
@Component({
  selector: 'la-root',
  standalone: true,
  imports: [NavComponent, HeroComponent, WorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
