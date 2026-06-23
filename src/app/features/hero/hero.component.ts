import { Component } from '@angular/core';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({
  selector: 'la-hero',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly name = 'Laman Abdullayeva';
  readonly greeting = "Hello, I'm Laman";
  readonly pronunciation = '[Læman]';
  readonly title = 'Senior Frontend Developer & Jewellery Maker';
  readonly location = 'based in Berlin.';
  readonly photo = 'assets/profile_photo.jpg'; // replace with actual filename
  readonly badges = ['My Work', 'My Jewellery'];
}
