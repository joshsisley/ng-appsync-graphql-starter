import { Component, OnInit } from '@angular/core';
import { APIService } from '../../shared/API.service';

@Component({
    selector: 'app-clients',
    templateUrl: 'clients.component.html'
})

export class ClientsComponent implements OnInit {
    clientList: {}[];

    constructor(private api: APIService) { }

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
}