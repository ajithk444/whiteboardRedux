/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { By } from '@angular/platform-browser';
//import { DebugElement } from '@angular/core';

import { WhiteboardComponent } from './whiteboard.component';
import { NgRedux } from '@angular-redux/store';
import {NgZone} from "@angular/core";
import {rootReducer, INITIAL_STATE} from "../../store";
import {CounterActions} from "../app.actions";

describe('WhiteboardComponent', () => {
  let component: WhiteboardComponent;
  let fixture: ComponentFixture<WhiteboardComponent>;

  // *** 1. Redux initialize: ***
  class MockNgZone {
    run(fn) {
      return fn();
    }
  }
  let mockNgZone = new MockNgZone() as NgZone;
  let ngRedux;
  // *** end of Redux init ***

  beforeEach(async(() => {
    // *** 2. Reset to the intital state: ***
    ngRedux = new NgRedux(mockNgZone);
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE
    );
    // *** End of init ***
    TestBed.configureTestingModule({
      declarations: [ WhiteboardComponent ],
      providers: [
        // 3. Inject to the components:
        { provide: NgRedux, useValue: ngRedux },
        CounterActions
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
