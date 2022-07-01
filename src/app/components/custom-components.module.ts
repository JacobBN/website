import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ContentBoxComponent } from './content-box/content-box.component';
import { MenuBarModule } from './menu-bar/menu-bar.module';
import { DigestComponent } from './digest/digest.component';

@NgModule({
  declarations: [
    ContentBoxComponent,
    DigestComponent
  ],
  imports: [
    // Fontawesome and Materials
    FontAwesomeModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTooltipModule
  ],
  exports: [
    ContentBoxComponent,
    DigestComponent,
    MenuBarModule
  ]
})
export class CustomComponentsModule { }
