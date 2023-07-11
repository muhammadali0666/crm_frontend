import "./home.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Card } from "../../components/Card";
import { BarChart } from "../../components/BarChart.js";
import { useState } from "react";
import { Data } from "../../data";

export const Home = () => {
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: "students",
        data: Data.map((chain) => chain.students),
        backgroundColor: [
          "#2F49D1",
          "#E13468"
        ]
      },
    ],
  });

  return (
    <div className="home">
      <div className="container">
        <div className="home_inner">
          <div className="home_left_box">
            <Sidebar />
          </div>
          <div className="home_right_box">
            <Header name="Xisobot"/>
            <div className="home_right_box_inner">
              <Card/>
              <BarChart chartData={userData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
