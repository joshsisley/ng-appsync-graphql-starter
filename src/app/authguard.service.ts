import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable()
export class UserAuthGuard implements CanActivate {

  constructor(private amplifyService: AmplifyService, private router: Router) { }

  canActivate() {
    return this.amplifyService.auth().currentUserInfo().then(user => {
        if (user.attributes['custom:orgId']) {
          return true;
        } else {
          this.router.navigate(['/register']);
          return false;
        }
      })
      .catch(err => {
        this.router.navigate(['/login']);
        return false;
      })
    }
}