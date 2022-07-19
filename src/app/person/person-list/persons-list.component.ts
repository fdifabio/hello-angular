import {Component, OnInit} from '@angular/core';
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
              private router: Router) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.personService.findAll().subscribe(list => {
      this.persons = list
    })
  }

  goToDetail(p?: Person) {
    if (p)
      this.router.navigate(['detail', p.id])
    else
      this.router.navigate(['detail', ''])
  }

  delete(p: Person) {
    this.personService.delete(p.id).subscribe({
      next: () => {
        alert("Persona eliminada con exito")
        this.findAll()
      },
      error: (err) => alert(err)
    })
  }
}
