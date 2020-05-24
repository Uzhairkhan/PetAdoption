import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Home";
import Category from "./components/Category/Category";
import Pets from "./components/Pets/Pets";
import SignIn from "./components/User/Login/loginShow";
import Register from "./components/User/Register/Show";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header id="main-header">
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src="logo (1).png" alt="" />
              </Link>
            </div>
            <nav id="main-nav">
              <ul>
                <li>
                  <Link className="nav-links" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-links" to="/pets">
                    Pets
                  </Link>
                </li>
                <li>
                  <Link className="nav-links" to="/category">
                    Category
                  </Link>
                </li>
                <li>
                  <Link className="nav-links" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="nav-links" to="/users/signin">
                    SignIn
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/pets" component={Pets} exact={true} />
          <Route path="/category" component={Category} exact={true} />
          <Route path="/users/signin" component={SignIn} />
          <Route path="/users/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
