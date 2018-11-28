import { FormControl, FormArray, ValidationErrors } from '@angular/forms';

export class BookValidators {

  static isbnFormat(control: FormControl): ValidationErrors | null {
    if (!control.value) { return null; }

    const isolatedNumbers = control.value.replace(/-/g, '');
    const isbnPattern = /(^\d{10}$)|(^\d{13}$)/;
    return isbnPattern.test(isolatedNumbers) ? null : {
      isbnFormat: { valid: false }
    };
  }

  static atLeastOneAuthor(controlArray: FormArray): ValidationErrors | null {
    const check = controlArray.controls.some(el => {
      return (el.value) ? true : false;
    });
    return check ? null : {
      atLeastOneAuthor: { valid: false }
    };
  }

}
