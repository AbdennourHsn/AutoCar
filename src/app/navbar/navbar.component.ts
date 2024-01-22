import { Component , OnInit  } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { User } from '../_modeles/User';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;
  userName:string=""
  
  constructor(private accountService: AccountService , private router: Router) { }
  
  ngOnInit(): void {
    this.getCurrentUser();
    const userString = localStorage.getItem('user');
    if (userString) {
      this.userName = JSON.parse(userString).userName ;
    }
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe(
      {
        next:(user)=>{this.loggedIn=!!user,
          this.userName=user? user.userName : '';
        },

        error:error=>console.log(error)
      }
    )
  }


  Logout(){
    console.log("hi");
    this.accountService.Logout();
    this.router.navigate(['/']);
  }
}
