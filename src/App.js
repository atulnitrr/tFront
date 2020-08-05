import React, { useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AppContext, { ourReducer, initialState } from "./context/AppContext";
import UserContext, {
  userStateReducer,
  userInitialState,
} from "./context/UserContext";

function App() {
  const [appState, dispatch] = useReducer(ourReducer, initialState);
  const [userState, userDispatch] = useReducer(
    userStateReducer,
    userInitialState
  );

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
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
    </UserContext.Provider>
  );
}

export default App;
