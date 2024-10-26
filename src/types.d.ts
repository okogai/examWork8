export interface IQuote {
  author: string;
  category: string;
  text: string;
  date: string;
}

export interface IQuoteFromDB {
  author: string;
  category: string;
  text: string;
  date: string;
  id: string;
}