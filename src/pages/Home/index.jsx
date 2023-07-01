import "./home.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {Card} from "../../components/Card"

export const Home = () => {

  return (
    <div className="home">
      <div className="container">
        <div className="home_inner">
          <div className="home_left_box">
            <Sidebar />
          </div>
          <div className="home_right_box">
            <Header name="Xisobot" />
            <div className="home_right_box_inner">
              <Card/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
