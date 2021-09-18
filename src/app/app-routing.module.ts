import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './views/about-me/about-me.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ProjectsComponent } from './views/projects/projects.component';

// Route order matters (it's a first-match wins strategy).
// More specific routes should be placed above less specific routes.
const routes: Routes = [
  {path: 'about-me', component: AboutMeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
