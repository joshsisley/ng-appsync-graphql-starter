import { NgModule } from '@angular/core';

import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { UserModalComponent } from './user-modal/user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APIService } from './API.service';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [NavComponent, UserModalComponent],
    declarations: [NavComponent, UserModalComponent],
    providers: [APIService],
})
export class SharedModule { }
