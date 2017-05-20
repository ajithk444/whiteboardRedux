import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './db/app.firebase';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from "../store";
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { StickerComponent } from './sticker/sticker.component';
import { StickerService } from "./sticker/sticker.service";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./db/auth.service";
import {routes} from "./app.routes";
import { NavbarComponent } from './navbar/navbar.component';
import { DbService } from "./db/db.service";
import { HomeComponent } from './home/home.component';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    WhiteboardComponent,
    StickerComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    routes
  ],
  providers: [StickerService, AuthGuard, DbService],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(appStore: NgRedux<IAppState>) {
    appStore.configureStore(
      rootReducer,
      INITIAL_STATE
    );
  } // of constructor.

}
