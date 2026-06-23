import { Component } from '@angular/core';
import { CV_LINKS } from '../../core/constants/cv-links.constants';

@Component({
  selector: 'la-cv-download',
  standalone: true,
  imports: [],
  templateUrl: './cv-download.component.html',
  styleUrl: './cv-download.component.scss',
})
export class CvDownloadComponent {
  readonly cv = CV_LINKS;
}
