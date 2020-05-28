import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { HigherStudentComponent } from './higher-student/higher-student.component';
import { SecondaryStudentComponent } from './secondary-student/secondary-student.component';


@NgModule({
  declarations: [StudentComponent, HigherStudentComponent, SecondaryStudentComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StudentRoutingModule,
    HttpClientModule
  ]
})
export class StudentModule { }
