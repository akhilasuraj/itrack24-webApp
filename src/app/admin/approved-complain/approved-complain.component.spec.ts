import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedComplainComponent } from './approved-complain.component';

describe('ApprovedComplainComponent', () => {
  let component: ApprovedComplainComponent;
  let fixture: ComponentFixture<ApprovedComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
