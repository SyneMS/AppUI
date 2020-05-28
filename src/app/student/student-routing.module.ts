import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { HigherStudentComponent } from './higher-student/higher-student.component';
import { SecondaryStudentComponent } from './secondary-student/secondary-student.component';

const routes: Routes = [{ path: '', component: StudentComponent },
{ path: 'higherStudent', component: HigherStudentComponent },
{ path: 'scondaryStudent', component: SecondaryStudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
