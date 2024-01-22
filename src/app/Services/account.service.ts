import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map  , Subject, BehaviorSubject } from 'rxjs';
import { User } from '../_modeles/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl ='http://localhost:5281/api/';
  private Subject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.Subject.asObservable();
  constructor(private http : HttpClient ) { }
 
  getCurrentUser(): Observable<User | null> {
    return this.currentUser$;
  }

  setCurrentUser(user:User){
    this.Subject.next(user);
  }
  
  Register(model: any){
    console.log(model);
    return this.http.post(this.baseUrl+'Account/register' , model ).pipe(
      map((response:any)=>{
        const user  =response
        if(user){
          localStorage.setItem('user' , JSON.stringify(user))
        }
      }
    ))
  }

  
  Login(model: any){
    // console.log(model);
    return this.http.post<User>(this.baseUrl+'Account/login' , model ).pipe(
      map((response:User)=>{
        const user  =response
        if(user){
          localStorage.setItem('user' , JSON.stringify(user))
          
          this.Subject.next(user);
        }
      }
    ));
    
  }

  Logout(){
    localStorage.removeItem('user');
    this.Subject.next(null);
  }
}
