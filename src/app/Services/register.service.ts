import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl ='http://localhost:5281/api/';

  constructor(private http : HttpClient) { }

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

  
}
