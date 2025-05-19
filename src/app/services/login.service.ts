import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { LoginPayload, LoginResponse } from '../models/model';


@Injectable({
  providedIn: 'root'
})


export class LoginService {
  readonly mockUser = {
    email: 'user@gmail.com',
    password: 'Test12',
  };

  constructor() { }

  login(credentials:LoginPayload): Observable<LoginResponse> {
    if (credentials.email === this.mockUser.email && credentials.password === this.mockUser.password) {
      return of({
        success: true,
        message: 'Login successful',
      }).pipe(delay(1000)); // Simulate network delay
    } else {
      return throwError(() => ({
        success: false,
        message: 'Invalid email or password'
      })).pipe(delay(1000));
    }
  }
}
