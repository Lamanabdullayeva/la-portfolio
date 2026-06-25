import { Component } from '@angular/core';
import { EXPERIENCE } from '../../core/data/experience.data';
import { EDUCATION } from '../../core/data/education.data';
import { SKILL_GROUPS, LANGUAGES } from '../../core/data/skills.data';

@Component({
  selector: 'la-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  readonly experience: typeof EXPERIENCE = EXPERIENCE;
  readonly education: typeof EDUCATION = EDUCATION;
  readonly skillGroups: typeof SKILL_GROUPS = SKILL_GROUPS;
  readonly languages: typeof LANGUAGES = LANGUAGES;
}
