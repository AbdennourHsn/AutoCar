import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() imageUrl: string="";
  @Input() SceneUrl: string="";
  @Output() childEvent = new EventEmitter<boolean>();


  constructor(private router: Router){}
  ShowShowroom(){
    console.log("hello ")
    this.router.navigate(['/ShowroomScene', encodeURIComponent(this.SceneUrl)]);
  }

  SeFormActive(value:boolean){
    console.log("You Clicked me");
    this.childEvent.emit(value);
  }
  
  chooseEnv(){
  }
}
