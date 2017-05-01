/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgRedux } from '@angular-redux/store';
import {NgZone, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {rootReducer, INITIAL_STATE} from "../store";
import {WhiteboardComponent} from "./whiteboard/whiteboard.component";
import {StickerService} from "./sticker/sticker.service";

// *** 1. Redux initialize: ***
class MockNgZone {
  run(fn) {
    return fn();
  }
}
let mockNgZone = new MockNgZone() as NgZone;
let appStore;
// *** end of Redux init ***

describe('AppComponent', () => {
  beforeEach(() => {
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
      declarations: [
        AppComponent,
        WhiteboardComponent
      ],
      providers: [
        // 3. Inject to the components:
        { provide: NgRedux, useValue: appStore },
        StickerService
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
