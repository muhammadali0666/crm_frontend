import "./addgroup.css";

export const AddGroup = () => {
  return (
    <div className="group">
      <h2 className="group_paragraph">Yangi guruh qo’shish</h2>
      <form className="sudent_form">
        <div className="group_box_wrapper">
          <div className="group_form_box">
            <label htmlFor="ism" className="group_label">
              Guruh yo’nalishi
            <select className="group_select" defaultValue="">
              <option value="ona-tili" className="group_option">
                ona-tili
              </option>
              <option value="adabiyot" className="group_option">
                adabiyot
              </option>
            </select>
            </label>
            <label htmlFor="teacher" className="group_label">
              O’qituvchi
            <input
              type="text"
              className="group_input"
              placeholder="Muhammadali Shuhratjonov"
              id="teacher"
            />
            </label>
          </div>
          <div className="group_form_box">
            <label htmlFor="telefon" className="group_label">
              Dars kunlari
            <select className="group_select" defaultValue="">
              <option value="dushanba" className="group_option">
                dushanba
              </option>
              <option value="seshanba" className="group_option">
                seshanba
              </option>
              <option value="chorshanba" className="group_option">
                chorshanba
              </option>
              <option value="payshanba" className="group_option">
                payshanba
              </option>
              <option value="juma" className="group_option">
                juma
              </option>
              <option value="shanba" className="group_option">
                shanba
              </option>
              <option value="yakshanba" className="group_option">
                yakshanba
              </option>
            </select>
            </label>
            <label htmlFor="Ota-onasi-nomeri" className="group_label">
              O’qituvchi telefon nomeri
            <input
              type="number"
              className="group_input"
              placeholder="+998 90 *** ** **"
              id="Ota-onasi-nomeri"
            />
            </label>
          </div>
          <div className="group_form_box">
            <label className="group_label" htmlFor="time">
              Dars vaqti
            <input
              type="date"
              className="group_input"
              placeholder="Yuklash"
              id="time"
            />
            </label>
            <label htmlFor="rasm" className="group_label">
              O’qituvchi rasmi (3x4)
            <input
              type="file"
              className="group_input group_input_extra"
              placeholder="Yuklash "
              id="rasm"
            />
            </label>
            <button className="group_btn" type="submit">
              Qo’shish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
