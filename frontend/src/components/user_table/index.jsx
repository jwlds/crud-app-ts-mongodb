import React, { useState, useEffect } from "react";
import axios from "axios";
import FormUserUpdate from "../off_canvas/updateUser"
import Swal from "sweetalert2";
import LoadingSpinner from "../loading/index.jsx";

const UserTable = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    setLoading(true);
    axios.get("http://localhost:8080/user/get")
      .then((response) => {
        setUserList(response.data.payload);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching user list:", error);
      });
  };

  const deleteUser = (id) => {
    setLoading(true);
    axios.delete(`http://localhost:8080/user/delete/${id}`)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: response.data.status,
            text: response.data.message,
          });
          setUserList((prevUserList) =>
            prevUserList.filter((user) => user._id !== id)
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: response.data.status,
          text: response.data.message,
        });
      });
  };


  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="h1-hist">CRUD APP</h1>
        <table className="table border shadow table-pos">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Nome</th>
              <th scope="col">Sobrenome</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                <FormUserUpdate user={user} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Excluir
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
