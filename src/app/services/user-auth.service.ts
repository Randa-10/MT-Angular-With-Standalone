import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  userSubject: BehaviorSubject<boolean>;

  constructor() {
    this.userSubject = new BehaviorSubject<boolean>(false);
  }

  login(email: string, password: string) {
    //call api login get access token
    let token = '1234568566666';
    localStorage.setItem('userToken', token);
    this.userSubject.next(true);
  }
  logout() {
    localStorage.removeItem('userToken');
    this.userSubject.next(false);
  }

  get isUserLogged() {
    return localStorage.getItem('userToken') ? true : false;
  }
  getUserState() {
    return this.userSubject.asObservable();
  }
}
