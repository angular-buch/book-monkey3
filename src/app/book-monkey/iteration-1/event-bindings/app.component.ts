import { Component } from '@angular/core';

import { Book } from './shared/book';

/*BS*/type ViewState = 'list' | 'detail';/*BE*/

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book: Book;
  /*BS*/viewState: ViewState = 'list';

  showList() {
    this.viewState = 'list';
  }

  showDetails(book: Book) {
    this.book = book;
    this.viewState = 'detail';
  }/*BE*/
}
