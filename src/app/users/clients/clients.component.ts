import { Component, OnInit } from '@angular/core';
import { APIService } from '../../shared/API.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-clients',
    templateUrl: 'clients.component.html'
})

export class ClientsComponent implements OnInit {
    clientList: {}[];

    constructor(private api: APIService, private router: Router) { }

    ngOnInit() {
        this.getAllUsers();
     }

    getAllUsers() {
        this.api.ListClients().then(list => {
            console.log('here is the list of clients');
            console.log(list);
            this.clientList = list.items;
            console.log(this.clientList);
        })
    }

    goToClient(clientData) {
        console.log('is called');
        console.log(clientData)
        this.router.navigate(['/users/profile', clientData.id])
    }
}