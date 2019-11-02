import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopResetpasswordComponent } from './pop-resetpassword.component';

describe('PopResetpasswordComponent', () => {
  let component: PopResetpasswordComponent;
  let fixture: ComponentFixture<PopResetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopResetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopResetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
