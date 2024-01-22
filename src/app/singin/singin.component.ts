import { Component, HostListener } from '@angular/core';
import { RegisterService } from '../Services/register.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

  model : any={}
  isImgVisible: boolean = true;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    if (window.innerWidth < 900) { 
      this.isImgVisible = false;
    } else {
      this.isImgVisible = true;
    }
  }

  constructor(private registerService : RegisterService){
    
  }

  signIn(){
    this.registerService.Register(this.model).subscribe({
      next: response =>{
        console.log(response);
      }, 
      error:error=>console.log(error)
    })
  }

}
