
import React from "react";
import "./App.css";


export function Heading(props) {
  return (
    <h1 className="page-heading">
      {props.title}
    </h1>
  );
}
