import { Component } from '@angular/core';
import { CONTACT_ITEMS, CONTACT_LABELS } from '../../core/constants/contact.constants';

@Component({
  selector: 'la-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly contactItems: typeof CONTACT_ITEMS = CONTACT_ITEMS;
  readonly labels: typeof CONTACT_LABELS     = CONTACT_LABELS;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
