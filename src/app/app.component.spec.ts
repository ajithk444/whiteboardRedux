/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import {CounterActions} from "./app.actions";

// I follow a minimal mocking approach:
// Mock all dependencies with empty objects
// and let each test specify the exact stub
// or spy behaviour that it needs. This keeps
// mocks simple and tests decoupled as they
// should be.
const mockRedux = {
  dispatch: function() {},
};
const mockDevTools = {};

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: NgRedux, useValue: mockRedux },
        // NgRedux,
        // { provide: DevToolsExtension, useValue: mockDevTools },
        CounterActions
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
