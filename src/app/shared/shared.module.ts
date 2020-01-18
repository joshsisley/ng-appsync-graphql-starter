import { NgModule } from '@angular/core';

import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { UserModalComponent } from './user-modal/user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APIService } from './API.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    exports: [NavComponent, UserModalComponent, SidebarComponent],
    declarations: [NavComponent, UserModalComponent, SidebarComponent],
    providers: [APIService],
})
export class SharedModule { }
