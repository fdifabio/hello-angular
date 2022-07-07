export class Person {
  id: number;
  name: string;
  lastName:string;
  age: number;


  constructor(id: number, name: string, lastName: string, age: number) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  showName(): string{
    return this.name + " " + this.lastName;
  }

  isAdult(): boolean {
    return this.age >= 18;
  }
}
