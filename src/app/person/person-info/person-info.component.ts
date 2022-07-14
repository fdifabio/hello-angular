import {Component, OnInit} from '@angular/core';
import {Person} from "../../model/person";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../../services/person.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  person: Person | undefined;

  personForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', [Validators.required, Validators.max(100)]]
  })

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private personService: PersonService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id)
        this.router.navigate(['list']);

      else {
        console.log('El Id es: ' + id)
        this.loadPerson(id);
      }
    })
  }

  loadPerson(id: string) {
    this.personService.findOne(id).subscribe(res => {
      if (res) {
        this.person = res;
        this.personForm.patchValue({
          name: this.person.firstName,
          lastName: this.person.lastName,
          age: this.person.age
        })
      }
    },
    error => {
      console.log('Error' + error);
    })
  }

  saveData() {

  }
}
