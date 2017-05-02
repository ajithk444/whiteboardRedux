import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    WhiteboardComponent,
    StickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    AngularFireModule.initializeApp(firebaseConfig)
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
