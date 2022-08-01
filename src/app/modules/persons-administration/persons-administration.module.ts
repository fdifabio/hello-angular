import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PersonListComponent } from './person-list/person-list.component';



@NgModule({
  declarations: [
    PersonDetailComponent,
    PersonListComponent
  ],
  exports: [
    PersonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonsAdministrationModule { }
