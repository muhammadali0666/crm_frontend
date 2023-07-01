import "./sawattendance.css";
import Avatar from "../../assets/avatar.png";

export const AttendanceList = () => {
  return (
    <div className="attendance_list">
      <div className="attendance_list_header">
        <h3 className="attendance_list_header_paragraph">Davomat olinadigan guruhni tanlang</h3>
        <input
          type="text"
          className="attendance_list_input"
          placeholder="Guruh nomini kiriting"
        />
      </div>
      <ul className="attendance_list_ul">
        <li className="attendance_list_item">
          <h4 className="attendance_list_card_paragraph">matematika</h4>
          <div className="attendance_list_card_top">
            <img
              src={Avatar}
              alt="avatar"
              className="attendance_list_card_img"
              width={80}
              height={80}
            />
            <span className="attendance_list_card_span">
              <ul className="attendance_list_card_top_list">
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">O'qituvchi:</p>
                  <p className="attendance_list_card_top_text">
                    Muhammadali Shuhratjonov
                  </p>
                </li>
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">Tell raqam:</p>
                  <p className="attendance_list_card_top_text">+998904565025</p>
                </li>
              </ul>
            </span>
          </div>
          <ul className="attendance_list_card_bottom_list">
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars kunlari:</p>
              <p className="attendance_list_card_bottom_text">DU-CHOR-JUMA</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars vaqti:</p>
              <p className="attendance_list_card_bottom_text">14:00-16:00</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">O’quvchilar soni:</p>
              <p className="attendance_list_card_bottom_text">25ta</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">To’lov qilganlar:</p>
              <p className="attendance_list_card_bottom_text">10ta</p>
            </li>
          </ul>
        </li>
        <li className="attendance_list_item">
          <h4 className="attendance_list_card_paragraph">matematika</h4>
          <div className="attendance_list_card_top">
            <img
              src={Avatar}
              alt="avatar"
              className="attendance_list_card_img"
              width={80}
              height={80}
            />
            <span className="attendance_list_card_span">
              <ul className="attendance_list_card_top_list">
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">O'qituvchi:</p>
                  <p className="attendance_list_card_top_text">
                    Muhammadali Shuhratjonov
                  </p>
                </li>
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">Tell raqam:</p>
                  <p className="attendance_list_card_top_text">+998904565025</p>
                </li>
              </ul>
            </span>
          </div>
          <ul className="attendance_list_card_bottom_list">
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars kunlari:</p>
              <p className="attendance_list_card_bottom_text">DU-CHOR-JUMA</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars vaqti:</p>
              <p className="attendance_list_card_bottom_text">14:00-16:00</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">O’quvchilar soni:</p>
              <p className="attendance_list_card_bottom_text">25ta</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">To’lov qilganlar:</p>
              <p className="attendance_list_card_bottom_text">10ta</p>
            </li>
          </ul>
        </li>
        <li className="attendance_list_item">
          <h4 className="attendance_list_card_paragraph">matematika</h4>
          <div className="attendance_list_card_top">
            <img
              src={Avatar}
              alt="avatar"
              className="attendance_list_card_img"
              width={80}
              height={80}
            />
            <span className="attendance_list_card_span">
              <ul className="attendance_list_card_top_list">
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">O'qituvchi:</p>
                  <p className="attendance_list_card_top_text">
                    Muhammadali Shuhratjonov
                  </p>
                </li>
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">Tell raqam:</p>
                  <p className="attendance_list_card_top_text">+998904565025</p>
                </li>
              </ul>
            </span>
          </div>
          <ul className="attendance_list_card_bottom_list">
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars kunlari:</p>
              <p className="attendance_list_card_bottom_text">DU-CHOR-JUMA</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars vaqti:</p>
              <p className="attendance_list_card_bottom_text">14:00-16:00</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">O’quvchilar soni:</p>
              <p className="attendance_list_card_bottom_text">25ta</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">To’lov qilganlar:</p>
              <p className="attendance_list_card_bottom_text">10ta</p>
            </li>
          </ul>
        </li>
        <li className="attendance_list_item">
          <h4 className="attendance_list_card_paragraph">matematika</h4>
          <div className="attendance_list_card_top">
            <img
              src={Avatar}
              alt="avatar"
              className="attendance_list_card_img"
              width={80}
              height={80}
            />
            <span className="attendance_list_card_span">
              <ul className="attendance_list_card_top_list">
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">O'qituvchi:</p>
                  <p className="attendance_list_card_top_text">
                    Muhammadali Shuhratjonov
                  </p>
                </li>
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">Tell raqam:</p>
                  <p className="attendance_list_card_top_text">+998904565025</p>
                </li>
              </ul>
            </span>
          </div>
          <ul className="attendance_list_card_bottom_list">
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars kunlari:</p>
              <p className="attendance_list_card_bottom_text">DU-CHOR-JUMA</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars vaqti:</p>
              <p className="attendance_list_card_bottom_text">14:00-16:00</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">O’quvchilar soni:</p>
              <p className="attendance_list_card_bottom_text">25ta</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">To’lov qilganlar:</p>
              <p className="attendance_list_card_bottom_text">10ta</p>
            </li>
          </ul>
        </li>
        <li className="attendance_list_item">
          <h4 className="attendance_list_card_paragraph">matematika</h4>
          <div className="attendance_list_card_top">
            <img
              src={Avatar}
              alt="avatar"
              className="attendance_list_card_img"
              width={80}
              height={80}
            />
            <span className="attendance_list_card_span">
              <ul className="attendance_list_card_top_list">
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">O'qituvchi:</p>
                  <p className="attendance_list_card_top_text">
                    Muhammadali Shuhratjonov
                  </p>
                </li>
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">Tell raqam:</p>
                  <p className="attendance_list_card_top_text">+998904565025</p>
                </li>
              </ul>
            </span>
          </div>
          <ul className="attendance_list_card_bottom_list">
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars kunlari:</p>
              <p className="attendance_list_card_bottom_text">DU-CHOR-JUMA</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars vaqti:</p>
              <p className="attendance_list_card_bottom_text">14:00-16:00</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">O’quvchilar soni:</p>
              <p className="attendance_list_card_bottom_text">25ta</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">To’lov qilganlar:</p>
              <p className="attendance_list_card_bottom_text">10ta</p>
            </li>
          </ul>
        </li>
        <li className="attendance_list_item">
          <h4 className="attendance_list_card_paragraph">matematika</h4>
          <div className="attendance_list_card_top">
            <img
              src={Avatar}
              alt="avatar"
              className="attendance_list_card_img"
              width={80}
              height={80}
            />
            <span className="attendance_list_card_span">
              <ul className="attendance_list_card_top_list">
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">O'qituvchi:</p>
                  <p className="attendance_list_card_top_text">
                    Muhammadali Shuhratjonov
                  </p>
                </li>
                <li className="attendance_list_card_top_item">
                  <p className="attendance_list_card_top_p">Tell raqam:</p>
                  <p className="attendance_list_card_top_text">+998904565025</p>
                </li>
              </ul>
            </span>
          </div>
          <ul className="attendance_list_card_bottom_list">
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars kunlari:</p>
              <p className="attendance_list_card_bottom_text">DU-CHOR-JUMA</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">Dars vaqti:</p>
              <p className="attendance_list_card_bottom_text">14:00-16:00</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">O’quvchilar soni:</p>
              <p className="attendance_list_card_bottom_text">25ta</p>
            </li>
            <li className="attendance_list_card_bottom_item">
              <p className="attendance_list_card_bottom_p">To’lov qilganlar:</p>
              <p className="attendance_list_card_bottom_text">10ta</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
