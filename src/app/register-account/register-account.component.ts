import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'register-account',
    templateUrl: 'register-account.component.html'
})

export class RegisterAccountComponent implements OnInit {
    accountType = '';
    currentUser:any;
    loading: boolean = true;
    registerForm;

    constructor(private amplify: AmplifyService, private fb: FormBuilder, private router: Router) { 
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

    submit() {
        // Save the org to the db and update the cognito user
        // Update the cognito user
        let attrs = this.currentUser.attributes;
        attrs['custom:orgId'] = '324234lkj324kjl234';
        this.amplify.auth().updateUserAttributes(this.currentUser, attrs).then((user) => {
            if (user) {
                console.log('updated');
                this.router.navigate(['/']);
            } else {
                // display error to user
            }
        })
    }
}