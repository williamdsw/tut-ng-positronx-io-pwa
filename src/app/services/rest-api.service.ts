import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // FIELDS

  private apiUrl: string;

  // CONSTRUCTOR

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
  }

  // HELPER FUNCTIONS

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
