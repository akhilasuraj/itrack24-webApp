import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedComplainsComponent } from './completed-complains.component';

describe('CompletedComplainsComponent', () => {
  let component: CompletedComplainsComponent;
  let fixture: ComponentFixture<CompletedComplainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedComplainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
