import "./payment.css";
import Completed from "../../assets/completed.png";
import { useState, useEffect } from "react";

export const PaymentsList = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/get_paymentors`)
      .then((res) => res.json())
      .then((data) => setMyData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="payment_list">
      <div className="payment_list_header">
        <h3 className="payment_list_paragraph">Bizning o’quvchilar</h3>
        {/* <img src={Search} alt="serach" className="payment_list_serch" width={24} height={24}/> */}
        <input
          type="text"
          className="payment_list_input"
          placeholder="search..."
        />
      </div>
      <div className="payment_list_box">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">O’quvchi ismi</th>
              <th scope="col">Telefon nomer</th>
              <th scope="col">Yo’nalish</th>
              <th scope="col">O’qituvchisi</th>
              <th scope="col">To’lov vaqti</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {myData.length &&
              myData.map((element, idx) => (
                  <tr key={idx}>
                    <th scope="col">{idx+1}</th>
                    <td>{element.oquvchiIsmi}</td>
                    <td>{element.number}</td>
                    <td>{element.yonalish}</td>
                    <td>{element.oqituvchiIsm}</td>
                    <td>{element.tolovKuni}</td>
                    <td>
                      <img
                        src={Completed}
                        alt="delete"
                        className="table_img"
                        width={20}
                        height={16}
                      />
                    </td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
