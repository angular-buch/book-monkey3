// this is just a little test for inject()
// this is not a real part of the BookMonkey, you can ignore this file

import { ErrorHandler } from '@angular/core';
import { inject } from '@angular/core/testing';

describe('inject() creates an injector', () => {

  it('and injects the specified objects into the test',

    inject([ErrorHandler], (errrorHandler: ErrorHandler) => {
      errrorHandler.handleError('Es ist ein Fehler aufgetreten!');
    })

  );
});
