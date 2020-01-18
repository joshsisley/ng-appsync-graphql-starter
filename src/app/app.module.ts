import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './home/login.component';

import { RoutingModule } from './routing.module';

import { environment } from '../environments/environment';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAuthGuard } from './authguard.service';
import { SharedModule } from './shared/shared.module';
import { RegisterAccountComponent } from './register-account/register-account.component';
Amplify.configure(aws_exports);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    RegisterAccountComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    SharedModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AmplifyAngularModule
  ],
  providers: [
    AmplifyService,
    UserAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
