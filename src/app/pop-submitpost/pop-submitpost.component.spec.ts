import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopSubmitpostComponent } from './pop-submitpost.component';

describe('PopSubmitpostComponent', () => {
  let component: PopSubmitpostComponent;
  let fixture: ComponentFixture<PopSubmitpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopSubmitpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopSubmitpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
