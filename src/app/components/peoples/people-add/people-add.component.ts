import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeoplesService } from 'src/app/services/peoples.service';

@Component({
  selector: 'app-people-add',
  templateUrl: './people-add.component.html',
  styleUrls: ['./people-add.component.css'],
})
export class PeopleAddComponent implements OnInit {
  personFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private peoplesService: PeoplesService
  ) {}

  ngOnInit(): void {
    this.personFormGroup = this.fb.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      company: ['', Validators.required],
    });
  }

  onSavePerson() {
    this.submitted = true;
    if (this.personFormGroup?.invalid) return;
    this.peoplesService
      .savePeople(this.personFormGroup?.value)
      .subscribe((data) => {
        alert('Success Saving product');
      });
  }
}
