import { Component, ViewChild, OnInit/*BS*/, Output, EventEmitter/*BE*/ } from '@angular/core';
import { NgForm } from '@angular/forms';

/*BS*/import { Book } from '../shared/book';/*BE*/
import { BookFactory } from '../shared/book-factory';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book = BookFactory.empty();
  @ViewChild('bookForm') bookForm: NgForm;
  /*BS*/@Output() submitBook = new EventEmitter<Book>();/*BE*/

  ngOnInit() {
  }
  /*BS*/
  submitForm() {
    const newBook = {
      ...this.book,
      authors: this.bookForm.value.authors.split(','),
      thumbnails: [this.bookForm.value.thumbnail]
    };

    this.submitBook.emit(newBook);

    this.book = BookFactory.empty();
    this.bookForm.reset();
  }/*BE*/
}
