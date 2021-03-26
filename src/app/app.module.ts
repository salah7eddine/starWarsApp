import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { PeopleItemComponent } from './components/peoples/peoples-list/people-item/people-item.component';
import { PeoplesNavBarComponent } from './components/peoples/peoples-nav-bar/peoples-nav-bar.component';
import { PeoplesListComponent } from './components/peoples/peoples-list/peoples-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleAddComponent } from './components/peoples/people-add/people-add.component';
import { PeopleEditComponent } from './components/peoples/people-edit/people-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    PeoplesComponent,
    PeopleItemComponent,
    PeoplesNavBarComponent,
    PeoplesListComponent,
    PeopleAddComponent,
    PeopleEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
