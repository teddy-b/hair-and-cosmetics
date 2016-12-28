/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HairComponent } from './hair.component';

describe('HairComponent', () => {
  let component: HairComponent;
  let fixture: ComponentFixture<HairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
