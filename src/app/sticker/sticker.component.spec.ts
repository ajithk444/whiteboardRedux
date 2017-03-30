/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { By } from '@angular/platform-browser';
import { NgRedux } from '@angular-redux/store';
import { CUSTOM_ELEMENTS_SCHEMA, NgZone} from '@angular/core';

import { StickerComponent } from './sticker.component';
import {INITIAL_STATE, rootReducer} from "../../store";
import {CounterActions} from "../app.actions";

describe('StickerComponent', () => {
  let component: StickerComponent;
  let fixture: ComponentFixture<StickerComponent>;
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

    // *** end of Redux init
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ StickerComponent ],
      providers: [
        // 3. Inject to the components:
        { provide: NgRedux, useValue: ngRedux },
        CounterActions
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
