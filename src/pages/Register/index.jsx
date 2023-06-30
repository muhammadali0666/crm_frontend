import { NavLink } from "react-router-dom";
import "./register.css";
import Spline from '@splinetool/react-spline';

export const Register = () => {
  return (
    <div className="auth">
      <Spline scene="https://prod.spline.design/ac1BIJRVXqUWMyDz/scene.splinecode" />
      <div className="container">
        <div className="auth_inner">
          <h2 className="auth_paragraph">Register</h2>
          <form className="auth_form">
            <label htmlFor="username" className="auth_label">
              <input
                className="auth_input"
                type="text"
                placeholder="👤 Username"
                id="username"
                required
              />
            </label>
            <label htmlFor="email" className="auth_label">
              <input
                className="auth_input"
                type="email"
                placeholder="✉️ Email"
                id="email"
                required
              />
            </label>
            <label htmlFor="password" className="auth_label">
              <input
                className="auth_input"
                type="password"
                placeholder="🔑 Password"
                id="pasword"
                required
              />
            </label>
            <NavLink className='auth_login' to="/login">
              login?
            </NavLink>
            <button className="auth_btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
