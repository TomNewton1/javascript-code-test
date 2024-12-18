import { BookApiA } from "./bookApis/BookApiA";
import { BookSearchApiClient } from "./BookSearchApiClient";

const bookApiA = new BookApiA();
const client = new BookSearchApiClient(bookApiA, "json");

const books = await client.getBooksByAuthor("Shakespeare", 2);
console.log(books);
