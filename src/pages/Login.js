import React, { useEffect, useState, useContext } from "react";
import "../css/Login.css";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";

const PATH = "http://localhost:3033";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitCount, setSubmitCoount] = useState(0);
  const { userDispatch, userState } = useContext(UserContext);

  useEffect(() => {
    if (userState.isLoggedIn) {
      props.history.push("/");
    }
  }, [userState.isLoggedIn, props.history]);

  useEffect(() => {
    async function login() {
      try {
        const userDetail = {
          email_id: email,
          password: password,
        };
        const response = await axios.post(`${PATH}/login`, userDetail);
        if (response.status === 200) {
          const data = response.data.data;
          userDispatch({
            type: "LOGIN",
            payload: { first_name: data.first_name, user_id: data.user_id },
          });
          props.history.push("/");
        }
      } catch (error) {}
    }

    if (submitCount > 0) {
      login();
    }

    // eslint-disable-next-line
  }, [submitCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitCoount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <div className="login-f-wrapper-top">
        <div className="login-f-wrapper">
          <span>Welcome, Please LogIn</span>
          <form
            action=""
            className="login-form-wrapper"
            onSubmit={handleSubmit}
            autoComplete="true"
          >
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

export default withRouter(Login);
