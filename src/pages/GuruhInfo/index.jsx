import "./guruhInfo.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { GroupInfoList } from "../../components/GroupInfoList";
// import { useState } from "react";

export const GuruhInfo = () => {

  return (
    <div className="home">
      <div className="container">
        <div className="home_inner">
          <div className="home_left_box">
            <Sidebar />
          </div>
          <div className="home_right_box">
            <Header name='Guruhlar'/>
            <div className="home_right_box_inner">
             <GroupInfoList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
