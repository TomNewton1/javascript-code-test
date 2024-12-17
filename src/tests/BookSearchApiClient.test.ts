import { expect, test } from "vitest";
import { BookSearchApiClient, BookApiA } from "../BookSearchApiClient";
import { shakespeareBooks, rowlingBooks } from "../mocks/fixtures";

test("getBooksByAuthor returns first 2 books by Shakespeare", async () => {
  const apiInterface = new BookApiA();
  const client = new BookSearchApiClient(apiInterface, "json");

  const books = await client.getBooksByAuthor("Shakespeare", 2);

  expect(books.length).toBe(2);
  expect(books[0].title).toEqual(shakespeareBooks[0].book.title);
  expect(books[1].title).toEqual(shakespeareBooks[1].book.title);
});

test("getBooksByAuthor returns first 2 books by Rowling", async () => {
  const apiInterface = new BookApiA();
  const client = new BookSearchApiClient(apiInterface, "json");

  const books = await client.getBooksByAuthor("Rowling", 2);

  expect(books.length).toBe(2);
  expect(books[0].title).toEqual(rowlingBooks[0].book.title);
  expect(books[1].title).toEqual(rowlingBooks[1].book.title);
});
