import axios, { AxiosResponse } from "axios";
import { server } from "./mocks/server";
import { BookWithStock } from "./types/book";

server.listen();
class BookSearchApiClient {
  constructor(public format: "json" | "xml") {}

  async getBooksByAuthor(authorName: string, limit: number) {
    try {
      const response: AxiosResponse<BookWithStock[]> = await axios.get(
        `http://api.book-seller-example.com/by-author`,
        {
          params: {
            q: authorName,
            limit: limit,
            format: this.format,
          },
        }
      );

      if (this.format === "json") {
        return response.data.map((item) => ({
          title: item.book.title,
          author: item.book.author,
          isbn: item.book.isbn,
          quantity: item.stock.quantity,
          price: item.stock.price,
        }));
      }

      //TODO: Handle XML response
      if (this.format === "xml") {
        return [];
      }
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

export default BookSearchApiClient;
