import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassTokenComponent } from './reset-pass-token.component';

describe('ResetPassTokenComponent', () => {
  let component: ResetPassTokenComponent;
  let fixture: ComponentFixture<ResetPassTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPassTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
