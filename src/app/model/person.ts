export class Person {
  id: number;
  firstName: string;
  lastName:string;
  age: number;


  constructor(id: number, name: string, lastName: string, age: number) {
    this.id = id;
    this.firstName = name;
    this.lastName = lastName;
    this.age = age;
  }

  showName(): string{
    return this.firstName + " " + this.lastName;
  }

  isAdult(): boolean {
    return this.age >= 18;
  }
}
