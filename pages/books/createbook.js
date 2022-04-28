import { useState } from "react";
import axios from "axios";

const Createbooks = () => {
  const url = "http://localhost:3000/api/books";
  const [book, setBook] = useState({
    id: "",
    title: "",
    year: "",
  });

  function submitBook(e) {
    axios
      .post(url, {
        id: parseInt(book.id),
        title: book.title,
        year: parseInt(book.year),
      })
      .then((res) => {
        console.log(res.book);
      });
  }

  function handle(e) {
    const newBook = { ...book };
    newBook[e.target.id] = e.target.value;
    setBook(newBook);
  }

  return (
    <>
      <h1>Createbooks</h1>

      <input
        type="number"
        id="id"
        value={book.id}
        onChange={(e) => setBook(e.target.value)}
      />
      <input
        type="text"
        id="title"
        value={book.title}
        onChange={(e) => setBook(e.target.value)}
      />
      <input
        type="number"
        id="year"
        value={book.year}
        onChange={(e) => setBook(e.target.value)}
      />

      <button onClick={submitBook}>Submit book</button>
    </>
  );
};

export default Createbooks;
