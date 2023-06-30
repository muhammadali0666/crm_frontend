import "./payment.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export const Payment = () => {
  return (
    <div className="pay">
      <div className="container">
        <div className="pay_inner">
          <div className="pay_left_box">
            <Sidebar />
          </div>
          <div className="pay_right_box">
            <Header name="To'lov" />
            <div className="pay_right_box_inner">
              <h1>payment</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
