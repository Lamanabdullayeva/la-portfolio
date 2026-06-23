import { Component } from '@angular/core';
import { NavComponent } from './shared/components/nav/nav.component';
import { HeroComponent } from './features/hero/hero.component';

@Component({
  selector: 'la-root',
  standalone: true,
  imports: [NavComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
