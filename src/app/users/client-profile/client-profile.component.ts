import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'client-profile',
    templateUrl: 'client-profile.component.html'
})

export class ClientProfileComponent implements OnInit {
    @Input() clientData:any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 
        console.log('Loads the client info');
        console.log(this.clientData);
        console.log(this.route.snapshot.paramMap.get('id'))
    }
}