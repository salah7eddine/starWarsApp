import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PeopleAddComponent } from './components/peoples/people-add/people-add.component';
import { PeopleEditComponent } from './components/peoples/people-edit/people-edit.component';
import { PeoplesComponent } from './components/peoples/peoples.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'peoples', component: PeoplesComponent },
  { path: 'newPerson', component: PeopleAddComponent },
  { path: 'updatePerson/:id', component: PeopleEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
