import React, { useEffect, useState } from "react";
import axios from "axios";

function UniversitiesList() {
  const [business, setbussines] = useState();
  const [status, setStatus] = useState();

  const getData = () => {
    const token = localStorage.getItem("authToken");
    console.log("Token:", token);
    axios
      .get("http://localhost:44366/Api/University/UniversitiesList", {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT in the request headers
      },
    })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("authToken", token);
        setbussines(response.data.universities);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUniversity = (id) => {
    const token = localStorage.getItem("token");
    axios
    .post(
      `http://localhost:44366/Api/User/DeleteUniversity/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log("res", res);
      if (res.data) {
        getData();
        setStatus(res.data);
        setTimeout(() => {
          setStatus(null);
        }, 4000);
        alert("Record deleted successfully!!");
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="containerr">
      <h4 align="center">Universities List</h4>
      {status && <p className="color-red">Deleted successfully!</p>}
      <table className="table table-striped" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>Email</th>
            <th colSpan="8">Action</th>
          </tr>
        </thead>
        <tbody>
          {business?.map((el) => (
            <tr key={el.id}>
              <td>{el.email}</td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteUniversity(el.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UniversitiesList;
