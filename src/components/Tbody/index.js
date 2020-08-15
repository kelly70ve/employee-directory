import React from 'react';
import Trow from "../Trow";

function Tbody(props) {

  var rows = props.employees.map(employee => (
    <Trow 
    image = {employee.image}
    name = {employee.name}
    phone = {employee.phone}
    email = {employee.email}
    dob = {employee.dob}
  />
  ))

    return (
      <tbody>
          {rows}
      </tbody>
    );
}

export default Tbody;