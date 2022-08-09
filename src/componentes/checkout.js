import React from "react";
export default function Checkout(props) {
  function nomes() {
    return <div> eoq {props.name}</div>;
  }
  //console.log(props.name);
  return <button onClick={() => nomes()}>Clica</button>;
}
