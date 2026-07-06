import { Component, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PROJECTS_LABELS } from '../../core/constants/projects.constants';

interface Project {
  title: string;
  description: string;
  tags: string[];
  videoUrl?: SafeResourceUrl;
}

@Component({
  selector: 'la-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly labels = PROJECTS_LABELS;
  readonly projects: Project[];

  openFullscreen(el: HTMLElement): void {
    if (el.requestFullscreen) el.requestFullscreen();
  }

  constructor(sanitizer: DomSanitizer) {
    afterNextRender(() => window.scrollTo(0, 0));
    this.projects = [
      {
        title: 'Video Trimming',
        description: 'An interactive video trimming tool allowing users to cut and adjust video segments directly in the browser.',
        tags: ['Angular', 'TypeScript', 'RxJS'],
        videoUrl: sanitizer.bypassSecurityTrustResourceUrl(
          'https://drive.google.com/file/d/1qoxKtTTUdxE9h_JDLoqOnWoDValfIT_2/preview'
        ),
      },
      {
        title: 'PPT Upload & Change History',
        description: 'Optimised PowerPoint upload flow with change history tracking, allowing users to review and revert slide modifications.',
        tags: ['Angular', 'TypeScript', 'RxJS'],
        videoUrl: sanitizer.bypassSecurityTrustResourceUrl(
          'https://drive.google.com/file/d/1wZd_dYUE1dxSpsVUErKuqnYMrzuOB1qq/preview'
        ),
      },
      {
        title: 'Agentic Video Features',
        description: 'AI-powered video creation pipeline including avatar selection, knowledge integration, and interaction analytics.',
        tags: ['Angular', 'TypeScript', 'RxJS'],
      },
    ];
  }
}
