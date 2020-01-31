import React from "react";

function Actioncomponent(props) {
  return (
    <div className={props.operand} onClick={() => props.addKey(props.children)}>
      {props.children}
    </div>
  );
}
export default Actioncomponent;
