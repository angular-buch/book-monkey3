import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {

  let service: BookStoreService;

  beforeEach(() => {/*BS*/
    service = new BookStoreService();/*BE*/
  });

  it('should hold a hardcoded list of 2 books', () => {/*BS*/
    const books = service.getAll();
    expect(books.length).toBe(2);/*BE*/
  });
});
