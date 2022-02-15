import style from "../Login/Login.module.css";
import React from "react";
import { useState } from "react";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, IsLoading } = useLogin();
  const HandelSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <form onSubmit={HandelSubmit} className={style["login-from"]}>
      <div className="login-backgorund">
        {/* <h2>Login:</h2> */}
        <label>
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="off"
            required
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>
        {!IsLoading && <button className="btn">Login</button>}
      </div>
      {IsLoading && (
        <button className="btn" disabled>
          Loding..
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
