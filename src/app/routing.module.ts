import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAuthGuard } from './authguard.service';
import { RegisterAccountComponent } from './register-account/register-account.component';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterAccountComponent },
  { path: '', component: DashboardComponent,  canActivate: [UserAuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
