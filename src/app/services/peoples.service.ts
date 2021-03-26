import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PeoplesService {
  host = environment.host;
  constructor(private http: HttpClient) {}

  getAllPeoples(): Observable<Person[]> {
    // let host = Math.random() > 0.2 ? environment.host : environment.unreachableHost;
    return this.http.get<Person[]>(this.host + 'users/');
  }

  updatePeople(person: Person): Observable<Person> {
    return this.http.put<Person>(this.host + 'users/' + person.id, person);
  }

  deletePeople(person: Person): Observable<void> {
    return this.http.delete<void>(this.host + 'users/' + person.id);
  }

  savePeople(person: Person): Observable<Person> {
    return this.http.post<Person>(this.host + 'users/', person);
  }

  getPeople(id: number | null): Observable<Person> {
    return this.http.get<Person>(this.host + 'users/' + id);
  }
}
