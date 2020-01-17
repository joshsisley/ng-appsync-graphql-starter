import { NgModule } from '@angular/core';

import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [NavComponent],
    declarations: [NavComponent],
    providers: [],
})
export class SharedModule { }
