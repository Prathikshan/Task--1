import { Injectable } from '@nestjs/common';

@Injectable()
/**
 * Service responsible for providing data related to books.
 */
export class DataService {
  private readonly books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
  ];

  /**
   * Retrieves a list of books.
   * @returns {Array} An array of book objects.
   */
  getBooks() {
    return this.books;
  }
}
