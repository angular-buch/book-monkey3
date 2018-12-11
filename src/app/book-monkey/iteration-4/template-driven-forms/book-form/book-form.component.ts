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

  /*BS*/@Output() submitBook = new EventEmitter<Book>();/*BE*/
  @ViewChild('bookForm') bookForm: NgForm;

  /*BS*/
  submitForm() {
    this.submitBook.emit(this.book);

    this.book = BookFactory.empty();
    this.bookForm.reset();
  }/*BE*/

  ngOnInit() {
  }
}
