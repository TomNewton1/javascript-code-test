import BookSearchApiClient from "./BookSearchApiClient";
// Fix: Need to use the new keyword to create a new instance of the class
// The format parameter is required
const client = new BookSearchApiClient("json");
const booksByShakespeare = client.getBooksByAuthor("Shakespeare", 10);
