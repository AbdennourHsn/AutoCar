import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map  , Subject } from 'rxjs';
import { User } from '../_modeles/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl ='http://localhost:5281/api/';
  private loggedInSubject: Subject<boolean> = new Subject<boolean>();
  constructor(private http : HttpClient ) { }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
  
  Login(model: any){
    // console.log(model);
    return this.http.post<User>(this.baseUrl+'Account/login' , model ).pipe(
      map((response:User)=>{
        const user  =response
        if(user){
          localStorage.setItem('user' , JSON.stringify(user))
          
          this.loggedInSubject.next(true);
        }
      }
    ));
    
  }

  Logout(){
    localStorage.removeItem('user');
  }
}
