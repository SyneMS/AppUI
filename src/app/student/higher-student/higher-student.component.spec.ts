import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherStudentComponent } from './higher-student.component';

describe('HigherStudentComponent', () => {
  let component: HigherStudentComponent;
  let fixture: ComponentFixture<HigherStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
