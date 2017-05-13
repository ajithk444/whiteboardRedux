import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  emailAdress: string;
  passcode: string;

  constructor(public fireAuthorization: AngularFireAuth, private router: Router) {

    /*this.fireAuthorization.authState.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/whiteboard');
      }
    });
    */
  }

  onSubmit(formData) {
    console.log("OnSubmit");
    if(formData.valid) {
      console.log(formData.value);
      this.fireAuthorization.auth.signInWithEmailAndPassword(
          this.emailAdress,
          this.passcode
      ).then(
        (success) => {
          console.log(success);
          this.router.navigateByUrl('/whiteboard');
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }

  ngOnInit() {
  }

}
