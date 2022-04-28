import { useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch("/api/books");
    const data = await response.json();
    setBooks(data);
  };

  return (
    <>
      <h1>Books</h1>
      <button onClick={fetchBooks}>Load books</button>
      {books.map((book) => {
        return (
          <div key={book.id}>
            {book.id} {book.title} {book.year}
          </div>
        );
      })}
    </>
  );
};

export default Books;
