import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './resolvers/member-detail.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './guards/prevent-unsaved-changes.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'menu', component: NavigationComponent
  // },
  {
    path: 'menu', component: NavigationComponent,
    children: [{ path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
    { path: 'employee', component: EmployeeComponent },
    { path: 'lists', component: ListsComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'members', component: MemberListComponent },
    {
      path: 'detail/:id', component: MemberDetailComponent,
      resolve: { user: MemberDetailResolver }
    },
    {
      path: 'edit', component: MemberEditComponent,
      canDeactivate: [PreventUnsavedChanges],
      resolve: { user: MemberEditResolver }
    }],
    canActivate: [AuthGuardGuard],
    runGuardsAndResolvers: "always"
  },

  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
