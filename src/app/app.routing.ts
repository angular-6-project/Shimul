import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './services/guard/auth-guard.service';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'transaction',
        loadChildren: './views/fgs/transaction/transaction.module#TransactionModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'master',
        loadChildren: './views/master/master.module#MasterModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuardService]
      },
     {
        path: 'users',
        loadChildren: './views/userManagement/users.module#UsersModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'dailyIndent',
        loadChildren: './views/sales/daily-indent/daily-indent.module#DailyIndentModule',
        canActivate: [AuthGuardService]
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
