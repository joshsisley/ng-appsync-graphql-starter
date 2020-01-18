import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
    { path: 'roles', component: RolesComponent },
    { path: '', component: SettingsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    exports: [],
    declarations: [RolesComponent, SettingsComponent],
})
export class SettingsModule { }