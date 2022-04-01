import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export const Header = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    console.log("kaisa hai bro??")

    loaduser();

  }, []);
  const loaduser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result.data);
    setUser(result.data);


  }
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loaduser();
  };
  return (

    <div>
      <h1>header page</h1>
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>

                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                  <Link class="btn btn-outline-primary mr-2" to={`/users/Edit/${user.id}`}>Edit</Link>

                  <Link class="btn btn-danger mr-2" onClick={()=>deleteUser(user.id)}>Delete</Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
};
export default Header;



