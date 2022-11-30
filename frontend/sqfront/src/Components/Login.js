import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginsuccess, setLoginsuccess] = React.useState(false);
  const [loginfail, setLoginfail] = React.useState(false);

  const textupdate = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/api/v1/login",
        {
          email: email,
          password: password,
        },
        { mode: "cors" },
        { withCredentials: true }
      )
      .then((res) => {
        
        setCookie("email", res.data.email);
        setCookie("token", res.data.token);
        setLoginsuccess(true);
        setLoginfail(false);
        dispatch(authActions.login());
        dispatch(authActions.currentloggeduser({ email: email }));
        navigate("/");
      })
      .catch(() => {
        
        setLoginfail(true);
        setLoginsuccess(false);
      });
  };

  return (
    <div>
      {loginsuccess && (
        <div className="alert alert-success" role="alert">
          Login Successful
        </div>
      )}
      {loginfail && (
        <div className="alert alert-danger" role="alert">
          Login Failed
        </div>
      )}

      <form>
        <h1>Login</h1>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={textupdate}
            name="email"
            value={email}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={textupdate}
            name="password"
            value={password}
            id="exampleInputPassword1"
          />
        </div>
        <a href="/">Forget Password?</a>
        <br />
        <button type="button" onClick={login} className="btn btn-dark">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
