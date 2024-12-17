import axios, { AxiosResponse } from "axios";
import { server } from "./mocks/server";
import { BookWithStock } from "./types/book";
import { ApiInterface } from "./types/ApiInterface";

server.listen();
export class BookSearchApiClient {
  constructor(
    private apiInterface: ApiInterface,
    private format: "json" | "xml"
  ) {}

  async getBooksByAuthor(authorName: string, limit: number) {
    return this.apiInterface.getBooksByAuthor(authorName, limit, this.format);
  }
}

export class BookApiA implements ApiInterface {
  constructor(
    private baseUrl: string = "http://api.book-seller-example.com/by-author"
  ) {}

  async getBooksByAuthor(
    authorName: string,
    limit: number,
    format: "json" | "xml"
  ) {
    try {
      const response: AxiosResponse<BookWithStock[]> = await axios.get(
        this.baseUrl,
        {
          params: { q: authorName, limit, format },
        }
      );

      if (format === "json") {
        return response.data.map((item) => ({
          title: item.book.title,
          author: item.book.author,
          isbn: item.book.isbn,
          quantity: item.stock.quantity,
          price: item.stock.price,
        }));
      }

      //TODO: Handle XML response
      if (format === "xml") {
        return [];
      }
      return [];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.status, error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      throw error;
    }
  }
}
