import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../shared/API.service';
import { v4 as uuid } from 'uuid';

@Component({
    selector: 'register-account',
    templateUrl: 'register-account.component.html'
})

export class RegisterAccountComponent implements OnInit {
    accountType = '';
    currentUser:any;
    loading: boolean = true;
    registerForm;

    constructor(private amplify: AmplifyService, private fb: FormBuilder, private router: Router, private Api: APIService) { 
        this.registerForm = this.fb.group({
            name: new FormControl(''),
            address1: new FormControl(''),
            address2: new FormControl(''),
            city: new FormControl(''),
            state: new FormControl(''),
            zip: new FormControl(''),
        })
     }

    ngOnInit() { 
        this.amplify.auth().currentAuthenticatedUser().then((user) => {
            if (user) {
                this.currentUser = user;
            }
        })
    }

    formatData(data) {
        for (let key in data) {
            if (!data[key].length) {
                delete data[key];
            }
        }
        return data;
    }

    generateId() {
        return uuid();
    }

    submit(formData) {
        let org = this.formatData(formData);
        org.id = this.generateId();
        this.Api.CreateOrg(org).then((savedOrg) => {
            let attrs = this.currentUser.attributes;
            attrs['custom:orgId'] = savedOrg.id;
            this.amplify.auth().updateUserAttributes(this.currentUser, attrs).then((user) => {
                if (user) {
                    this.router.navigate(['/']);
                } else {
                    // display error to user
                }
            })
        })
    }
}