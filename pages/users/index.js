import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
//import expressService from "../../axiosConfig";

//const { data, error } = useSWR("users", () => exressService.get("/api/users").then((res) => res.data));
  const Users = ({ users }) => {
  const fetcher = (url) => axios.get("http://localhost:3001/api/users").then((res) => res.data);
  const { data, error, mutate } = useSWR("/api/users", fetcher);
  if (error) return <div>ошибка загрузки</div>;
  if (!data) return <div>загрузка...</div>;

  const deleteUser = async(id) => {
    await axios
    .delete(`http://localhost:3001/api/users/${id}`)
    await mutate()
  }

  return (
  <>
    Users:
    <ul>
    {users.map((user) => (
      <li key={user.id}>Имя: {user.name}, Фамилия: {user.surname}, Дата рождения: {user.date_of_birth} <button onClick={() => deleteUser(user.id)}>Удалить</button></li>
    ))
    }
    </ul>
  </>
  )
};


export async function getStaticProps() {
  const users = await axios.get('http://localhost:3001/api/users').then((res) => res.data);
  
  return {
    props: {
      users,
    },
  }
}
export default Users;
/*
  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <>
      <h1>Users</h1>
      <button onClick={fetchUsers}>Load users</button>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.id} {user.name} {user.surname} {user.date_of_birth}
          </div>
        );
      })}
    </>
    */
