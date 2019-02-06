import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  uri = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get(`${this.uri}/authors`);
  }

  addAuthor(name, nationality) {
    const author = {
      name: name, 
      nationality: nationality
    };
    return this.http.post(`${this.uri}/authors`, author);
  }
}
