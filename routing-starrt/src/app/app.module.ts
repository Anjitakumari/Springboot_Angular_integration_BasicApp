import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/SignUp/signUp.component';

@NgModule({
  declarations: [
     AppComponent,
    // HomeComponent,
    // UsersComponent,
    // ServersComponent,
    // UserComponent,
    // EditServerComponent,
    // ServerComponent
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
