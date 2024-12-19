import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCredential } from '../Entities/user-credential';
import { Observable } from 'rxjs';
import { AuthRequest } from '../DTO/auth-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: HttpClient) {}

  private contextpath = 'http://localhost:8087/auth/';


  private registerUserEndPoint = this.contextpath + 'register';
  private loginUserEndPoint = this.contextpath+'token';

  registerNewUser(user: UserCredential): Observable<UserCredential> {
    let result = this.api.post<UserCredential>(
      `${this.registerUserEndPoint}`,
      user
    );
    return result;
  }

  getToken(authrequest:AuthRequest):Observable<any>{
    let result = this.api.post("http://localhost:8087/auth/token", authrequest, {
      responseType: 'text',
    });
    return result;
  }
}
