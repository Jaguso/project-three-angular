import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormGroupComponent } from './components/form-group/form-group.component';

import { UsersService } from './users.service';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsService } from './services/authors.service';

const routes: Routes = [
  { path: 'create', component: CreateUserComponent },
  { path: 'list', component: UsersListComponent },
  { path: 'form', component: FormGroupComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: '', redirectTo: 'create', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UsersListComponent,
    FormGroupComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsersService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
