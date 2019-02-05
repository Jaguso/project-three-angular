import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.uri}/users`);
  }

  getUserById(id) {
    return this.http.get(`${this.uri}/users/${id}`)
  }

  addUser(name, lastname, email) {
    const user = {
      name: name,
      lastname: lastname,
      email: email
    };
    return this.http.post(`${this.uri}/ussers/add`, user);
  }

  
}
