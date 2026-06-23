import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../../core/constants/social-links.constants';

@Component({
  selector: 'la-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  readonly links = SOCIAL_LINKS;
}
