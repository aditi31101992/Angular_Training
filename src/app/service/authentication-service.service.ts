import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/authentication/login-request';
import { RegistrationRequest } from '../models/authentication/registration-request';
import { UserResponse } from '../models/authentication/user-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private router: Router,private httpClient: HttpClient) { }

  token: string | null = null

get loggedIn(): boolean {
  return this.token != null
}

  logOut(): void {
    this.router.navigateByUrl('/login')
  }

  private baseUrl = 'api/user'

  
  login(loginRequest: LoginRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(this.baseUrl + '/login', loginRequest)
  }
  
  register(loginRequest: LoginRequest): Observable<UserResponse> {
    const registrationRequest = new RegistrationRequest(
      loginRequest.email,
      loginRequest.password,
      'John',
      'Smith'
    )
    return this.httpClient.post<UserResponse>(this.baseUrl + '/register', registrationRequest)
  }

}


