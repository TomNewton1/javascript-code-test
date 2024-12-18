import { Format } from "./bookSearchApiClient";

export interface FlatBookWithStock {
  title: string;
  author: string;
  isbn: string;
  quantity: number;
  price: number;
}
export interface BookApi {
  getBooksByAuthor(
    authorName: string,
    limit: number,
    format: Format
  ): Promise<FlatBookWithStock[]>;
}
