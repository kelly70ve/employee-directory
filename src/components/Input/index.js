import React from "react";
import "./style.css";

function Input() {
  return (
    <div className="input-group mt-4">
      <input type="text" className="form-control" placeholder="Search Employees" aria-label="Search" aria-describedby="basic-addon1" />
    </div>
  );
}

export default Input;