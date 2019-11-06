import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopComplainComponent } from './pop-complain.component';

describe('PopComplainComponent', () => {
  let component: PopComplainComponent;
  let fixture: ComponentFixture<PopComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
