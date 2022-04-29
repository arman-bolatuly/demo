import { useState } from "react";
import useSwr from "swr";
import axios from "axios";

const Createbooks = () => {
  const url = "http://localhost:3000/api/books";
  const fetcher = (url) => axios(url).then((res) => res.data);
  const [book, setBook] = useState({
    id: "",
    title: "",
    year: "",
  });
  const { data, mutate } = useSwr(url, fetcher);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setBook("");
    const newBook = {
        title: book.title,
        year: parseInt(book.year)
    };
    mutate([...data, newBook], false);
    await axios.post(url, newBook);
    mutate();
  }

  return (
    <>
    <h1>Createbooks</h1>
    <form onSubmit={handlerSubmit}>
      <input onChange={(e) => setBook(e.target.value)}
        type="text"
        id="name"
        value={book.name}></input>
        <input onChange={(e) => setBook(e.target.value)}
        type="number"
        id="year"
        value={book.year}></input>
      <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Createbooks;
