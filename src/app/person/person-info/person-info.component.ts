import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../model/person";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  @Input() person: Person | undefined;

  constructor(private route: ActivatedRoute,
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
        this.personService.findOne(id).subscribe(res => {
          if (res)
            this.person = res;
        })
      }
    })
  }
}
