import { Component, inject } from '@angular/core';
import { CONTACT_ITEMS } from '../../core/constants/contact.constants';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'la-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly contactItems = CONTACT_ITEMS;
  readonly t = inject(TranslationService).t;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
