import { BookListComponent } from './book-list.component';
import { Book } from '../shared/book';

describe('BookListComponent', () => {

  let component: BookListComponent;

  beforeEach(() => {/*BS*/
    component = new BookListComponent();/*BE*/
  });

  it('should hold a hardcoded list of 2 books', () => {
    component./*BS*/ngOnInit()/*BE*/; /*BS*/// manual call!/*BE*/
    expect(component.books.length).toBe(2);
  });

  it('should trigger an event on "showDetails"', () => {

    const sendBook = {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      published: new Date()
    };
    let receivedBook: Book;

    component./*BS*/showDetailsEvent
      .subscribe((book) => receivedBook = book);/*BE*/
    component./*BS*/showDetails/*BE*/(sendBook);

    expect(sendBook).toBe(receivedBook);
  });
});
