import { TestBed } from '@angular/core/testing';

import { BookExistsValidatorService } from './book-exists-validator.service';

describe('BookExistsValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookExistsValidatorService = TestBed.get(BookExistsValidatorService);
    expect(service).toBeTruthy();
  });
});
