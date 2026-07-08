import { Component, computed, inject } from '@angular/core';
import { EXPERIENCE } from '../../core/data/experience.data';
import { EDUCATION } from '../../core/data/education.data';
import { SKILL_GROUPS } from '../../core/data/skills.data';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'la-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  private readonly ts = inject(TranslationService);
  readonly t = this.ts.t;

  readonly experience = computed(() => {
    const tr = this.t().workContent.experience;
    return EXPERIENCE.map((e, i) => ({
      ...e,
      role: tr[i]?.role ?? e.role,
      description: tr[i]?.description ?? e.description,
    }));
  });

  readonly education = computed(() => {
    const tr = this.t().workContent.education;
    return EDUCATION.map((e, i) => ({
      ...e,
      degree: tr[i]?.degree ?? e.degree,
      field: tr[i]?.field ?? e.field,
    }));
  });

  readonly skillGroups = computed(() => {
    const labels = this.t().workContent.skillGroupLabels;
    return SKILL_GROUPS.map((g, i) => ({
      ...g,
      label: labels[i] ?? g.label,
    }));
  });

  readonly languages = computed(() => this.t().workContent.languages);
}
