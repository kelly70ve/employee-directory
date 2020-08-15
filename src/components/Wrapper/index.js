import React from "react";

function Wrapper(props) {
  return (
    <div className="container p-3">
      {props.children}
    </div>
  );
}

export default Wrapper;