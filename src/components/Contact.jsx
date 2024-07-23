import React, { useContext } from "react";
import { AppContext } from "../context/appcontext";

const Contact = () => {
  const {phone, name} = useContext(AppContext);

  return (
    <div>
      <h1>Contact</h1>
      <h2>phone no:{phone}</h2>
      <h2>name:{name}</h2>
    </div>
  );
};

export default Contact;
