import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { WorkComponent } from '../work/work.component';
import { HobbiesComponent } from '../hobbies/hobbies.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'la-home',
  standalone: true,
  imports: [HeroComponent, WorkComponent, HobbiesComponent, ContactComponent],
  template: `
    <la-hero />
    <la-work />
    <la-hobbies />
    <la-contact />
  `,
})
export class HomeComponent {}
