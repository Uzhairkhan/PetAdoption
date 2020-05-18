import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <input type="button" value="LogIn" />
        </form>
      </div>
    );
  }
}
