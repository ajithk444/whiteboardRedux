import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../../store";
import {Observable} from "rxjs";
import {DbService} from "../db/db.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ellzap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = "ellzap.ch";
  @select() readonly userName$: Observable<string>;
  @select() readonly dbLoggedIn$: Observable<boolean>;

  constructor(private dbService: DbService, private router: Router, private store: NgRedux<IAppState>) {
    /*this.dbLoggedIn$.subscribe(x => {
        if(!x) {
          console.log("NavBar: Logged out");
          this.router.navigateByUrl("/");
        }
     });
     */
  } // of constructor(...)

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log("OnSubmit: "+ JSON.stringify(formData.value));
    let emailAdress: string = formData.value.emailAdress || "";
    let passcode: string =  formData.value.passcode || "";
    this.dbService.dbLoginWithEmail(emailAdress, passcode);
  } // of onSubmit(formData).

  logout() {
    console.log("logout");
    this.dbService.dbLogOut();
  }
}
