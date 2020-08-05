import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

import "../css/SignUp.css";

const PATH = "http://localhost:3033";

function SignUp(props) {
  const [registerCount, setRegisterCount] = useState(0);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    async function register() {
      try {
        const userDetail = {
          first_name: first_name,
          last_name: last_name,
          email_id: email,
          password: password,
        };
        const response = await axios.post(`${PATH}/signUp`, userDetail);
        if (response.status == 200) {
          console.log(response.data);
          console.log(props.history);
          props.history.push("/login");
        }
      } catch (error) {}
    }
    if (registerCount > 0) {
      register();
    }
  }, [registerCount]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisterCount((prev) => prev + 1);
  };
  return (
    <div className="container">
      <div className="sign-up-f-wrapper-top">
        <div className="sign-up-f-wrapper">
          <span>Welcome, Please sign up</span>
          <form
            action=""
            className="signup-form-wrapper"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="first name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value.trim())}
              required
            />
            <input
              type="text"
              placeholder="last name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value.trim())}
              required
            />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              required
              minLength="5"
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
              required
              minLength="5"
            />
            <input
              type="password"
              placeholder="confirm password"
              minLength="5"
              required
            />
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

export default withRouter(SignUp);
