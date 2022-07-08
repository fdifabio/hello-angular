import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import {FormsModule} from "@angular/forms";
import { PersonListComponent } from './person-list/person-list.component';
import {ShowNamePersonPipe} from "./show-name-person.pipe";
import {ExamplePipe} from "./example.pipe";



@NgModule({
  declarations: [
    PersonDetailComponent,
    PersonListComponent,
    ShowNamePersonPipe,
    ExamplePipe
  ],
  exports: [
    PersonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PersonsAdministrationModule { }
