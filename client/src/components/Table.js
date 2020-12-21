import React from "react";
import Table from 'react-bootstrap/Table';
import "./Table.style.css";

function TableComp() {
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
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComp;
