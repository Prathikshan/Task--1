// Import necessary modules and classes for testing
import { Test, TestingModule } from '@nestjs/testing';
import { DataController } from './data.controller';
import { DataService } from './data.service';

// Begin describing the test suite for the DataController
describe('DataController', () => {
  let controller: DataController;

  // Set up a "beforeEach" hook to run before each test case
  beforeEach(async () => {
    // Create a testing module with the DataController and DataService
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataController], // Register the DataController
      providers: [DataService], // Register the DataService
    }).compile();

    // Obtain an instance of DataController from the testing module
    controller = module.get<DataController>(DataController);
  });

  // Test case: Ensure that the DataController is defined
  it('should be defined', () => {
    expect(controller).toBeDefined(); // Assert that the controller is defined
  });

  // Begin describing the 'getData' method within DataController
  describe('getData', () => {
    // Test case: Ensure that 'getData' returns an array of books
    it('should return an array of books', () => {
      const result = controller.getData(); // Call the 'getData' method
      expect(result).toHaveLength(2); // Assert the length of the result array is 2
      expect(result[0].title).toBe('Book 1'); // Assert the title of the first book in the array
    });
  });
});
