import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Book } from './book';
import { BookRaw } from './book-raw';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  let httpMock: HttpTestingController;
  let service: BookStoreService;

  const bookRaw: BookRaw[] = [
    {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      published: '2019-01-01T00:00:00.000Z'
    },
    {
      isbn: '222',
      title: 'Book 2',
      authors: [],
      published: '2019-01-01T00:00:00.000Z'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookStoreService]
    });

    // statt inject() verwenden wir hier mal TestBed.get
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(BookStoreService);
  });

  it('should GET a list of all books', () => {

    let receivedBooks: Book[];
    service.getAll().subscribe(books => receivedBooks = books);

    // BookStoreService soll einen GET request gegen die richtige URL angestoßen haben
    const req = httpMock.expectOne('https://api3.angular-buch.com/secure/books');
    expect(req.request.method).toEqual('GET');

    // jetzt werden Bücher emittiert
    req.flush(bookRaw);

    expect(receivedBooks.length).toBe(2);
    expect(receivedBooks[0].isbn).toBe('111');
    expect(receivedBooks[1].isbn).toBe('222');

    expect(receivedBooks[0].published).toEqual(new Date('2019-01-01T00:00:00.000Z'));
  });

  afterEach(() => {
    // Prüfung, ob kein weiter unerwarteter Request angestoßen wurde
    httpMock.verify();
  });
});
