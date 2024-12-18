import { expect, test } from "vitest";
import { BookSearchApiClient } from "../BookSearchApiClient";
import { shakespeareBooks, rowlingBooks } from "../mocks/fixtures";
import { BookApiA } from "../bookApis/BookApiA";

test("getBooksByAuthor returns first 2 books by Shakespeare", async () => {
  const api = new BookApiA();
  const client = new BookSearchApiClient(api, "json");

  const books = await client.getBooksByAuthor("Shakespeare", 2);

  expect(books.length).toBe(2);
  expect(books[0].title).toEqual(shakespeareBooks[0].book.title);
  expect(books[1].title).toEqual(shakespeareBooks[1].book.title);
});

test("getBooksByAuthor returns first 2 books by Rowling", async () => {
  const api = new BookApiA();
  const client = new BookSearchApiClient(api, "json");

  const books = await client.getBooksByAuthor("Rowling", 2);

  expect(books.length).toBe(2);
  expect(books[0].title).toEqual(rowlingBooks[0].book.title);
  expect(books[1].title).toEqual(rowlingBooks[1].book.title);
});
