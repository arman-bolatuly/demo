import axios from "axios";
import React from "react";
import useSWR from "swr";


const Editbooks = ({books}) => {
  const fetcher = (url) => axios.get(`http://localhost:3001/api/books${id}`).then((res) => res.data);
  const { data, error, mutate } = useSWR(`/api/books${id}`, fetcher);
  if (error) return <div>ошибка загрузки</div>;
  if (!data) return <div>загрузка...</div>;

  const updateBook = async(id) => {
    await axios
    .patch(`http://localhost:3001/api/books/${id}`)
    await mutate()
  }

  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  
  return (
    <>
      <h1>Editbooks</h1>
      <div>
        <h1>{book.name}</h1>
        <p>{book.year}</p>
        <button onClick={updatePost}>Update Post</button>
    </div>
    </>
  );
};


export async function getStaticProps() {
  const books = await axios.get(`http://localhost:3001/api/books${id}`).then((res) => res.data);
  
  return {
    props: {
      books,
    },
  }
}
export default Editbooks;


