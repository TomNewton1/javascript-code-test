import axios from "axios";

import { server } from "./mocks/server";

server.listen();
class BookSearchApiClient {
  constructor(public format: "json" | "xml") {}

  async getBooksByAuthor(authorName: string, limit: number) {
    try {
      const response = await axios.get(
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
        const json = response.data;
        return json.map((item: any) => ({
          title: item.book.title,
          author: item.book.author,
          isbn: item.book.isbn,
          quantity: item.stock.quantity,
          price: item.stock.price,
        }));
      }

      if (this.format === "xml") {
      }
    } catch (error) {
      throw error;
    }
  }
}

export default BookSearchApiClient;
