import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { RoomsTableComponent } from './rooms-table/rooms-table.component';
import { SinginComponent } from './singin/singin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CreateShRoomComponent } from './create-sh-room/create-sh-room.component';
import { UploadCarComponent } from './upload-car/upload-car.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModelUploadComponent } from './model-upload/model-upload.component';
import { ColorPopupComponent } from './color-popup/color-popup.component';
import { UnitySceneComponent } from './unity-scene/unity-scene.component';
import { ProfilComponent } from './profil/profil.component';
import { CarInfoComponent } from './car-info/car-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SinginComponent },
  { path: 'CreateShowroom', component: CreateShRoomComponent },
  { path: 'Showrooms', component: RoomsTableComponent },
  { path: 'UploadCar', component: UploadCarComponent },
  { path: 'ShowroomScene/:urlEncoded', component: UnitySceneComponent },
  { path: 'profil', component: ProfilComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    RoomsTableComponent,
    SinginComponent,
    NavbarComponent,
    HomeComponent,
    CreateShRoomComponent,
    UploadCarComponent,
    ModelUploadComponent,
    ColorPopupComponent,
    UnitySceneComponent,
    ProfilComponent,
    CarInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
