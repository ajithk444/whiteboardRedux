import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../../store";
import {Observable} from "rxjs";

@Component({
  selector: 'ellzap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = "ellzap.ch";
  @select() readonly userName$: Observable<string>;

  constructor(private store: NgRedux<IAppState>) {

  }

  ngOnInit() {
  }

}
