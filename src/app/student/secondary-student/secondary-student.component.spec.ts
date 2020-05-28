import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryStudentComponent } from './secondary-student.component';

describe('SecondaryStudentComponent', () => {
  let component: SecondaryStudentComponent;
  let fixture: ComponentFixture<SecondaryStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
