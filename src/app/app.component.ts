import { Component } from '@angular/core';
import { NavComponent } from './shared/components/nav/nav.component';
import { HeroComponent } from './features/hero/hero.component';
import { WorkComponent } from './features/work/work.component';
import { HobbiesComponent } from './features/hobbies/hobbies.component';

@Component({
  selector: 'la-root',
  standalone: true,
  imports: [NavComponent, HeroComponent, WorkComponent, HobbiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
