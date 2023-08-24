// Import necessary modules and classes for testing
import { Test, TestingModule } from '@nestjs/testing';
import { DataService } from './data.service';

// Describe block for the test suite of the DataService class
describe('DataService', () => {
  let service: DataService;

  // Before each test, create a testing module and compile it
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataService], // Register DataService as a provider
    }).compile();

    service = module.get<DataService>(DataService); // Get an instance of DataService
  });

  // Test case: Ensure that the service is defined
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Test case: Ensure that the getBooks() method returns an array of books
  it('should return an array of books', () => {
    const result = service.getBooks(); // Call the getBooks() method

    // Assertion: The result should be an array with a length of 3
    expect(result).toHaveLength(3);

    // Assertion: The first book in the result array should have the title 'Book 1'
    expect(result[0].title).toBe('Book 1');
  });
});
