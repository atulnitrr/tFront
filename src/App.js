import React, { useReducer, createContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AppContext, { ourReducer, initialState } from "./context/AppContext";

function App() {
  const [appState, dispatch] = useReducer(ourReducer, initialState);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
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
    </AppContext.Provider>
  );
}

export default App;
