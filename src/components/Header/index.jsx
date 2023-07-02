import "./header.css";
import Mode from "../../assets/mode.png";
// import Notificate from "../../assets/notificate.png";

export const Header = (props) => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <div className="header">
      <div className="header_inner">
        <p className="header_paragraph">{props.name}</p>
        <p className="header_date">{`${date}.${month}.${year}`}</p>
        <div className="header_box">
        <select className="header_select">
          <option value="uz" className="header_option">
            Uz
          </option>
          <option value="en" className="header_option">
            Eng
          </option>
        </select>
        <img
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
