import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { WorkComponent } from '../work/work.component';
import { HobbiesComponent } from '../hobbies/hobbies.component';

@Component({
  selector: 'la-home',
  standalone: true,
  imports: [HeroComponent, WorkComponent, HobbiesComponent],
  template: `
    <la-hero />
    <la-work />
    <la-hobbies />
  `,
})
export class HomeComponent {}
