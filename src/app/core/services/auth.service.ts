// src/app/mocks/user.service.mock.ts
import { Observable, of } from 'rxjs';
import { AuthUser } from '../models/auth-user.model';
import { IAuthService } from './interfaces/iauth.service';

export class AuthService implements IAuthService {

  mockUser: AuthUser = { id:'1', name:'Oscar Rueda', email:'usuario@yopmail.com', avatar:'', authToken:'token_123', refreshToken: 'refresh_123' };

  Login(username: string, password:string): Observable<AuthUser> {
    //TODO: perform implementation.
    return of(this.mockUser);
  }

}
