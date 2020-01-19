import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIService } from '../API.service';

@Component({
    selector: 'user-modal',
    templateUrl: 'user-modal.component.html'
})

export class UserModalComponent implements OnInit {
    userForm;

    constructor(private fb: FormBuilder, private modalService: NgbModal, private api: APIService) { 
        this.userForm = this.fb.group({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            email: new FormControl(''),
            phone: new FormControl('')
        })
    }

    ngOnInit() { }

    close() {
        this.modalService.dismissAll();
    }

    onSubmit(userData) {
        this.api.CreateClient(userData).then(user => {
            this.userForm.reset();
        })
    }
}