import { Component } from '@angular/core';

interface Hobby {
  name: string;
  slug: string;
  bg: string;
  color: string;
}

@Component({
  selector: 'la-hobbies',
  standalone: true,
  imports: [],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent {
  readonly hobbies: Hobby[] = [
    { name: 'Jewellery Making',    slug: 'jewellery',   bg: '#4D342D', color: '#EDE7DB' },
    { name: 'Sewing',              slug: 'sewing',      bg: '#9B9879', color: '#EDE7DB' },
    { name: 'Plants',              slug: 'plants',      bg: '#6A6A53', color: '#EDE7DB' },
    { name: 'Photography',         slug: 'photography', bg: '#7A5A52', color: '#EDE7DB' },
    { name: 'Travel',              slug: 'travel',      bg: '#DDCCB7', color: '#4D342D' },
    { name: 'Anime / Manga / Books', slug: 'anime',    bg: '#C4A882', color: '#4D342D' },
  ];
}
