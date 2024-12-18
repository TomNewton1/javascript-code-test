import axios, { AxiosResponse } from "axios";
import { BookWithStock } from "../types/book";
import { BookApi } from "../types/api";
import { Format } from "../types/bookSearchApiClient";
export class BookApiA implements BookApi {
  baseUrl = "http://api.book-seller-example.com/by-author";

  async getBooksByAuthor(authorName: string, limit: number, format: Format) {
    return this.fetchData({ authorName, limit }, format);
  }

  async fetchData(
    queryParams: Record<string, string | number>,
    format: Format
  ) {
    try {
      const response: AxiosResponse<BookWithStock[]> = await axios.get(
        this.baseUrl,
        {
          params: queryParams,
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
      else if (format === "xml") {
        return [];
      } else {
        throw new Error("Invalid format");
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
