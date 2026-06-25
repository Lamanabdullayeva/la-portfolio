import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Hobby {
  name: string;
  slug: string;
  bg: string;
  color: string;
  description: string;
  hasLink: boolean;
  linkLabel?: string;
  linkUrl?: string;
}

@Component({
  selector: 'la-hobbies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent {
  readonly hobbies: Hobby[] = [
    {
      name: 'Jewellery Making',
      slug: 'jewellery',
      bg: '#4D342D',
      color: '#EDE7DB',
      description: 'I\'ve been making handmade jewellery since a very young age. Each piece is unique and crafted entirely from scratch with care and attention to detail. You can find my work on Instagram.',
      hasLink: true,
      linkLabel: 'View Gallery',
      linkUrl: '/jewellery',
    },
    {
      name: 'Sewing',
      slug: 'sewing',
      bg: '#9B9879',
      color: '#EDE7DB',
      description: 'Sewing is something I recently picked up and I am still learning. I love the idea of being able to create things with my own hands.',
      hasLink: false,
    },
    {
      name: 'Sport',
      slug: 'sport',
      bg: '#7A5A52',
      color: '#EDE7DB',
      description: 'I go to pilates and yoga regularly and try to make it to the gym at least once a week.',
      hasLink: false,
    },
    {
      name: 'Plants',
      slug: 'plants',
      bg: '#6A6A53',
      color: '#EDE7DB',
      description: 'I love taking care of our indoor plants and propagating new ones almost every spring.',
      hasLink: false,
    },
    {
      name: 'Anime / Manga / Books',
      slug: 'anime',
      bg: '#C4A882',
      color: '#4D342D',
      description: 'There are times I read manga, mostly Junji Ito horror, sometimes educational books or novels. I used to read a lot about astronomy, not as much anymore. I also like to watch anime. My absolute favourite is One Piece.',
      hasLink: false,
    },
    {
      name: 'Photography',
      slug: 'photography',
      bg: '#7A5A52',
      color: '#EDE7DB',
      description: 'I have been on both sides of the camera. I did photomodelling for a while and have experience as a model for portrait photography. These days I am also learning to photograph my own jewellery pieces.',
      hasLink: false,
    },
  ];
}
