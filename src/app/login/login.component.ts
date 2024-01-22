import { Component } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model:any={}
  constructor(private loginService : AccountService , private router: Router) {}

  LogIn(){
    // console.log(this.model);
    this.loginService.Login(this.model).subscribe({
      next: response =>{
        if(response===null) console.log("Could not login");
        this.router.navigate(['/']);
      }, 
      error:error=>console.log(error)
    })
  }

}
