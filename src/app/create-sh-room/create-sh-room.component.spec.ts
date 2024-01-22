import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShRoomComponent } from './create-sh-room.component';

describe('CreateShRoomComponent', () => {
  let component: CreateShRoomComponent;
  let fixture: ComponentFixture<CreateShRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateShRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
