import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
