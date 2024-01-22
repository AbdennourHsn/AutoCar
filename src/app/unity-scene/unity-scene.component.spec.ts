import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitySceneComponent } from './unity-scene.component';

describe('UnitySceneComponent', () => {
  let component: UnitySceneComponent;
  let fixture: ComponentFixture<UnitySceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitySceneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitySceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
