import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopRegisterComponent } from './pop-register.component';

describe('PopRegisterComponent', () => {
  let component: PopRegisterComponent;
  let fixture: ComponentFixture<PopRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
