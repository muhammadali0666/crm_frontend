import "./addpayment.css";
import { useState, useEffect } from "react";

export const AddPayment = () => {
  const [oquvchiIsm, setOquvchiIsm] = useState("");
  const [oqituvchiIsm, setOqituvchiIsm] = useState("");
  const [yonalish, setYonalish] = useState("");
  const [tolovKun, setTolovKun] = useState("");
  const [nomer, setNomer] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/get_groups`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data1) => setData(data1))
      .catch((err) => console.error(err));
  }, []);

  const handlePayment = () => {
    fetch(`http://localhost:4001/add_paymentor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        oquvchiIsmi: oquvchiIsm,
        yonalish: yonalish,
        number: nomer,
        oqituvchiIsmi: oqituvchiIsm,
        tolovKuni: tolovKun,
      }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.msg))
      .catch((error) => console.error(error));
    window.location.reload();
  };

  return (
    <div className="payment">
      <h2 className="payment_paragraph">To’lov qilish</h2>
      <form className="sudent_form" onSubmit={handlePayment}>
        <div className="payment_box_wrapper">
          <div className="payment_form_box">
            <label htmlFor="ism" className="payment_label">
              O’quvchi ismi
              <input
                type="text"
                className="payment_input"
                placeholder="O’quvchi ismi"
                id="ism"
                value={oquvchiIsm}
                onChange={(e) => setOquvchiIsm(e.target.value)}
              />
            </label>
            <label htmlFor="teacher" className="payment_label">
              O’qituvchi ismi
              <input
                type="text"
                className="payment_input"
                placeholder="O’qituvchi ismi"
                id="teacher"
                value={oqituvchiIsm}
                onChange={(e) => setOqituvchiIsm(e.target.value)}
              />
            </label>
          </div>
          <div className="payment_form_box">
            <label htmlFor="telefon" className="payment_label">
              Yo’nalish
              <select
                className="payment_select"
                onChange={(e) => setYonalish(e.target.value)}
                defaultValue=""
              >
                {data.length &&
                  data.map((element, idx) => (
                    <option key={idx} value={element.GroupYonalish} className="payment_option">
                      {element.GroupYonalish}
                    </option>
                  ))}
              </select>
            </label>
            <label htmlFor="date" className="payment_label">
              To’lov qilayotgan kun
              <input
                type="date"
                className="payment_input"
                placeholder="date"
                id="date"
                value={tolovKun}
                onChange={(e) => setTolovKun(e.target.value)}
              />
            </label>
          </div>
          <div className="payment_form_box">
            <label className="payment_label" htmlFor="time">
              Telefon raqam
              <input
                type="number"
                className="payment_input"
                placeholder="+998 90 *** ** **"
                id="time"
                value={nomer}
                onChange={(e) => setNomer(e.target.value)}
              />
            </label>
            <button className="payment_btn" type="submit">
              Qo’shish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
