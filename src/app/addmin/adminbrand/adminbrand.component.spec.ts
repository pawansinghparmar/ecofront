import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbrandComponent } from './adminbrand.component';

describe('AdminbrandComponent', () => {
  let component: AdminbrandComponent;
  let fixture: ComponentFixture<AdminbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
