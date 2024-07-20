import React, { useEffect, useState } from "react";
import Siderbar from "./Sidebar";
import "../../src/css/Sidebar.css";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/users/all"
        );
        setUsers(response.data.users);
        console.log(response.data);
      } catch (error) {
        console.error("There was an error fetching the users!", error);
      }
    };
    fetchUsers();
  }, []);

  const blockUser = async (userId) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/users/block/${userId}`
      );
      if (response.data.success) {
        setUsers(
          users.map((user) =>
            user._id === userId ? { ...user, blocked: true } : user
          )
        );
      }
    } catch (error) {
      console.error("There was an error blocking the user!", error);
    }
  };

  const handleUnblock = async (userId) => {
    try {
      await axios.put(`http://localhost:4000/api/v1/users/unblock/${userId}`);
      setUsers(users.map(user => user._id === userId ? { ...user, blocked: false } : user));
    } catch (error) {
      console.error("There was an error unblocking the user!", error);
    }
  };

  return (
    <div>
      <Siderbar />
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="user-data">
              <div className="user-heading">
                <h1>USER DETAILS</h1>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S No.</th>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    <th scope="col">Block</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                      <td>
                       {user.blocked ? (
                         <button
                         type="button"
                         className="btn btn-warning"
                         onClick={() => handleUnblock(user._id)}
                       >
                         UNBLOCK
                       </button>
                       ):(
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => blockUser(user._id)}
                          disabled={user.blocked}
                        >
                          {user.blocked ? "BLOCKED" : "BLOCK"}
                        </button>)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
