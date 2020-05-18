import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import RegShow from "../components/User/Register/Show";
import LogShow from "../components/User/Login/loginShow";

export default function Header() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <div className="main">
            <div className="logo">
              <Link>
                <img src="logo (1).png" alt="logo" />
              </Link>
            </div>
            <ul className="nav">
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/pets">
                  Pets
                </Link>
              </li>
              <li>
                <Link className="nav-link">Adopt</Link>
              </li>
              <li>
                <Link className="nav-link" to="/user/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </header>

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/user/register" component={RegShow} exact={true} />
          <Route path="/user/login" component={LogShow} exact={true} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
