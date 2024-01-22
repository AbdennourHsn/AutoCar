import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserInfo } from '../_modeles/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl ='http://localhost:5281/api/';
  constructor(private http : HttpClient) { }



  getUser(id: number): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.baseUrl + 'Users/' + id);
  }
}
