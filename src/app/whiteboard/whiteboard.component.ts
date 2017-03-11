import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ellzap-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {
  wbTitle = 'My Whiteboard 01';
  wbWidth = 500;
  wbHeight = 300;

  constructor() { }

  ngOnInit() {
  }

}
