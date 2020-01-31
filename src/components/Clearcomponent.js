import React from "react";

export default function Clearcomponent(props) {
  return (
    <div className={props.operand} onClick={props.clearResult}>
      {props.children}
    </div>
  );
}
