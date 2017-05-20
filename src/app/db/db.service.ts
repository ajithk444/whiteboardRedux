import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../../store";
import {DbActions} from "./db.actions";

@Injectable()
export class DbService {

  constructor(public fireAuthorization: AngularFireAuth, private store: NgRedux<IAppState>) {}

  dbLoginWithEmail(emailAdress: string, passcode: string) {
    this.fireAuthorization.auth.signInWithEmailAndPassword(
      emailAdress,
      passcode
    ).then(
      (success) => {
        this.store.dispatch(DbActions.userLogin(emailAdress));
      }).catch(
      (err) => {
        console.log("xxx =>: " + err);
        this.store.dispatch(DbActions.userLoginFailed(""+ err));
      });
  } // of dbLoginWithEmail(emailAdress: string, passcode: string);

  dbLogOut() {
    this.fireAuthorization.auth.signOut()
      .then(
        (success) => {
          console.log("logout dispatch!")
          this.store.dispatch(DbActions.userLogout());
        }).catch(
          (err) => {
          console.log(err);
      });
  } // of dbLogOut.

} // of class DbService

