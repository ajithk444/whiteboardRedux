import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../../store";
import {Observable} from "rxjs";
import {DbService} from "../db/db.service";

@Component({
  selector: 'ellzap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = "ellzap.ch";
  @select() readonly userName$: Observable<string>;
  @select() readonly dbLoggedIn$: Observable<boolean>;

  constructor(private dbService: DbService, private store: NgRedux<IAppState>) {

  }
  onSubmit(formData) {
    console.log("OnSubmit: "+ JSON.stringify(formData.value));
    this.dbService.dbLoginWithEmail(formData.value.emailAdress, formData.value.passcode);
  } // of onSubmit(formData).
  ngOnInit() {
  }

}
