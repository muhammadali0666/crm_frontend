import "./payment.css";
import Completed from "../../assets/completed.png";
import { useState, useEffect } from "react";
import Delete from "../../assets/delete.png";
import { ToastContainer, toast } from 'react-toastify';

export const PaymentsList = () => {
  const [myData, setMyData] = useState([]);
  const [searchPaymentors, setSearchPaymentors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/get_paymentors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setMyData(data))
      .catch((err) => console.error(err));
  }, []);

  ///////////////////////////////////////////// search

  const handleSearch = (e) => {
    e.preventDefault();
    let { search } = e.target;
    fetch(`http://localhost:4001/search_paymentors`, {
      method: "GET",
      headers: { 
        search: search.value,
        token: localStorage.getItem("token")
       },
    })
      .then((res) => res.json())
      .then((data) => setSearchPaymentors(data))
      .catch((err) => console.error(err));
    search.value = "";
  };

  const handleDelete = (e) => {
    fetch(`http://localhost:4001/delete_paymentor/${e}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.info(data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      })
      .catch((error) => console.error(error));
      setTimeout(() => {
        location.reload()
      },3500)
  };

  return (
    <div className="payment_list">
       <ToastContainer />
      <div className="payment_list_header">
        <h3 className="payment_list_paragraph">Bizning o’quvchilar</h3>
        {/* <img src={Search} alt="serach" className="payment_list_serch" width={24} height={24}/> */}
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type="text"
            className="payment_list_input"
            placeholder="search..."
            required
            name="search"
          />
        </form>
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
            {searchPaymentors.length !== 0
              ? searchPaymentors.map((element, idx) =>
                  element.length !== 0 ? (
                    <tr key={idx}>
                      <th scope="col">{idx + 1}</th>
                      <td>{element.oquvchiIsmi}</td>
                      <td>{element.number}</td>
                      <td>{element.yonalish}</td>
                      <td>{element.oqituvchiIsmi}</td>
                      <td>{element.tolovKuni}</td>
                      <td>
                        <img
                          src={Delete}
                          alt="delete"
                          className="table_img"
                          width={18}
                          height={18}
                          onClick={() => handleDelete(element.id)}
                        />
                      </td>
                    </tr>
                  ) : null
                )
              : myData.length !== 0 &&
                myData.map((element, idx) =>
                  element.length !== 0 ? (
                    <tr key={idx}>
                      <th scope="col">{idx + 1}</th>
                      <td>{element.oquvchiIsmi}</td>
                      <td>{element.number}</td>
                      <td>{element.yonalish}</td>
                      <td>{element.oqituvchiIsmi}</td>
                      <td>{element.tolovKuni}</td>
                      <td>
                        <img
                          src={Delete}
                          alt="delete"
                          className="table_img"
                          width={18}
                          height={18}
                          onClick={() => handleDelete(element.id)}
                        />
                      </td>
                    </tr>
                  ) : null
                )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
