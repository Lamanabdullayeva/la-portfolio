import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE } from '../../core/data/experience.data';
import { EDUCATION } from '../../core/data/education.data';
import { SKILL_GROUPS, LANGUAGES } from '../../core/data/skills.data';

@Component({
  selector: 'la-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly skillGroups = SKILL_GROUPS;
  readonly languages = LANGUAGES;
}
