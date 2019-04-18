import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUserComponent } from './users/list-user/list-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { ListRoleComponent } from './roles/list-role/list-role.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { ListPermissionsComponent } from './permissions/list-permissions/list-permissions.component';
import { AddPermissionsComponent } from './permissions/add-permissions/add-permissions.component';
import { EditPermissionsComponent } from './permissions/edit-permissions/edit-permissions.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'listUser',
    component: ListUserComponent,
    data: {
      title: 'Users'
    }
  },
  {
    path: 'addUser',
    component: AddUserComponent,
    data: {
      title: 'Users'
    }
  },
{
    path: 'editUser',
    component: EditUserComponent,
    data: {
      title: 'Users'
    }
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
    data: {
      title: 'Role'
    }
  },
  {
    path: 'addRole',
    component: AddRoleComponent,
    data: {
      title: 'Role'
    }
  },
  {
    path: 'editRole',
    component: EditRoleComponent,
    data: {
      title: 'Role'
    }
  },
  {
    path: 'listPermissions',
    component: ListPermissionsComponent,
    data: {
      title: 'Permissions'
    }
  },
  {
    path: 'addPermissions',
    component: AddPermissionsComponent,
    data: {
      title: 'Permissions'
    }
  },
  {
    path: 'editPermissions',
    component: EditPermissionsComponent,
    data: {
      title: 'Permissions'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
