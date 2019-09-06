import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopPostComponent } from './pop-post.component';

describe('PopPostComponent', () => {
  let component: PopPostComponent;
  let fixture: ComponentFixture<PopPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
