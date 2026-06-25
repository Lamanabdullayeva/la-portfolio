import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { JewelleryComponent } from './features/jewellery/jewellery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jewellery', component: JewelleryComponent },
];
