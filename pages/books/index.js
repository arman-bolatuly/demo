import useSWR from "swr";
import axios from "axios";


const Books = ({books}) => {
  const fetcher = (url) => axios.get("http://localhost:3001/api/books").then((res) => res.data);
  const { data, error, mutate } = useSWR("/api/books", fetcher);
  if (error) return <div>ошибка загрузки</div>;
  if (!data) return <div>загрузка...</div>;

  const deleteBook = async(id) => {
    await axios
    .delete(`http://localhost:3001/api/books/${id}`)
    await mutate()
  }

  return (
  <>
    Books:
  <ul>
    {books.map((book) => (
      <li key={book.id}>Название книги: {book.name}, Автор книги: {book.author.name}<button onClick={() => deleteBook(book.id)}>Удалить</button></li>
    ))
    }
    </ul>
  </>
  )
};

export async function getStaticProps() {
  const books = await axios.get('http://localhost:3001/api/books').then((res) => res.data);
  
  return {
    props: {
      books,
    },
  }
}
export default Books;