import { books } from "../../../data/books";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(books);
  } else if (req.method === "POST") {
    const book = req.body.book;
    const newBook = {
      id: ,
      title: book,
      year: 
    };
    books.push(newBook);
    res.status(201).json(newBook);
  }
}



