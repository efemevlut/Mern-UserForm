import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Table.style.css";
import { fetchData } from "../helper/FetchData";

function TableComp() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData("/api/users")
      .then((response) => {
        setUser(response);
      })
      .catch((err) => console.log("message", err));
  },[]);

  return (
    <Table striped bordered hover className="table-wrapper">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      {user?.map((data, i) => {
        return (
          <tbody key={i}>
            <tr>
              <td>{i+1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.phone}</td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
}

export default TableComp;
