import React from "react";

function Trow(props) {
  return (
    <tr>
      <td><img src={props.image} /></td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td><a href={'mailto:' + props.email}>{props.email}</a></td>
      <td>{props.dob}</td>
    </tr>
  );
}

export default Trow;