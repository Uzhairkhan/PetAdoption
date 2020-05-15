import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
function App() {
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
                <Link className="nav-link">Home</Link>
              </li>
              <li>
                <Link className="nav-link">Breed</Link>
              </li>
              <li>
                <Link className="nav-link">Adopt</Link>
              </li>
              <li>
                <Link className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
