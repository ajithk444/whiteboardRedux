/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StickerComponent } from './sticker.component';
import { ISticker} from "./sticker.interface";
import {IPoint} from "../helpers/point.interface";
import {MyAction} from "../../store";

describe('StickerComponent', () => {
  let component: StickerComponent;
  let fixture: ComponentFixture<StickerComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  let testSticker: ISticker;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StickerComponent], // declare the test component
    }).compileComponents();

    fixture = TestBed.createComponent(StickerComponent);
    component = fixture.componentInstance; // StickerComponent test instance


    testSticker = {
      stID: 1,
      stSelected: false,
      stTitle: 'Hugo - Test',
      stLeft: 10,
      stTop: 20,
      stWidth: 200,
      stHeight: 100,
      stText: 'Test Sticker'
    };

    component.sticker = testSticker;
    fixture.detectChanges(); // trigger initial data binding
  })); // of beforeEach( () => {})

  it('StickerComponent should set the StickerTopText', () => {
    de = fixture.debugElement.query(By.css('.stickerTop'));
    el = de.nativeElement;
    expect(el.textContent).toContain(testSticker.stTitle);
  });

  it('StickerComponent Event <mousedown> should work correct', () => {
    let pos: IPoint = null;
    let stID: number = -1;
    component.myAction.subscribe((event:MyAction) => {
      stID = event.payload.stID;
      pos = event.payload.pos;
    });
    component.onMouseDown({clientX: 10, clientY: 20});
    expect(stID).toBe(testSticker.stID);
    expect(pos.x).toBe(10);
    expect(pos.y).toBe(20);
  });

  it('StickerComponent Event <mouseup> should work correct', () => {
    let pos: IPoint = null;
    let stID: number = -1;
    component.myAction.subscribe((event) => {
      stID = event.payload.stID;
      pos = event.payload.pos;
    });
    component.sticker.stSelected = true;
    fixture.detectChanges();

    component.onMouseUp({clientX: 10, clientY: 20});
    expect(stID).toBe(testSticker.stID);
    expect(pos).toBe(null);
  });

  it('StickerComponent Event <mouseMove> should work correct', () => {
    let pos: IPoint = null;
    let stID: number = -1;
    component.myAction.subscribe((event) => {
      stID = event.payload.stID;
      pos = event.payload.pos;
    });
    component.sticker.stSelected = true;
    fixture.detectChanges();

    component.onMouseMove({clientX: 11, clientY: 21});
    expect(stID).toBe(testSticker.stID);
    expect(pos.x).toBe(11);
    expect(pos.y).toBe(21);
  });


}); // of describe('StickerComponent', <func>).


