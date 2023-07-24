import "./infoDavomat.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { DavomatInfo } from "../../components/DavomatInfo";
// import { useState } from "react";

export const InfoDavomat = () => {

  return (
    <div className="home">
      <div className="container">
        <div className="home_inner">
          <div className="home_left_box">
            <Sidebar />
          </div>
          <div className="home_right_box">
            <Header name='Davomat'/>
            <div className="home_right_box_inner">
             <DavomatInfo/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
