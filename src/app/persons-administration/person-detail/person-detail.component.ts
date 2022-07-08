import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../model/person";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input() person: Person | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  showName(): string{
    return this.person!.showName()
  }
}
