import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../css/SignUp.css";

function SignUp() {
  return (
    <div className="container">
      <div className="sign-up-f-wrapper-top">
        <div className="sign-up-f-wrapper">
          <span>Welcome, Please sign up</span>
          <form action="" className="signup-form-wrapper">
            <input type="first name" placeholder="first name" />
            <input type="last name" placeholder="second name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="confirm password" placeholder="confirm password" />
            <button className="form-btn" type="submit">
              Sign Up
            </button>
          </form>
          <div className="already-a-mem mem-b">
            Already a member?
            <Link to="/login">LogIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
