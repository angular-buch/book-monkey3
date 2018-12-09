import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, of as ObservableOf } from 'rxjs';


import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from '../app.component';
import { BookListComponent } from './book-list.component';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({ template: '<router-outlet></router-outlet>' })
class DummyOutletComponent { }

@Component({
  selector: 'bm-book-list-item',
  template: 'Dummy'
})
class DummyBookListItemComponent {
  @Input() book: Book;
}

@Component({ template: 'Dummy' })
class DummyDetailsComponent { }

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  const expectedBooks = [
    {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      published: new Date()
    },
    {
      isbn: '222',
      title: 'Book 2',
      authors: [],
      published: new Date()
    }
  ];

  beforeEach(async(() => {

    TestBed.configureTestingModule({
        declarations: [
          DummyOutletComponent,
          BookListComponent,
          DummyBookListItemComponent,
          DummyDetailsComponent],
        providers: [{
          provide: BookStoreService,
          useValue: { getAll: () => ObservableOf(expectedBooks) }
        }],
        imports: [
          RouterTestingModule.withRoutes([
            { path: ':isbn', component: DummyDetailsComponent }
          ])
        ]
      })
      .compileComponents();
  }));

  beforeEach(async(() => {
    TestBed.createComponent(DummyOutletComponent);
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should display books', () => {

    expect(component.books.length).toBe(2);
    expect(component.books[0].isbn).toBe('111');
    expect(component.books[1].isbn).toBe('222');
  });

  it('should navigate to details page by ISBN', async(inject([Location], (location) => {

    fixture.nativeElement.querySelector('a').click();

    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/111');
    });
  })));
});
