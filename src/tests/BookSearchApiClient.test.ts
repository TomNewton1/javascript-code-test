import { expect, test } from "vitest";
import BookSearchApiClient from "../BookSearchApiClient";
import { shakespeareBooks } from "../mocks/fixtures";

test("getBooksByAuthor returns first 2 books by Shakespeare", async () => {
  const client = new BookSearchApiClient("json");

  const books = await client.getBooksByAuthor("Shakespeare", 2);

  expect(books.length).toBe(2);
  expect(books[0].title).toEqual(shakespeareBooks[0].book.title);
  expect(books[1].title).toEqual(shakespeareBooks[1].book.title);
});
