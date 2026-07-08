import { Routes } from "@angular/router";
import { HomeComponent } from "./features/home/home.component";
import { JewelleryComponent } from "./features/jewellery/jewellery.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { langResolver } from "./core/guards/lang.resolver";

export const routes: Routes = [
  { path: "", redirectTo: "/en", pathMatch: "full" },
  { path: ":lang", component: HomeComponent, resolve: { lang: langResolver } },
  {
    path: ":lang/jewellery",
    component: JewelleryComponent,
    resolve: { lang: langResolver },
  },
  {
    path: ":lang/projects",
    component: ProjectsComponent,
    resolve: { lang: langResolver },
  },
];
