import { Component } from '@angular/core';
import { RegisterService } from '../Services/register.service';
import { CreateShRoomService } from '../Services/create-sh-room.service';
import { DatePipe } from '@angular/common';
import { Showroom } from '../_modeles/Showroom';


@Component({
  selector: 'app-create-sh-room',
  templateUrl: './create-sh-room.component.html',
  styleUrls: ['./create-sh-room.component.css'],
  providers: [DatePipe]

})

export class CreateShRoomComponent {
  model: any = {};
  ownerId: number | undefined;
  formActive:boolean=false;

  constructor(
    private roomService: CreateShRoomService,
    private datePipe: DatePipe
  ) { }

  public setFormActive(value:boolean){
    this.formActive=value;
  }

  addRoom() {
    const userString = localStorage.getItem('user');
    if (!userString) {
      return; 
    }

    this.ownerId = JSON.parse(userString).id;
    const dateOfCreation = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

    if (this.ownerId) {
      const room: Showroom = {
        ownerId: this.ownerId,
        name: this.model.name,
        nbrOfCars: this.model.nbrOfCars,
        descriptiom:this.model.descriptiom,
        dateOfCreation: dateOfCreation!,
        environement:""
      };

      this.roomService.AddShowRoom(room).subscribe(
        {
          next: response => {
            console.log(response);
          },
          error: error => console.log(error)
        }
      );
    }
  }
}
