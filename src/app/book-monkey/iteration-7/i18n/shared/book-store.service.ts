import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

import { Book } from './book';
import { BookRaw } from './book-raw';
import { BookFactory } from './book-factory';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = 'https://book-monkey2-api.angular-buch.com';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books`)
      .pipe(
        retry(3),
        map(booksRaw =>
          booksRaw.map(b => BookFactory.fromRaw(b)),
        ),
        catchError(this.errorHandler)
      );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookRaw>(
      `${this.api}/book/${isbn}`
    ).pipe(
      retry(3),
      map(b => BookFactory.fromRaw(b)),
      catchError(this.errorHandler)
    );
  }

  create(book: Book): Observable<any> {
    return this.http.post(
      `${this.api}/book`,
      book,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  update(book: Book): Observable<any> {
    return this.http.put(
      `${this.api}/book/${book.isbn}`,
      book,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(
      `${this.api}/book/${isbn}`,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  getAllSearch(searchTerm: string): Observable<Book[]> {
    return this.http.get<BookRaw[]>(
      `${this.api}/books/search/${searchTerm}`
    ).pipe(
      retry(3),
      map(booksRaw =>
        booksRaw.map(b => BookFactory.fromRaw(b)),
      ),
      catchError(this.errorHandler)
    );
  }

  check(isbn: string): Observable<Boolean> {
    return this.http.get(
      `${this.api}/book/${isbn}/check`
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return observableThrowError(error);
  }
}
