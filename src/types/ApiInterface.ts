export interface FlatBookWithStock {
  title: string;
  author: string;
  isbn: string;
  quantity: number;
  price: number;
}
export interface ApiInterface {
  getBooksByAuthor(
    authorName: string,
    limit: number,
    format: "json" | "xml"
  ): Promise<FlatBookWithStock[]>; // TODO: Make this generic
}
