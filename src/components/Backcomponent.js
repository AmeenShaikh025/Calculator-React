import React from "react";

export default function Backcomponent(props) {
  return (
    <div className={props.operand} onClick={props.backKey}>
      {props.children}
    </div>
  );
}
