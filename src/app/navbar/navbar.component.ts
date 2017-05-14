import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ellzap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = "ellzap.ch";
  constructor() { }

  ngOnInit() {
  }

}
