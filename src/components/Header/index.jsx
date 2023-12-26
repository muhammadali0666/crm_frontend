import "./header.css";
import Mode from "../../assets/mode.png";
import { useState, useEffect } from "react";
// import { DarkModeSwitch } from "react-toggle-dark-mode";

export const Header = (props) => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let getTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(getTheme);


   !getTheme ? localStorage.setItem("theme", "light") : getTheme
  

  const modeToggle = () => {
    if (getTheme === "light") {
      setTheme("other");
      localStorage.setItem("theme", "other");
    } else if (theme === "other") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  // const [isDarkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = (checked) => {
  //   setDarkMode(checked);
  // };

  useEffect(() => {
    document.body.classList = theme;
  });

  return (
    <div className="header">
      <div className="header_inner">
        <p className="header_paragraph">{props.name}</p>
        <p className="header_date">{`${date}.${month}.${year}`}</p>
        <div className="header_box">
          <select className="header_select" disabled>
            <option value="uz" className="header_option">
              Uz
            </option>
            <option value="en" className="header_option">
              Eng
            </option>
          </select>
          {/* <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={120}
          /> */}
          <img
            onClick={modeToggle}
            src={Mode}
            alt="mode"
            className="header_mode"
            width={40}
            height={40}
          />
          {/* <img
          src={Notificate}
          alt="mode"
          className="header_mode"
          width={40}
          height={40}
        /> */}
        </div>
      </div>
    </div>
  );
};
