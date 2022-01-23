import React, { useEffect, useState } from "react";
import "./effect.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // return;
    // console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("formState cambio");
  }, [formState]);

  useEffect(() => {
    // console.log("email cambio");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setformState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>

      {name === "123" && <Message />}

      <hr />
    </>
  );
};
