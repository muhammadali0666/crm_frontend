import "./apeal.css";
import Delete from "../../assets/delete.png";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApealList = () => {
  const [data, setData] = useState([]);

  const notify = () => toast("Wow so easy!");

  useEffect(() => {
    fetch("http://localhost:4001/get_telegram_message", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleDelete = (e) => {
    fetch(`http://localhost:4001/delete_telegram_message/${e}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.msg))
      .catch((error) => console.error(error));
    window.location.reload();
    toast.warn('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  return (
    <div className="apeal_list">
      <div className="apeal_list_header">
        <h3 className="apeal_list_paragraph">Barcha murojatlar</h3>
        {/* <img src={Search} alt="serach" className="apeal_list_serch" width={24} height={24}/> */}
        {/* <input
          type="text"
          className="apeal_list_input"
          placeholder="search..."
          
        /> */}
      </div>
      <div className="apeal_list_box">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="appeal_one">
                №
              </th>
              <th scope="col" className="thead_th">
                O’quvchi ismi
              </th>
              <th scope="col" className="thead_th">
                Username
              </th>
              <th scope="col" className="thead_th">
                Date and Time
              </th>
              <th className="long_text" scope="col">
                Text
              </th>
              <th scope="col" className="appeal_one">
                #
              </th>
            </tr>
          </thead>
          <tbody className="tbody">
            {data.length &&
              data.map((element, idx) => (
                <tr className="appeal_tr">
                  <th className="appeal_one" scope="col">
                    {idx + 1}
                  </th>
                  <td className="appeal_td">{element.firstName}</td>
                  <td className="appeal_td">@{element.userName}</td>
                  <td className="appeal_td">
                    {element.date} | {element.time}
                  </td>
                  <td className="long_text">{element.text}</td>
                  <td className="appeal_one">
                    <img
                      src={Delete}
                      alt="delete"
                      className="table_img"
                      width={18}
                      height={18}
                      onClick={() => {handleDelete(element.id)
                        toast.info("TASK DELETED", {
                          position: "bottom-left",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                          })
                      }}
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
