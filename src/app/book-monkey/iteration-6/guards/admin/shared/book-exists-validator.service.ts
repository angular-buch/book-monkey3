import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BookStoreService } from '../../shared/book-store.service';

@Injectable({
  providedIn: 'root'
})
export class BookExistsValidatorService implements AsyncValidator {

  constructor(private bs: BookStoreService) { }

  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.bs.check(control.value).pipe(
      map(exists => (exists === false) ? null : {
          isbnExists: { valid: false }
      }),
      catchError(() => null)
    );
  }
}
