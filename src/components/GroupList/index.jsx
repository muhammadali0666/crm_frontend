import "./group.css";
// import Avatar from "../../assets/user.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const GroupList = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/get_groups")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  ////////////////////////////// search

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
    <div className="group_list">
      <div className="group_list_header">
        <h3 className="group_list_header_paragraph">Mavjud guruhlar</h3>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type="text"
            className="group_list_input"
            placeholder="Guruh nomini kiriting"
            required
            name="search"
          />
        </form>
      </div>
      <ul className="group_list_ul">
        {searchData.length !== 0
          ? searchData.map((element, idx) =>
              element.length !== 0 ? (
                <NavLink
                  to={`/group_info/${element.id}`}
                  className="grop_list_item_link"
                >
                  <li key={idx} className="grop_list_item">
                    <h4 className="grup_list_card_paragraph">
                      {element.GroupYonalish}
                    </h4>
                    <div className="grup_list_card_top">
                      <img
                        src={element.oqituvchiRasm}
                        alt="avatar"
                        className="grup_list_card_img"
                        width={80}
                        height={80}
                      />
                      <span className="grup_list_card_span">
                        <ul className="grup_list_card_top_list">
                          <li className="grup_list_card_top_item">
                            <p className="grup_list_card_top_p">O'qituvchi:</p>
                            <p className="grup_list_card_top_text">
                              {element.Oqituvchi}
                            </p>
                          </li>
                          <li className="grup_list_card_top_item">
                            <p className="grup_list_card_top_p">Tell raqam:</p>
                            <p className="grup_list_card_top_text">
                              {element.OqituvchTelNomer}
                            </p>
                          </li>
                        </ul>
                      </span>
                    </div>
                    <ul className="grup_list_card_bottom_list">
                      <li className="grup_list_card_bottom_item">
                        <p className="grup_list_card_bottom_p">Dars kunlari:</p>
                        <p className="grup_list_card_bottom_text">
                          {element.DarsKunlari}
                        </p>
                      </li>
                      <li className="grup_list_card_bottom_item">
                        <p className="grup_list_card_bottom_p">Dars vaqti:</p>
                        <p className="grup_list_card_bottom_text">
                          {element.DarsVaqti}
                        </p>
                      </li>
                      <li className="grup_list_card_bottom_item">
                        <p className="grup_list_card_bottom_p">
                          O’quvchilar soni:
                        </p>
                        <p className="grup_list_card_bottom_text">25ta</p>
                      </li>
                      <li className="grup_list_card_bottom_item">
                        <p className="grup_list_card_bottom_p">
                          To’lov qilganlar:
                        </p>
                        <p className="grup_list_card_bottom_text">10ta</p>
                      </li>
                    </ul>
                  </li>
                </NavLink>
              ) : null
            )
          : data.length &&
            data.map((element, idx) => (
              <NavLink
                to={`/group_info/${element.id}`}
                className="grop_list_item_link"
              >
                <li key={idx} className="grop_list_item">
                  <h4 className="grup_list_card_paragraph">
                    {element.GroupYonalish}
                  </h4>
                  <div className="grup_list_card_top">
                    <img
                      src={element.oqituvchiRasm}
                      alt="avatar"
                      className="grup_list_card_img"
                      width={80}
                      height={80}
                    />
                    <span className="grup_list_card_span">
                      <ul className="grup_list_card_top_list">
                        <li className="grup_list_card_top_item">
                          <p className="grup_list_card_top_p">O'qituvchi:</p>
                          <p className="grup_list_card_top_text">
                            {element.Oqituvchi}
                          </p>
                        </li>
                        <li className="grup_list_card_top_item">
                          <p className="grup_list_card_top_p">Tell raqam:</p>
                          <p className="grup_list_card_top_text">
                            {element.OqituvchTelNomer}
                          </p>
                        </li>
                      </ul>
                    </span>
                  </div>
                  <ul className="grup_list_card_bottom_list">
                    <li className="grup_list_card_bottom_item">
                      <p className="grup_list_card_bottom_p">Dars kunlari:</p>
                      <p className="grup_list_card_bottom_text">
                        {element.DarsKunlari}
                      </p>
                    </li>
                    <li className="grup_list_card_bottom_item">
                      <p className="grup_list_card_bottom_p">Dars vaqti:</p>
                      <p className="grup_list_card_bottom_text">
                        {element.DarsVaqti}
                      </p>
                    </li>
                    <li className="grup_list_card_bottom_item">
                      <p className="grup_list_card_bottom_p">
                        O’quvchilar soni:
                      </p>
                      <p className="grup_list_card_bottom_text">25ta</p>
                    </li>
                    <li className="grup_list_card_bottom_item">
                      <p className="grup_list_card_bottom_p">
                        To’lov qilganlar:
                      </p>
                      <p className="grup_list_card_bottom_text">10ta</p>
                    </li>
                  </ul>
                </li>
              </NavLink>
            ))}
      </ul>
    </div>
  );
};
