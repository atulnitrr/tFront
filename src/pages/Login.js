import React from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="login-f-wrapper-top">
        <div className="login-f-wrapper">
          <span>Welcome, Please LogIn</span>
          <form action="" className="login-form-wrapper">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button className="form-btn" type="submit">
              LogIn
            </button>
          </form>
          <div className="already-a-mem-login mem-b">
            Not a member?
            <Link to="/signup">SignUp</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
