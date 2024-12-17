export interface Book {
  title: string;
  author: string;
  isbn: string;
}

export interface Stock {
  quantity: number;
  price: number;
}

export interface BookWithStock {
  book: Book;
  stock: Stock;
}
