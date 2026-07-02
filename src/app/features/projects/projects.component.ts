import { Component, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  readonly projects: Project[];

  constructor(sanitizer: DomSanitizer) {
    afterNextRender(() => window.scrollTo(0, 0));
    this.projects = [
      {
        title: 'Video Trimming',
        description: 'An interactive video trimming tool allowing users to cut and adjust video segments directly in the browser.',
        tags: ['Angular', 'TypeScript', 'RxJS'],
        videoUrl: sanitizer.bypassSecurityTrustResourceUrl(
          'https://drive.google.com/file/d/1A1ScOoSrnGn-Ejq5eN4S-JyHBVuNEu_a/preview'
        ),
      },
      {
        title: 'PPT Upload & Change History',
        description: 'Optimised PowerPoint upload flow with change history tracking, allowing users to review and revert slide modifications.',
        tags: ['Angular', 'TypeScript', 'RxJS'],
        videoUrl: sanitizer.bypassSecurityTrustResourceUrl(
          'https://drive.google.com/file/d/1WQOE8QiagflgcephbLyubBtqAyG5edFy/preview'
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
