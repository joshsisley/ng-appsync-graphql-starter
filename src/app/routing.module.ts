import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAuthGuard } from './authguard.service';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent,  canActivate: [UserAuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
