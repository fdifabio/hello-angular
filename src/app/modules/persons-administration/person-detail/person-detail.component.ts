import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../../model/person";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input() person: Person | undefined;

  nameControl: FormControl = new FormControl('', Validators.required)

  constructor() {
  }

  ngOnInit(): void {

  }
}
