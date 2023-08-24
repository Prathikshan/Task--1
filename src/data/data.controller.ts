import { Controller, Get, Query, NotFoundException } from '@nestjs/common';
import { DataService } from './data.service';
import { ValidationPipe } from '@nestjs/common';

@Controller('api/data')
/**
 * Controller responsible for handling data related requests.
 */
export class DataController {
  constructor(private readonly dataService: DataService) {}

  /**
   * Fetches a list of books.
   * Optionally, you can provide a title query parameter to filter books by title.
   * If no title is provided, all books will be returned.
   *
   * @param {string} title - The title to filter books by (optional).
   * @returns {Array} An array of books matching the filter (if provided).
   * @throws {BadRequestException} Throws an error if the provided title query parameter is invalid.
   * @throws {NotFoundException} Throws an error if no books match the provided title or if the dataset is empty.
   */
  @Get()
  /**
   * Get a list of books.
   * @param {string} title - The title to filter books by (optional).
   * @returns {Array} An array of books.
   * @throws {BadRequestException} Throws an error if the provided title query parameter is invalid.
   * @throws {NotFoundException} Throws an error if no books match the provided title or if the dataset is empty.
   */
  getData(@Query('title', ValidationPipe) title?: string) {
    if (title) {
      const books = this.dataService.getBooks();
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase()),
      );

      if (filteredBooks.length === 0) {
        throw new NotFoundException(
          `No books found with title containing '${title}'`,
        );
      }

      return filteredBooks;
    }

    const books = this.dataService.getBooks();

    if (books.length === 0) {
      throw new NotFoundException('No books found');
    }

    return books;
  }
}
