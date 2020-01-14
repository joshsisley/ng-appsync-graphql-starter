import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './home/login.component';

import { ChatAppModule } from './chat-app/chat-app.module';
import { RoutingModule } from './routing.module';

import { environment } from '../environments/environment';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAuthGuard } from './authguard.service';
Amplify.configure(aws_exports);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
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
