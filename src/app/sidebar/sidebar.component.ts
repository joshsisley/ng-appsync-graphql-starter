import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html'
})

export class SidebarComponent implements OnInit {
    constructor(private amplifyService: AmplifyService, private router: Router) { }

    ngOnInit() { }

    public signOut() {
        this.router.navigate(['/']);
        this.amplifyService.auth().signOut();
    }
}