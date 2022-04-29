import { useState } from "react";
import useSwr from "swr";
import axios from "axios";



const Createuser = () => {
  const url = "http://localhost:3001/api/users";
  const fetcher = (url) => axios(url).then((res) => res.data);
  const [author, setAuthor] = useState({
    name: "",
    surname: "",
    date_of_birth: "",
  });
  const {data, mutate} = useSwr(url, fetcher);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setAuthor("");
    const newUser = {
      name: author.name,
      surname: author.surname,
      date_of_birth: author.date_of_birth,
    };
    mutate([...data, newUser], false);
    await axios.post(url, newUser);
    mutate();
  };

  return (
    <>
    <h1>Createuser</h1>
    <form onSubmit={handlerSubmit}>
      <input onChange={(e) => setAuthor(e.target.value)}
        type="text"
        id="name"
        value={author.name}></input>
        <input onChange={(e) => setAuthor(e.target.value)}
        type="text"
        id="surname"
        value={author.surname}></input>
        <input onChange={(e) => setAuthor(e.target.value)}
        type="text"
        id="date_of_birth"
        value={author.date_of_birth}></input>
      <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Createuser;