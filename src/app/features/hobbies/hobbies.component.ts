import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hobby } from '../../core/interfaces/hobby.interface';
import { HOBBIES } from '../../core/data/hobbies.data';

@Component({
  selector: 'la-hobbies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent {
  readonly hobbies: Hobby[] = HOBBIES;
}
