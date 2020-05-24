import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form className="myForm">
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <input className="button" type="submit" value="LogIn" />
        </form>
      </div>
    );
  }
}
