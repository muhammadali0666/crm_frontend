import "./davomat.css";
// import Avatar from "../../assets/avatar.png";
import Done from "../../assets/done.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UnPayed from "../../assets/close.png";

export const DavomatInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const arr = [];

  useEffect(() => {
    fetch(`http://localhost:4001/get_full_info_group/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data1) => setData(data1))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4001/all_students_info_group/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setData1(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="group_info">
      <span className="span">
        {data1.length &&
          data1.map(
            (element, idx) =>
              element.pay === true && (
                <p style={{ display: "none" }}>{arr.push(idx + 1)}</p>
              ) && <p>{arr.length}</p>
          )}
      </span>
      <div className="group_info_inner">
        <h2 className="group_info_paragraph" style={{ display: "flex" }}>
          {data.length &&
            data.map((element) => <p>{element.GroupYonalish} </p>)}{" "}
          -guruhi ro’yhati
        </h2>
        <div className="group_info_wrapper">
          <div className="group_info_left">
            {data.length &&
              data.map((element, idx) => (
                <div className="group_info_list_item" key={idx}>
                  <h4 className="group_info_list_card_paragraph">
                    {element.GroupYonalish}
                  </h4>
                  <div className="group_info_list_card_top">
                    <img
                      src={element.oqituvchiRasm}
                      alt="avatar"
                      className="group_info_list_card_img"
                      width={80}
                      height={80}
                    />
                    <span className="group_info_list_card_span">
                      <ul className="group_info_list_card_top_list">
                        <li className="group_info_list_card_top_item">
                          <p className="group_info_list_card_top_p">
                            O'qituvchi:
                          </p>
                          <p className="group_info_list_card_top_text">
                            {element.Oqituvchi}
                          </p>
                        </li>
                        <li className="group_info_list_card_top_item">
                          <p className="group_info_list_card_top_p">
                            Tell raqam:
                          </p>
                          <p className="group_info_list_card_top_text">
                            {element.OqituvchTelNomer}
                          </p>
                        </li>
                      </ul>
                    </span>
                  </div>
                  <ul className="group_info_list_card_bottom_list">
                    <li className="group_info_list_card_bottom_item">
                      <p className="group_info_list_card_bottom_p">
                        Dars kunlari:
                      </p>
                      <p className="group_info_list_card_bottom_text">
                        {element.DarsKunlari}
                      </p>
                    </li>
                    <li className="group_info_list_card_bottom_item">
                      <p className="group_info_list_card_bottom_p">
                        Dars vaqti:
                      </p>
                      <p className="group_info_list_card_bottom_text">
                        {element.DarsVaqti}
                      </p>
                    </li>
                    <li className="group_info_list_card_bottom_item">
                      <p className="group_info_list_card_bottom_p">
                        O’quvchilar soni:
                      </p>
                      <p className="group_info_list_card_bottom_text">
                        {data1.length} ta
                      </p>
                    </li>
                    <li key={idx} className="group_info_list_card_bottom_item">
                      <p className="group_info_list_card_bottom_p">
                        To'lov qilganlar soni:
                      </p>
                      <p>{arr.length} ta</p>
                    </li>
                  </ul>
                </div>
              ))}
            <h4 className="gorup_info_left_paragraph">Darsga kelmaganlar</h4>
            {/* <ul className="gorup_info_left_list">
              {data1.length &&
                data1.map(
                  (element, idx) =>
                    element.pay === true && (
                      <li key={idx} className="gorup_info_left_item">
                        <p>{element.length}</p>
                        <p className="gorup_info_left_item">
                          {idx + 1}. {element.name}
                        </p>
                      </li>
                    )
                )}
            </ul> */}
          </div>
          <div className="group_info_right">
            <div className="group_info_right_box">
              <ul className="group_info_right_list">
                <li className="group_info_right_item group_info_right_item_extra">
                  <p className="group_info_right_header_p group_info_right_header_p_extra">
                    №
                  </p>
                  <p className="group_info_right_header_p group_info_right_header_p_extra">
                    O’quvchi ismi
                  </p>
                  {/* <p className="group_info_right_header_p group_info_right_header_p_extra">
                    Davomat
                  </p> */}
                </li>
                {data1.length &&
                  data1.map((element, idx) => (
                    <div key={idx}>
                      <li className="group_info_right_item">
                        <p className="group_info_right_header_p">{idx + 1}</p>
                        <p className="group_info_right_header_p">
                          {element.name}
                        </p>
                        {/* <img
                          src={element.pay === true ? Done : UnPayed}
                          alt="img"
                          className="group_info_right_img"
                          width={30}
                          height={30}
                        /> */}
                      </li>
                      <hr />
                    </div>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
