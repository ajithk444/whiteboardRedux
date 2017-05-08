import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './app.firebase';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from "../store";
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { StickerComponent } from './sticker/sticker.component';
import { StickerService } from "./sticker/sticker.service";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'whiteboard', component: WhiteboardComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    WhiteboardComponent,
    StickerComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule.forRoot(appRoutes) //,
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [StickerService],
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
