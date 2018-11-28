import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMessagesComponent } from './form-messages.component';

describe('FormMessagesComponent', () => {
  let component: FormMessagesComponent;
  let fixture: ComponentFixture<FormMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
