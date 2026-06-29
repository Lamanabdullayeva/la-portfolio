import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
  title: string;
  description: string;
  tags: string[];
  videoUrl?: string;
}

@Component({
  selector: 'la-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  readonly projects: Project[] = [
    {
      title: 'Video Trimming',
      description: 'An interactive video trimming tool allowing users to cut and adjust video segments directly in the browser.',
      tags: ['Angular', 'TypeScript', 'RxJS'],
    },
    {
      title: 'PPT Upload & Change History',
      description: 'Optimised PowerPoint upload flow with change history tracking — users can review and revert slide modifications.',
      tags: ['Angular', 'TypeScript', 'RxJS'],
    },
    {
      title: 'Agentic Video Features',
      description: 'AI-powered video creation pipeline including avatar selection, knowledge integration, and interaction analytics.',
      tags: ['Angular', 'TypeScript', 'RxJS'],
    },
  ];

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
