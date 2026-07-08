import { Component } from "@angular/core";
import { CvLink } from "../../core/interfaces/cv-link.interface";
import { CV_LINKS } from "../../core/constants/cv-links.constants";

@Component({
  selector: "la-cv-download",
  standalone: true,
  imports: [],
  templateUrl: "./cv-download.component.html",
  styleUrl: "./cv-download.component.scss",
})
export class CvDownloadComponent {
  readonly cvEntries: CvLink[] = Object.values(CV_LINKS);
}
