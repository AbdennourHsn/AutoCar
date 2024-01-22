import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-table',
  templateUrl: './rooms-table.component.html',
  styleUrls: ['./rooms-table.component.css']
})
export class RoomsTableComponent implements OnInit {
  constructor(private httpClient : HttpClient ){
    this.roomsList=[]
  }

  roomsList:any
  ownerId: number | undefined;
  ngOnInit(): void {
    this.getRoomsList();
  }

  getRoomsList(){
    const userString = localStorage.getItem('user');
    if (!userString) return
    this.ownerId = JSON.parse(userString).id;
    if(this.ownerId){
        this.httpClient.get("http://localhost:5281/api/showrooms/user/"+this.ownerId).subscribe((results:any)=>
        {
          this.roomsList=results;
          console.log(this.roomsList);
        }
        )
  }
}

  deleteRoom(id: any): void {
    console.log(id);
    this.httpClient.delete("http://localhost:5281/api/showrooms/delete/" + id, { responseType: 'text' }).subscribe(
      () => {
        this.roomsList = this.roomsList.filter((room: any) => room.id !== id);
        console.log(this.roomsList);
      },
      (error) => {
        console.log("Error occurred:", error);
        this.roomsList = this.roomsList.filter((room: any) => room.id !== id); // Remove from the list even if the response doesn't have a body
      }
    );
  }
}
