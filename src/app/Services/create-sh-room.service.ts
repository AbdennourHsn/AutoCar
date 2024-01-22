import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateShRoomService {
  baseUrl ='http://localhost:5281/api';

  constructor(private http : HttpClient) { }

  AddShowRoom(model: any){
    console.log(model);
    return this.http.post(this.baseUrl+'/Showrooms/create' , model );
  }
}
