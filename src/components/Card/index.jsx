import "./card.css";
import Icon from "../../assets/icon.png";

export const Card = () => {
  return (
    <div className="card_wrapper">
      <div className="card_wrapper_inner">
        <div className="card">
          <div className="card_one">
            <h3 className="card_paragraph">Jami o’quvchilar soni:</h3>
            <p className="card_text">255 ta</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="card1 card">
          <div className="card_one">
            <h3 className="card_paragraph">O’qituvchilar soni:</h3>
            <p className="card_text">20 ta</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="card_wrapper_inner">
        <div className="card">
          <div className="card_one">
            <h3 className="card_paragraph">Shu oy tark etganlar:</h3>
            <p className="card_text">25 ta</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="card1 card">
          <div className="card_one">
            <h3 className="card_paragraph">Jami guruhlar soni</h3>
            <p className="card_text">20 ta</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
