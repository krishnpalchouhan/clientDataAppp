import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// AngularFire Importos
/*
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';*/
//
// Angular component imorts
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsDetailsComponent } from './components/clients-details/clients-details.component';
import { AddclientsComponent } from './components/addclients/addclients.component';
import { EditclientsComponent } from './components/editclients/editclients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// service imports
import { ClientsService } from './services/clients.service';
const appRoutes: Routes =[
  {path:'', component:DashbordComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'setting', component:SettingsComponent},
  {path:'client', component:ClientsComponent}
];
/*
export const firebaseConfig ={
    apiKey: "AIzaSyCIcImdDcWt1aABwyN06dSG9tHSma3L6RI",
    authDomain: "clientpanel-6afcb.firebaseapp.com",
    databaseURL: "https://clientpanel-6afcb.firebaseio.com",
    storageBucket: "clientpanel-6afcb.appspot.com",
    messagingSenderId: "433912655435"
};*/

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    ClientsComponent,
    ClientsDetailsComponent,
    AddclientsComponent,
    EditclientsComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
   // AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
