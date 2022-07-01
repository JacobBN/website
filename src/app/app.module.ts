import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { CustomComponentsModule } from './components/custom-components.module';

import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { UnderConstructionComponent } from './views/under-construction/under-construction.component';
import { HomeComponent } from './views/home/home.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AboutMeComponent,
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    UnderConstructionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    NoopAnimationsModule,
    CustomComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
