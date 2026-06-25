import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'la-badge',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() label = '';
  @Input() link: string | null = null;
  @Input() fragment: string | null = null;
}
