import { Component, OnInit } from '@angular/core';
import {Person} from "../../model/person";
import {PersonService} from "../../services/person.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  persons: Person[] = [];
  personSelected: Person | undefined = undefined;

  constructor(private personService: PersonService,
              private router: Router) { }

  ngOnInit(): void {
    this.personService.findAll().subscribe(list => {
      this.persons = list
    })
  }

  goToDetail(p: Person) {
    this.router.navigate(['detail', p.id])
  }
}
