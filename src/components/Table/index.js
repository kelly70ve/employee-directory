import React from "react";
import Tbody from "../Tbody";

function Table() {
  return (
    <table className="table table-hover mt-4 text-center">
    <thead className="bg-dark text-white shadow-sm">
      <tr>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
      <Tbody />
    </table>
  );
}

export default Table;