export class BookResponseDto {
  bookId: number;
  authorId: number;
  publisherId: number;
  isbn: number;
  bookName: string;
  description: string;
  category: string;
  available: boolean;

  constructor(
    bookId: number,
    authorId: number,
    publisherId: number,
    isbn: number,
    bookName: string,
    description: string,
    category: string,
    available: boolean
  ) {
    this.bookId = bookId;
    this.authorId = authorId;
    this.publisherId = publisherId;
    this.isbn = isbn;
    this.bookName = bookName;
    this.description = description;
    this.category = category;
    this.available=available
  }
}
