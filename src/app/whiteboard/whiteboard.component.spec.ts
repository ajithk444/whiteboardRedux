/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WhiteboardComponent } from './whiteboard.component';
import { NgRedux } from '@angular-redux/store';
import {NgZone, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {rootReducer, INITIAL_STATE} from "../../store";

  let component: WhiteboardComponent;
  let fixture: ComponentFixture<WhiteboardComponent>;

  // *** 1. Redux initialize: ***
  class MockNgZone {
    run(fn) {
      return fn();
    }
  }
  let mockNgZone = new MockNgZone() as NgZone;
  let appStore;
  // *** end of Redux init ***

describe('WhiteboardComponent', () => {
  beforeEach(async(() => {
    // *** 2. Reset to the intital state: ***
    appStore = new NgRedux(mockNgZone);
    appStore.configureStore(
      rootReducer,
      INITIAL_STATE
    );
    // *** End of init ***
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ WhiteboardComponent ],
      providers: [
        // 3. Inject to the components:
        { provide: NgRedux, useValue: appStore }
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
