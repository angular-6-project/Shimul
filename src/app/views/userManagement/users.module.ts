import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


// import { UsersRoutingModule } from './users-routing.module';

import { CommonModule } from '@angular/common';
import { ListUserComponent } from './users/list-user/list-user.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { UsersRoutingModule } from './users-routing.module';
import { ListRoleComponent } from './roles/list-role/list-role.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { AddPermissionsComponent } from './permissions/add-permissions/add-permissions.component';
import { EditPermissionsComponent } from './permissions/edit-permissions/edit-permissions.component';
import { ListPermissionsComponent } from './permissions/list-permissions/list-permissions.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UniqueUseridValidatorDirective } from '../_helpers/unique-userid-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    ListUserComponent,
    AddUserComponent,
    AddRoleComponent,
    ListRoleComponent,
    EditRoleComponent,
    AddPermissionsComponent,
    EditPermissionsComponent,
    ListPermissionsComponent,
    EditUserComponent,
    UniqueUseridValidatorDirective
    ]
})
export class UsersModule { }
