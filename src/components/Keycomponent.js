import React from "react";

function Keycomponent(props) {
  return (
    <div onClick={() => props.addKey(props.children)}>{props.children}</div>
  );
}

export default Keycomponent;
