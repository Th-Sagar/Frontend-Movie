import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public BASE_URL = 'http://localhost:9090';
  constructor(private http: HttpClient) {}

  register(registerRequest: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.BASE_URL}/api/v1/auth/register`,
      registerRequest
    );
  }

  login(loginRequest: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.BASE_URL}/api/v1/auth/login`,
      loginRequest
    );
  }
}

export type RegisterRequest = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  name: string;
  email: string;
  username: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};
