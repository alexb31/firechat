import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCZkQIsn1SGOtk81cbtWgPFAqNts36PXyg",
  authDomain: "mychatapp-a867e.firebaseapp.com",
  databaseURL: "https://mychatapp-a867e.firebaseio.com",
  projectId: "mychatapp-a867e",
  storageBucket: "mychatapp-a867e.appspot.com",
  messagingSenderId: "328747334597"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

