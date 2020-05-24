import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form className="myForm">
          <div className="form-group">
            <label htmlFor="firstName">FirstName</label>
            <input type="text" id="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">LastName</label>
            <input type="text" id="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input type="text" id="mobile" />
          </div>
          <div className="form-group">
            <label htmlFor="currentAddress">Current Address</label>
            <input type="text" id="currentAddress" />
          </div>
          <div className="form-group">
            <label htmlFor="perAddress">Permenant Address</label>
            <input type="text" id="perAddress" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" id="password2" />
          </div>

          <input className="button" type="submit" value="Register" />
        </form>
      </div>
    );
  }
}
