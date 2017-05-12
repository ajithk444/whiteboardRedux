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

  constructor(public fireAuthorization: AngularFireAuth, private router: Router) {

    this.fireAuthorization.authState.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/whiteboard');
      }
    });
  }

  emailLogin() {
    this.fireAuthorization.auth.signInWithEmailAndPassword("martin@ellzap.ch", "4711hugo")
      .then((success) => {
        console.log(success);
      }).catch((err) => {
      console.log(err);
      this.error = err;
    })
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.fireAuthorization.auth.signInWithEmailAndPassword(
          formData.value.email,
          formData.value.password
      ).then(
        (success) => {
          console.log(success);
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
