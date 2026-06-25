import { Component } from '@angular/core';
import { CONTACT } from '../../core/constants/contact.constants';
import { SOCIAL_LINKS } from '../../core/constants/social-links.constants';

@Component({
  selector: 'la-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly email = CONTACT.email;
  readonly phone = CONTACT.phone;
  readonly linkedin = SOCIAL_LINKS.linkedin;
}
