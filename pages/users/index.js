import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import expressService from "../../axiosConfig";

const fetcher = (baseUrl) => axios.get(baseUrl).then((res) => res.data);

const Users = () => {
  const { data, error } = useSWR("users", () =>
    exressService.get("/api/users").then((res) => res.data)
  );

  

  if (error) return <div>ошибка загрузки</div>;
  if (!data) return <div>загрузка...</div>;

  return <div>Привет, {data.name}!</div>;
};

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
