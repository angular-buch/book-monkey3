import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

import { SearchComponent } from './search.component';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let bs: BookStoreService;

  const bookDb: Book[] = [
    {
      isbn: '111',
      title: 'Book 1',
      subtitle: 'Subtitle Book 1',
      authors: ['author1'],
      published: new Date()
    },
    {
      isbn: '112',
      title: 'Book 2',
      authors: ['author1', 'author2'],
      published: new Date(2015, 1, 1)
    }
  ];

  let bookStoreServiceStub: Partial<BookStoreService>;
  bookStoreServiceStub = {
    getAllSearch: (searchTerm: string): Observable<Book[]> => {
      return of(
        bookDb.filter(item =>
          Object.keys(item).some(k => item[k] != null && item[k].toString().includes(searchTerm))
        )
      );
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: BookStoreService, useValue: bookStoreServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bs = TestBed.get(BookStoreService);
  });

  it('should return objects containing the given search term', () => {
    bs.getAllSearch('111')
      .subscribe(res => {
        expect(res).toEqual([bookDb[0]]);
      });
    bs.getAllSearch('or2')
      .subscribe(res => {
        expect(res).toEqual([bookDb[1]]);
      });
    bs.getAllSearch('Sub')
      .subscribe(res => {
        expect(res).toEqual([bookDb[0]]);
      });
    bs.getAllSearch('11')
      .subscribe(res => {
        expect(res).toEqual([...bookDb]);
      });
    bs.getAllSearch('abcdefg')
      .subscribe(res => {
        expect(res).toEqual([]);
      });
    bs.getAllSearch('2015')
      .subscribe(res => {
        expect(res).toEqual([bookDb[1]]);
      });
  });
});
