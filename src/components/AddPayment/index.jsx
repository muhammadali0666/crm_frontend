import "./addpayment.css";

export const AddPayment = () => {
  return (
    <div className="payment">
      <h2 className="payment_paragraph">To’lov qilish</h2>
      <form className="sudent_form">
        <div className="payment_box_wrapper">
          <div className="payment_form_box">
            <label htmlFor="ism" className="payment_label">
            O’quvchi ismi
            </label>
            <input
              type="text"
              className="payment_input"
              placeholder="Muhammadali Shuhratjonov"
              id="ism"
            />
            <label htmlFor="teacher" className="payment_label">
              O’qituvchi ismi
            </label>
            <input
              type="text"
              className="payment_input"
              placeholder="Muhammadali Shuhratjonov"
              id="teacher"
            />
          </div>
          <div className="payment_form_box">
            <label htmlFor="telefon" className="payment_label">
            Yo’nalish
            </label>
            <select className="payment_select" defaultValue="">
              <option value="dushanba" className="payment_option">
                matematika
              </option>
              <option value="seshanba" className="payment_option">
                fizika
              </option>
            </select>
            <label htmlFor="date" className="payment_label">
            To’lov qilayotgan kun
            </label>
            <input
              type="date"
              className="payment_input"
              placeholder="date"
              id="date"
            />
          </div>
          <div className="payment_form_box">
            <label className="payment_label" htmlFor="time">
            Telefon raqam
            </label>
            <input
              type="number"
              className="payment_input"
              placeholder="+998 90 *** ** **"
              id="time"
            />
            <button className="payment_btn" type="submit">
              Qo’shish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
