import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

export default function Show() {
  return (
    <div className="container">
      <h2 className="form-label">Register Show</h2>
      <Form />
      <Link to="/users/signin">SignIn</Link>
    </div>
  );
}
