import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAuthSucessResponse } from '../interfaces/auth-sucess-response';
import { Observable } from 'rxjs';
import { ILoginSuccessResponse } from '../interfaces/login-sucess-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _httpClient = inject(HttpClient);

  validateUser(): Observable<IAuthSucessResponse> {
    return this._httpClient.get<IAuthSucessResponse>(environment.apiUrl + '/protected');
  }

  login(email: string, password: string): Observable<ILoginSuccessResponse> {
    const body = { email, password }
    return this._httpClient.post<ILoginSuccessResponse>(environment.apiUrl + "/users/login", body)

  }
}
