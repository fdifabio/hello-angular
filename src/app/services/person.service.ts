import { Injectable } from '@angular/core';
import {first, mergeMap, Observable, of} from "rxjs";
import {Person} from "../model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  findAll(): Observable<Person[]> {
    return of(personList);
  }

  findOne(id: string): Observable<Person | null> {
    return of(personList).pipe(mergeMap(p => p),
      first(person => person.id == parseInt(id), null));
  }
}

export const personList: Person[] = [
  new Person(1,'Juan', 'Perez', 15),
  new Person(2,'Jorge', 'Gomez', 20),
  new Person(3,'Maria', 'Sanchez', 19),
  new Person(4,'Estefania', 'Ramirez', 10),
  new Person(5,'Mark', 'Thompson', 35),
]
