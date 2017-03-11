/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgRedux } from '@angular-redux/store';
import {CounterActions} from "./app.actions";
import {NgZone} from "@angular/core";
import {rootReducer, INITIAL_STATE} from "../store";
import {WhiteboardComponent} from "./whiteboard/whiteboard.component";

// *** 1. Redux initialize: ***
class MockNgZone {
  run(fn) {
    return fn();
  }
}
let mockNgZone = new MockNgZone() as NgZone;
let ngRedux;
// *** end of Redux init ***

describe('AppComponent', () => {
  beforeEach(() => {
    // *** 2. Reset to the intital state: ***
    ngRedux = new NgRedux(mockNgZone);
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE
    );
    // *** End of init ***
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WhiteboardComponent
      ],
      providers: [
        // 3. Inject to the components:
        { provide: NgRedux, useValue: ngRedux },
        CounterActions
      ]
    });

    TestBed.compileComponents();
  });

  const expectedTitle = 'Whiteboard with Redux';

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have as title ' + expectedTitle + '!', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(expectedTitle);
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(expectedTitle);
  }));
});
