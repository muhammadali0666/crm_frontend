import { NavLink } from "react-router-dom";
import "./login.css";
import Spline from '@splinetool/react-spline';
  
  
  export const Login = () => {
    return (
      <div className="login">
      <Spline scene="https://prod.spline.design/ac1BIJRVXqUWMyDz/scene.splinecode" />
      <div className="container">
        <div className="login_inner">
          <h2 className="login_paragraph">Login</h2>
          <form className="login_form">
            <label htmlFor="email" className="login_label">
              <input
                className="login_input"
                type="email"
                placeholder="✉️ Email"
                id="email"
                required
              />
            </label>
            <label htmlFor="password" className="login_label">
              <input
                className="login_input"
                type="password"
                placeholder="🔑 Password"
                id="pasword"
                required
              />
            </label>
            <NavLink className='login_navigate' to="/">
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
