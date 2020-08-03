import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
        <Route path="/signup" exact>
          <SignUp></SignUp>
        </Route>
        <Route path="/" exact>
          <Home></Home>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
