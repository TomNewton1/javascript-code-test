import { server } from "./mocks/server";
import { BookApi } from "./types/api";
import { Format } from "./types/bookSearchApiClient";

server.listen();
export class BookSearchApiClient {
  constructor(private api: BookApi, private format: Format) {}

  async getBooksByAuthor(authorName: string, limit: number) {
    return this.api.getBooksByAuthor(authorName, limit, this.format);
  }
}
