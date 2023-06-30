import "./sidebar.css";
import Logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import Home from "../../assets/hisobot.png"
import Pupils from "../../assets/pupils.png"
import Davomat from "../../assets/davomat.png"
import Group from "../../assets/group.png"
import Messanger from "../../assets/messanger.png"
import Payment from "../../assets/payment.png"

export const Sidebar = () => {
  return (
    <div className="siadebar">
      <div className="sidebar_inner">
        <a href="/home" className="sidebar_logo">
          <img src={Logo} alt="logo" className="sidebar_img" width={48} height={48}/>
          <p className="sidebar_logo_text">
            CRM Panel
          </p>
        </a>
        <hr className="hr" />
        <ul className="sidebar_list">
          <li className="sidebar_item">
            <NavLink className='sidebar_link'>
              <img src={Home} alt="icon" className="sidebar_link_img" width={20} height={20}/>
              <p className="sidebar_link_text">
                Xisobot
              </p>
            </NavLink>
          </li>
          <li className="sidebar_item">
            <NavLink className='sidebar_link'>
              <img src={Pupils} alt="icon" className="sidebar_link_img" width={22} height={22}/>
              <p className="sidebar_link_text">
                O'quvchilar
              </p>
            </NavLink>
          </li>
          <li className="sidebar_item">
            <NavLink className='sidebar_link'>
              <img src={Group} alt="icon" className="sidebar_link_img" width={20} height={20}/>
              <p className="sidebar_link_text">
                Guruhlar
              </p>
            </NavLink>
          </li>
          <li className="sidebar_item">
            <NavLink className='sidebar_link'>
              <img src={Payment} alt="icon" className="sidebar_link_img" width={20} height={20}/>
              <p className="sidebar_link_text">
                To'lovlar
              </p>
            </NavLink>
          </li>
          <li className="sidebar_item">
            <NavLink className='sidebar_link'>
              <img src={Davomat} alt="icon" className="sidebar_link_img" width={20} height={20}/>
              <p className="sidebar_link_text">
                Davomat
              </p>
            </NavLink>
          </li>
          <li className="sidebar_item">
            <NavLink className='sidebar_link'>
              <img src={Messanger} alt="icon" className="sidebar_link_img" width={25} height={25}/>
              <p className="sidebar_link_text">
                Murojatlar
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
