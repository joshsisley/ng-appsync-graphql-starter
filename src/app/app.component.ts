import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
  isLoggedIn = false;

  constructor(private amplifyService: AmplifyService, public router: Router) {
    this.amplifyService.authStateChange$.subscribe(authState => {
      const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
      if (this.isLoggedIn && !isLoggedIn) {
        router.navigate(['']);
      } else if (!this.isLoggedIn && isLoggedIn) {
        router.navigate(['/']);
      }
      this.isLoggedIn = isLoggedIn;
    });
  }

  public signOut() {
    this.amplifyService.auth().signOut();
  }
}
