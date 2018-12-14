import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { BookFormComponent } from './book-form.component';
import { Book } from '../../shared/book';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;

  const expectedBook: Book = {
    isbn: '1234567890',
    title: 'Test',
    authors: ['Author 1'],
    published: new Date(),
    subtitle: 'something',
    thumbnails: [{
      title: 'my title',
      url: 'https://via.placeholder.com/150'
    }],
    description: 'lorem ipsum dolor sit amet...'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the form', () => {
    expect(component.bookForm.value).toEqual({
      isbn: '',
      title: '',
      authors: [''],
      published: null,
      subtitle: '',
      thumbnails: [{
        title: '',
        url: ''
      }],
      description: ''
    });
    expect(component.bookForm.valid).toBeFalsy();
  });

  it('should display a book to edit', () => {
    component.book = expectedBook;
    component.ngOnChanges();
    expect(component.bookForm.value).toEqual(expectedBook);
    expect(component.bookForm.errors).toBeNull();
  });

  it('should add an author input field', () => {
    component.addAuthorControl();
    expect(component.bookForm.value).toEqual({
      isbn: '',
      title: '',
      authors: ['', ''],
      published: null,
      subtitle: '',
      thumbnails: [{
        title: '',
        url: ''
      }],
      description: ''
    });
  });

  it('should add a Thumbnail FormGroup', () => {
    component.addThumbnailControl();
    expect(component.bookForm.value).toEqual({
      isbn: '',
      title: '',
      authors: [''],
      published: null,
      subtitle: '',
      thumbnails: [{
        title: '',
        url: ''
      }, {
        title: '',
        url: ''
      }],
      description: ''
    });
  });

});
