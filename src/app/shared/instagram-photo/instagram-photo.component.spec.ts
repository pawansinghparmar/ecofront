import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramPhotoComponent } from './instagram-photo.component';

describe('InstagramPhotoComponent', () => {
  let component: InstagramPhotoComponent;
  let fixture: ComponentFixture<InstagramPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
