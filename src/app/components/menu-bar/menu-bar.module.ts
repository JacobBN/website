import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';

import { MenuBarComponent } from './menu-bar.component';
import { MenuBarActionsComponent } from './menu-bar-actions/menu-bar-actions.component';
import { MenuBarSocialComponent } from './menu-bar-social/menu-bar-social.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    MenuBarComponent,
    MenuBarActionsComponent,
    MenuBarSocialComponent,
  ],
  imports: [
    FontAwesomeModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    MenuBarComponent
  ]
})
export class MenuBarModule { }
