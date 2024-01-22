import { Component } from '@angular/core';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { Color } from '../_modeles/Color';
@Component({
  selector: 'app-color-popup',
  templateUrl: './color-popup.component.html',
  styleUrls: ['./color-popup.component.css']
})
export class ColorPopupComponent {
  colorName:string="";
  colorValue:string='#ffffff';
  @Output() closePopup = new EventEmitter<void>();
  @Output() passColor = new EventEmitter<Color>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closePopup.emit();
  }
  AddColor(){
    console.log("test add color")
    this.passColor.emit(new Color(this.colorName , this.colorValue));
    this.close();
  }

}
