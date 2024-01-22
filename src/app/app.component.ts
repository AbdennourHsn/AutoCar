import { Component, OnInit } from '@angular/core';
import { LoginService } from './Services/login.service';
import { User } from './_modeles/User';
import { AccountService } from './Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AutoVR';
  constructor(private accountService:AccountService){}
  
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString=localStorage.getItem("user");
    if(userString==null) return
    const user:User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
    }
}
