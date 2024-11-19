import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  headers = {};

  constructor(private http: HttpClient) {
    this.headers = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      }),
    };
  }

  addNewUser(newUser: User): Observable<User> {
    return this.http.post<User>(
      `${environment.baseUrl}/users`,
      newUser,
      this.headers
    );
  }
}
