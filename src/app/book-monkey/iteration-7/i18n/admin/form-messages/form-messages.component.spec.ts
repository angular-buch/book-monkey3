import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormArray, AbstractControl, Validators, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { FormMessagesComponent } from './form-messages.component';
import { BookValidators } from '../shared/book.validators';

describe('FormMessagesComponent', () => {
  let component: FormMessagesComponent;
  let fixture: ComponentFixture<FormMessagesComponent>;

  const expectedErrorMessages = {
    title: {
      required: 'Ein Buchtitel muss angegeben werden'
    },
    isbn: {
      required: 'Es muss eine ISBN angegeben werden',
      isbnFormat: 'Die ISBN muss aus 10 oder 13 Zeichen bestehen',
      isbnExists: 'Die ISBN existiert bereits'
    },
    published: {
      required: 'Es muss ein Erscheinungsdatum angegeben werden'
    },
    authors: {
      atLeastOneAuthor: 'Es muss ein Autor angegeben werden'
    }
  };

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

  describe('title validation', () => {
    beforeEach(() => {
      component.controlName = 'title';
    });

    it('should mark formControl as invalid if value is null', () => {
      component.control = new FormControl(null, Validators.required);
      component.ngOnInit();
      expect(component.control.valid).toBeFalsy();
    });

    it('should mark formControl as valid if value is not empty', () => {
      component.control = new FormControl('title', Validators.required);
      component.ngOnInit();
      expect(component.control.valid).toBeTruthy();
    });
  });

  describe('isbn validation', () => {
    const syncValidators = [Validators.required, BookValidators.isbnFormat];
    const asyncValidators = []; // TODO: add async Validator mock

    beforeEach(() => {
      component.controlName = 'isbn';
    });

    it('should mark formControl as invalid if value is null', () => {
      component.control = new FormControl(null, syncValidators, asyncValidators);
      component.ngOnInit();
      expect(component.control.valid).toBeFalsy();
    });

    it('should mark formControl as invalid if value does not contain 10 or 13 characters', () => {
      component.control = new FormControl('01234567890', syncValidators, asyncValidators);
      component.ngOnInit();
      expect(component.control.valid).toBeFalsy();
    });

    it('should mark formControl as valid value is a string with 10 characters', () => {
      component.control = new FormControl('0123456789', syncValidators, asyncValidators);
      component.ngOnInit();
      expect(component.control.valid).toBeTruthy();
    });

    it('should mark formControl as valid value is a string with 13 characters', () => {
      component.control = new FormControl('0123456789012', syncValidators, asyncValidators);
      component.ngOnInit();
      expect(component.control.valid).toBeTruthy();
    });
  });

  describe('published validation', () => {
    beforeEach(() => {
      component.controlName = 'published';
    });

    it('should mark formControl as invalid if value is null', () => {
      component.control = new FormControl(null, Validators.required);
      component.ngOnInit();
      expect(component.control.valid).toBeFalsy();
    });

    it('should mark formControl as valid value is not empty', () => {
      component.control = new FormControl(new Date(), Validators.required);
      component.ngOnInit();
      expect(component.control.valid).toBeTruthy();
    });
  });

  describe('authors validation', () => {
    beforeEach(() => {
      component.controlName = 'authors';
    });

    it('should mark formArray as invalid if Array is empty', () => {
      component.control = new FormArray([], BookValidators.atLeastOneAuthor);
      component.ngOnInit();
      expect(component.control.valid).toBeFalsy();
    });

    it('should mark formArray as invalid when FormControls in Array are all empty', () => {
      component.control = new FormArray([new FormControl(), new FormControl()], BookValidators.atLeastOneAuthor);
      component.ngOnInit();
      expect(component.control.valid).toBeFalsy();
    });

    it('should mark formArray as valid when FormArray contains one FormControl with a non-empty Value', () => {
      component.control = new FormArray([
        new FormControl(),
        new FormControl('Author1')
      ], BookValidators.atLeastOneAuthor);
      component.ngOnInit();
      expect(component.control.valid).toBeTruthy();
    });
  });
});
