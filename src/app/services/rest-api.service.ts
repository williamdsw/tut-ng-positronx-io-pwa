import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // FIELDS

  private url: string;

  // CONSTRUCTOR

  constructor(private httpClient: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/users';
  }

  // HELPER FUNCTIONS

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }
}
