import React from "react";
import "./style.css";

function Input() {
  return (
    <div class="input-group mt-4">
      <input type="text" class="form-control" placeholder="Search Employees" aria-label="Search" aria-describedby="basic-addon1" />
    </div>
  );
}

export default Input;