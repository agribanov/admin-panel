import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const usersRoutes: Routes = [
  { path: '', redirectTo:'list' },
  { path: 'list', component: UsersListComponent},
  { path: 'add', component: AddUserComponent},
  { path: 'edit/:id', component: EditUserComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(
      usersRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {}