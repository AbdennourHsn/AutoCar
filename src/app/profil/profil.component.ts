import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { UserInfo } from '../_modeles/UserInfo';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  button01:boolean=true;
  button02:boolean=false;
  fullname:string=""
  username:string="";
  company:string="";
  mail:string="";

  constructor(private cdr: ChangeDetectorRef , private userServise:UserService){}
  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (!userString) {
      return; 
    }
    this.getUserInfo(JSON.parse(userString).id);
  }

  button01Clicked(){
    this.button01=true;
    this.button02=false;
    this.cdr.detectChanges();

  }
  button02Clicked(){
    this.button01=false;
    this.button02=true;
    this.cdr.detectChanges();

  }



  getUserInfo(id: number) {
    this.userServise.getUser(id).subscribe(
      (userInfo: UserInfo) => {
        this.fullname=userInfo.firstName+" " + userInfo.lastName;
        this.username=userInfo.userName;
        this.mail=userInfo.email;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
