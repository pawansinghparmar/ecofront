import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsubsubcategoryComponent } from './adminsubsubcategory.component';

describe('AdminsubsubcategoryComponent', () => {
  let component: AdminsubsubcategoryComponent;
  let fixture: ComponentFixture<AdminsubsubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsubsubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsubsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
