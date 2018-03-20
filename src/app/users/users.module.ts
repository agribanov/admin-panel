import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { UsersService } from './users.service';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule
  ],
  providers: [UsersService],
  declarations: [UsersListComponent, EditUserComponent, AddUserComponent, UserFormComponent]
})
export class UsersModule { }
