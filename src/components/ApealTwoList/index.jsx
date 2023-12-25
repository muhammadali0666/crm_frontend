import "./apealtwolist.css";
import Delete from "../../assets/delete.png";
import { useState, useEffect } from "react";

export const ApealTwoList = () => {
  const [data, setData] = useState([]);
  const nowDate = new Date();

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
      .then((data) => alert(data.msg))
      .catch((error) => console.error(error));
    window.location.reload();
  };

  return (
    <div className="apeal_list">
      <div className="apeal_list_header">
        <h3 className="apeal_list_paragraph">
          {nowDate.getDate()}.{nowDate.getMonth() + 1}.{nowDate.getFullYear()}{" "}
          kungi murojatlar
        </h3>
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
                Date
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
                      onClick={() => handleDelete(element.id)}
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
