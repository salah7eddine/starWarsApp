import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { map, catchError, startWith, every, filter } from 'rxjs/operators';

import { Person } from 'src/app/models/person.model';
import { PeoplesService } from 'src/app/services/peoples.service';
import { AppDataState, DataStateEnum } from 'src/app/state/people.state';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css'],
})
export class PeoplesComponent implements OnInit {
  peoples$: Observable<AppDataState<Person[]>> | null = null;
  peopleData: Person[] | null = null;

  readonly DataStateEnum = DataStateEnum;

  constructor(private peoplesService: PeoplesService, private router: Router) {}

  ngOnInit(): void {}

  onGetAllPeoples() {
    this.peoples$ = this.peoplesService.getAllPeoples().pipe(
      map((data) => {
        this.peopleData = data;
        return {
          dataState: DataStateEnum.LOADED,
          data: data,
        };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((err) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
      )
    );
  }

  onDeleteAllPeoples() {
    this.peoples$ = null;
  }

  onDelete(person: Person, index: number) {
    let v = confirm('Etes vous sure ?');
    if (v == true) {
      this.peopleData?.splice(index, 1);
      this.peoplesService.deletePeople(person).pipe(
        map((data) => {
          return {
            dataState: DataStateEnum.LOADED,
            data: data,
          };
        }),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError((err) =>
          of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
        )
      );
    }
  }

  onUpdate(p: Person) {
    this.router.navigateByUrl('updatePerson/' + p.id);
  }

  onSearch(dataForm: any) {
    console.log(dataForm);
    console.log(dataForm.keyword);
  }

  onNewPerson() {
    this.router.navigateByUrl('newPerson');
  }
}
