import { Injectable } from '@angular/core';
import {catchError, first, map, mergeMap, Observable, of, throwError} from "rxjs";
import {Person} from "../model/person";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  resourceUrl = environment.backUrl + 'persons'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Person[]> {
    const authHeader = {
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZkaWZhYmlvQHVucm4uZWR1LmFyIiwic3ViIjoyNCwiaWF0IjoxNjU3NzYyNDY2LCJleHAiOjE2NTc3NjMzNjZ9.az6HIrCGLsQyxFtC05ruSZEJmwebWXGV9AfT9bxsjkI'
    }
    return this.http.get<Person[]>(this.resourceUrl, {headers: authHeader}).pipe(
      catchError( err => {
        console.log('Ocurrio un error', err)
        return throwError(() => 'Ocurrio un error');
      }),
      map(jsonList => jsonList.map(value => new Person(value.id, value.firstName, value.lastName, value.age))));
  }

  findOne(id: string): Observable<Person | null> {
    const authHeader = {
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZkaWZhYmlvQHVucm4uZWR1LmFyIiwic3ViIjoyNCwiaWF0IjoxNjU3NzYyNDY2LCJleHAiOjE2NTc3NjMzNjZ9.az6HIrCGLsQyxFtC05ruSZEJmwebWXGV9AfT9bxsjkI'
    }
    return this.http.get<Person>(this.resourceUrl + '/' + id, {headers: authHeader}).pipe(
      catchError( err => {
        console.log('Ocurrio un error', err)
        return throwError(() =>'La Persona no existe');
      }),
      map(json => new Person(json.id, json.firstName, json.lastName, json.age)));
  }

  findAllSimple(): Observable<Person[]> {
    return of(personList);
  }

  findOneSimple(id: string): Observable<Person | null> {
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
