import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

export default function loginShow() {
  return (
    <div className="container">
      <h2 className="form-label">Login Show</h2>
      <Form />
      <Link to="/users/register">Register</Link>
    </div>
  );
}
