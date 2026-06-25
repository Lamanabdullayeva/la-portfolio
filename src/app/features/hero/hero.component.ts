import { Component } from '@angular/core';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { HeroBadge } from '../../core/interfaces/hero-badge.interface';
import { HERO, HERO_BADGES } from '../../core/constants/hero.constants';

@Component({
  selector: 'la-hero',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly name: string          = HERO.name;
  readonly greeting: string      = HERO.greeting;
  readonly pronunciation: string = HERO.pronunciation;
  readonly title: string         = HERO.title;
  readonly location: string      = HERO.location;
  readonly photo: string         = HERO.photo;
  readonly badges: HeroBadge[]   = HERO_BADGES;
}
