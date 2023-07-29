import "./addgroup.css";
import { useEffect, useState } from "react";

export const AddGroup = () => {
  const [fan, setFan] = useState("");
  const [ism, setIsm] = useState("");
  const [kun, setKun] = useState("");
  const [nomer, setNomer] = useState("");
  const [vaqt, setVaqt] = useState("");
  const [rasm, setRasm] = useState(null);

  //////////////////////////////////////////

  const handleImg = (event) => {
    setRasm(event.target.files[0]);
  };

  const formData = new FormData();
  formData.append("file", rasm);
  formData.append("upload_preset", "chatImages");

  const handleData = async (e) => {
    e.preventDefault();

    fetch("https://api.cloudinary.com/v1_1/dev4pmh5c/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        {
          fetch("http://localhost:4001/add_group", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem("token"),
            },
            body: JSON.stringify({
              oqituvchiRasm: data.url,
              GroupYonalish: fan,
              DarsKunlari: kun,
              DarsVaqti: vaqt,
              Oqituvchi: ism,
              OqituvchTelNomer: nomer,
            }),
          })
            .then((res) => res.json())
            .then((data) => alert(data.msg))
            .catch((error) => console.log(error));
          window.location.reload(true);
        }
      });
  };

  return (
    <div className="group">
      <h2 className="group_paragraph">Yangi guruh qo’shish</h2>
      <form className="sudent_form" onSubmit={handleData}>
        <div className="group_box_wrapper">
          <div className="group_form_box">
            <label htmlFor="ism" className="group_label">
              Guruh yo’nalishi
              <input
                type="text"
                className="group_input"
                placeholder="yangi guruh"
                id="teacher"
                value={fan}
                onChange={(e) => setFan(e.target.value)}
              />
            </label>
            <label htmlFor="teacher" className="group_label">
              O’qituvchi
              <input
                type="text"
                className="group_input"
                placeholder="O'qituvchi ismi"
                id="teacher"
                value={ism}
                onChange={(e) => setIsm(e.target.value)}
              />
            </label>
          </div>
          <div className="group_form_box">
            <label htmlFor="telefon" className="group_label">
              Dars kunlari
              <select
                className="group_select"
                defaultValue=""
                onChange={(e) => setKun(e.target.value)}
              >
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
                value={nomer}
                onChange={(e) => setNomer(e.target.value)}
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
                value={vaqt}
                onChange={(e) => setVaqt(e.target.value)}
              />
            </label>
            <label htmlFor="rasm" className="group_label">
              O’qituvchi rasmi (3x4)
              <input
                type="file"
                className="group_input group_input_extra"
                placeholder="Yuklash "
                id="rasm"
                onChange={(e) => handleImg(e)}
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
