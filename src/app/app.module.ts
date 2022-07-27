import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {PersonsAdministrationModule} from "./persons-administration/persons-administration.module";
import {PersonModule} from "./person/person.module";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationComponent } from './shared/confirmation/confirmation.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { TopbarComponent } from './shared/admin-layout/components/topbar/topbar.component';
import { SidebarComponent } from './shared/admin-layout/components/sidebar/sidebar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AdminLayoutModule} from "./shared/admin-layout/admin-layout.module";

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    RouterModule,
    PersonModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
