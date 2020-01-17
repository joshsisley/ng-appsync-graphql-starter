import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ClientProfileComponent } from './client-profile/client-profile.component';

const routes: Routes = [
    { path: 'clients', component: ClientsComponent },
    { path: 'profile/:id', component: ClientProfileComponent },
    { path: '', redirectTo: '/users/clients' }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    exports: [],
    declarations: [ClientsComponent, ClientProfileComponent],
})
export class UsersModule { }