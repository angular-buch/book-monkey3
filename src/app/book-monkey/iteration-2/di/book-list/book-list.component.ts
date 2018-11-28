import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';
import { /*BS*/BookStoreService/*BE*/ } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();
/*BS*/
  constructor(private bs: BookStoreService) { }/*BE*/

  ngOnInit() {/*BS*/
    this.books = this.bs.getAll();/*BE*/
  }

  showDetails(book: Book) {
    this.showDetailsEvent.emit(book);
  }
}
