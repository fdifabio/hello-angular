import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import {PersonsListComponent} from "./person-list/persons-list.component";
import {PersonInfoComponent} from "./person-info/person-info.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [PersonsListComponent, PersonInfoComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonModule { }
