import React, { useState } from "react";
import loginStyle from "../loginStyle.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword( auth ,email, password);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="login_container">
      <div className="login_wrapper">
        <span className="login_logo">Chat App</span>
        <span className="login_title">Log In</span>
        <form onSubmit={handelSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email..."
          />
          <input
          value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="login_button">Login</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p className="login_askQuestion">
          Create new account?<Link to="/register">Sign-Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
