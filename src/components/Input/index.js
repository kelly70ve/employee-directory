import React from "react";
import "./style.css";

function Input(props) {
  return (
    <div className="input-group mt-4">
      <input type="text" className="form-control" placeholder="Search Employees" aria-label="Search" aria-describedby="basic-addon1" 
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      type={props.type}
      />
    </div>
  );
}

export default Input;