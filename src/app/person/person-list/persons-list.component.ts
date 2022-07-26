import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from "../../model/person";
import {PersonService} from "../../services/person.service";
import {Router} from "@angular/router";
import {PersonGenericService} from "../../services/person-generic.service";
import {map, Subscription} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationComponent} from "../../shared/confirmation/confirmation.component";

@Component({
  selector: 'app-person-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit, OnDestroy {
  persons: Person[] = [];
  personSelected: Person | undefined = undefined;
  sub: Subscription[] = [];
  loading = true;

  displayedColumns: string[] = ['name', 'lastName', 'age', 'options'];

  constructor(private personService: PersonGenericService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.findAll();
  }
  ngOnDestroy() {
   this.sub.forEach(s => s.unsubscribe())
  }

  findAll() {
    this.loading = true;
    this.personService.findAll().subscribe(list => {
      this.loading = false;
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
    const dialogRef = this.dialog.open(ConfirmationComponent)
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.sub.push(this.personService.delete(p.id).subscribe({
          next: () => {
            alert("Persona eliminada con exito")
            this.findAll()
          },
          error: (err) => alert(err),
        }));
      }
    })
  }
}
