import { NavLink } from "react-router-dom";
import "./login.css";
import Spline from "@splinetool/react-spline";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    fetch("http://localhost:4001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert(data.msg);
        }
        if (data.token) {
          window.location.href = "/home";
        }
      });
  };

  return (
    <div className="login">
      <Spline scene="https://prod.spline.design/ac1BIJRVXqUWMyDz/scene.splinecode" />
      <div className="container">
        <div className="login_inner">
          <h2 className="login_paragraph">Login</h2>
          <form className="login_form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="login_label">
              <input
                className="login_input"
                type="email"
                placeholder="✉️ Email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password" className="login_label">
              <input
                className="login_input"
                type="password"
                placeholder="🔑 Password"
                id="pasword"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <NavLink className="login_navigate" to="/">
              register?
            </NavLink>
            <button className="login_btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
