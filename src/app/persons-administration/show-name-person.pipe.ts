import { Pipe, PipeTransform } from '@angular/core';
import {Person} from "../model/person";

@Pipe({
  name: 'showNamePerson'
})
export class ShowNamePersonPipe implements PipeTransform {

  transform(person: Person): string {
    return showName(person);
  }

}

export function showName(person: Person): string{
  return person.showName() + ". Edad: " + person.age;
}
