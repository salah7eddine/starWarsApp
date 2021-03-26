import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PeoplesService } from 'src/app/services/peoples.service';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css'],
})
export class PeopleEditComponent implements OnInit {
  personId: number;
  personFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peoplesService: PeoplesService,
    private fb: FormBuilder
  ) {
    this.personId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.peoplesService.getPeople(this.personId).subscribe((person) => {
      this.personFormGroup = this.fb.group({
        id: [person.id, Validators.required],
        name: [person.name, Validators.required],
        username: [person.username, Validators.required],
        email: [person.email, Validators.required],
        address: [person.address.city, Validators.required],
        phone: [person.phone, Validators.required],
        website: [person.website, Validators.required],
        company: [person.company.name, Validators.required],
      });
    });
  }

  onUpdatePerson() {
    this.peoplesService
      .updatePeople(this.personFormGroup?.value)
      .subscribe((data) => {
        alert('Success Person Updated');
      });
  }
}
