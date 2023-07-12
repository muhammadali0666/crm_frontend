import "./sawattendance.css";
// import Avatar from "../../assets/avatar.png";
import { useState, useEffect } from "react";

export const AttendanceList = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/get_groups")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  //////////////////////////////////////////////////// saerch

  const handleSearch = (e) => {
    e.preventDefault();
    let { search } = e.target;
    fetch(`http://localhost:4001/search_groups`, {
      method: "GET",
      headers: { search: search.value },
    })
      .then((res) => res.json())
      .then((data) => setSearchData(data))
      .catch((err) => console.error(err));
    search.value = "";
  };

  return (
    <div className="attendance_list">
      <div className="attendance_list_header">
        <h3 className="attendance_list_header_paragraph">
          Davomat olinadigan guruhni tanlang
        </h3>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type="text"
            className="attendance_list_input"
            placeholder="Guruh nomini kiriting"
            required
            name="search"
          />
        </form>
      </div>
      <ul className="attendance_list_ul">
        {searchData.length !== 0
          ? searchData.map((element, idx) =>
              element.length !== 0 ? (
                <li className="attendance_list_item" key={idx}>
                  <h4 className="attendance_list_card_paragraph">
                    {element.GroupYonalish}
                  </h4>
                  <div className="attendance_list_card_top">
                    <img
                      src={element.oqituvchiRasm}
                      alt="avatar"
                      className="attendance_list_card_img"
                      width={60}
                      height={60}
                    />
                    <span className="attendance_list_card_span">
                      <ul className="attendance_list_card_top_list">
                        <li className="attendance_list_card_top_item">
                          <p className="attendance_list_card_top_p">
                            O'qituvchi:
                          </p>
                          <p className="attendance_list_card_top_text">
                            {element.Oqituvchi}
                          </p>
                        </li>
                        <li className="attendance_list_card_top_item">
                          <p className="attendance_list_card_top_p">
                            Tell raqam:
                          </p>
                          <p className="attendance_list_card_top_text">
                            {element.OqituvchTelNomer}
                          </p>
                        </li>
                      </ul>
                    </span>
                  </div>
                  <ul className="attendance_list_card_bottom_list">
                    <li className="attendance_list_card_bottom_item">
                      <p className="attendance_list_card_bottom_p">
                        Dars kunlari:
                      </p>
                      <p className="attendance_list_card_bottom_text">
                        {element.DarsKunlari}
                      </p>
                    </li>
                    <li className="attendance_list_card_bottom_item">
                      <p className="attendance_list_card_bottom_p">
                        Dars vaqti:
                      </p>
                      <p className="attendance_list_card_bottom_text">
                        {element.DarsVaqti}
                      </p>
                    </li>
                    <li className="attendance_list_card_bottom_item">
                      <p className="attendance_list_card_bottom_p">
                        O’quvchilar soni:
                      </p>
                      <p className="attendance_list_card_bottom_text">25ta</p>
                    </li>
                    <li className="attendance_list_card_bottom_item">
                      <p className="attendance_list_card_bottom_p">
                        To’lov qilganlar:
                      </p>
                      <p className="attendance_list_card_bottom_text">10ta</p>
                    </li>
                  </ul>
                </li>
              ) : null
            )
          : data.length &&
            data.map((element, idx) =>
              element.length !== 0 ? (
                <li className="attendance_list_item" key={idx}>
                  <h4 className="attendance_list_card_paragraph">
                    {element.GroupYonalish}
                  </h4>
                  <div className="attendance_list_card_top">
                    <img
                      src={element.oqituvchiRasm}
                      alt="avatar"
                      className="attendance_list_card_img"
                      width={60}
                      height={60}
                    />
                    <span className="attendance_list_card_span">
                      <ul className="attendance_list_card_top_list">
                        <li className="attendance_list_card_top_item">
                          <p className="attendance_list_card_top_p">
                            O'qituvchi:
                          </p>
                          <p className="attendance_list_card_top_text">
                            {element.Oqituvchi}
                          </p>
                        </li>
                        <li className="attendance_list_card_top_item">
                          <p className="attendance_list_card_top_p">
                            Tell raqam:
                          </p>
                          <p className="attendance_list_card_top_text">
                            {element.OqituvchTelNomer}
                          </p>
                        </li>
                      </ul>
                    </span>
                  </div>
                  <ul className="attendance_list_card_bottom_list">
                    <li className="attendance_list_card_bottom_item">
                      <p className="attendance_list_card_bottom_p">
                        Dars kunlari:
                      </p>
                      <p className="attendance_list_card_bottom_text">
                        {element.DarsKunlari}
                      </p>
                    </li>
                    <li className="attendance_list_card_bottom_item">
                      <p className="attendance_list_card_bottom_p">
                        Dars vaqti:
                      </p>
                      <p className="attendance_list_card_bottom_text">
                        {element.DarsVaqti}
                      </p>
                    </li>
                    <li className="attendance_list_card_bottom_item">
                      <p className="attendance_list_card_bottom_p">
                        O’quvchilar soni:
                      </p>
                      <p className="attendance_list_card_bottom_text">25ta</p>
                    </li>
                    <li className="attendance_list_card_bottom_item">
                      <p className="attendance_list_card_bottom_p">
                        To’lov qilganlar:
                      </p>
                      <p className="attendance_list_card_bottom_text">10ta</p>
                    </li>
                  </ul>
                </li>
              ) : null
            )}
      </ul>
    </div>
  );
};
