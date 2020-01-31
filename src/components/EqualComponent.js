import React from "react";

export default function EqualComponent(props) {
  return (
    <div className={props.operand} onClick={props.resultKey}>
      {props.children}
    </div>
  );
}
