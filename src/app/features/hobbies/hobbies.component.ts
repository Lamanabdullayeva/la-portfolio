import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOBBIES } from '../../core/data/hobbies.data';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'la-hobbies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent {
  private readonly ts = inject(TranslationService);

  readonly langPrefix = computed(() => `/${this.ts.currentLang()}`);

  readonly hobbies = computed(() => {
    const tr = this.ts.t().hobbies;
    return HOBBIES.map(h => ({
      ...h,
      name: tr[h.slug]?.name ?? h.name,
      description: tr[h.slug]?.description ?? h.description,
      linkLabel: tr[h.slug]?.linkLabel ?? h.linkLabel,
    }));
  });
}
