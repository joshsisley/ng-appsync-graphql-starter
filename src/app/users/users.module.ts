import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', redirectTo: '/users/clients' },
    { path: 'clients', component: ClientsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    exports: [],
    declarations: [ClientsComponent],
})
export class UsersModule { }