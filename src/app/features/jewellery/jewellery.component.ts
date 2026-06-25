import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'la-jewellery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './jewellery.component.html',
  styleUrl: './jewellery.component.scss',
})
export class JewelleryComponent {
  readonly images: string[] = [];
}
