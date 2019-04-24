import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  
  getLoginData(): Observable<Login[]> {
    return of();
  }
}
