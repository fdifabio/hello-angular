import { Component, OnInit } from '@angular/core';
import {Person} from "../../../model/person";
import {PersonService} from "../../../services/person.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];
  personSelected: Person | undefined = undefined;

  constructor(private personService: PersonService,
              private router: Router) { }

  ngOnInit(): void {
    this.personService.findAllSimple().subscribe(list => {
      this.persons = list
    })
  }



  selectPerson(p: Person) {
    this.personSelected = p;
  }
}
