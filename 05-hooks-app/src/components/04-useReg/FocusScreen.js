import React, { useRef } from "react";
import "../03-examples/custom.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1>Focus Screen</h1>

      <hr />

      <input
        className="form-control mb-5"
        placeholder="Su nombre"
        ref={inputRef}
      ></input>

      <button className="btn btn-outline-primary" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
