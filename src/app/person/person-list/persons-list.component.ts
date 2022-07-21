import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from "../../model/person";
import {PersonService} from "../../services/person.service";
import {Router} from "@angular/router";
import {PersonGenericService} from "../../services/person-generic.service";
import {map, Subscription} from "rxjs";

@Component({
  selector: 'app-person-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit, OnDestroy {
  persons: Person[] = [];
  personSelected: Person | undefined = undefined;
  sub: Subscription[] = [];

  constructor(private personService: PersonGenericService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.findAll();
  }
  ngOnDestroy() {
   this.sub.forEach(s => s.unsubscribe())
  }

  findAll() {
    this.personService.findAll().subscribe(list => {
      this.persons = list.map(p => new Person(p.id, p.firstName, p.lastName, p.age))
    })
  }

  goToDetail(p?: Person) {
    if (p)
      this.router.navigate(['detail', p.id])
    else
      this.router.navigate(['detail', ''])
  }

  delete(p: Person) {
    this.sub.push(this.personService.delete(p.id).subscribe({
      next: () => {
        alert("Persona eliminada con exito")
        this.findAll()
      },
      error: (err) => alert(err),
    }));
  }
}
