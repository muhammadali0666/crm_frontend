import "./addStudent.css";
import { useState, useEffect } from "react";

export const AddStudent = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [yonalish, setYonalish] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentNuber, setParentNumber] = useState("");
  const [img, setImg] = useState(null);
  const [data, setData] = useState([]);

  //////////////////////////////////////////

  const handleImg = (event) => {
    setImg(event.target.files[0]);
  };

  const formData = new FormData();
  formData.append("file", setImg);
  formData.append("upload_preset", "chatImages");

  const handleData = async (e) => {
    e.preventDefault();

    fetch("https://api.cloudinary.com/v1_1/dev4pmh5c/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("http://localhost:4001/add_student", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            picture: data.url,
            name: name,
            phoneNumber: number,
            science: yonalish,
            parentName: parentName,
            parentNumber: parentNuber,
          }),
        })
          .then((res) => res.json())
          .then((data) => alert(data.msg))
          .catch((error) => console.log(error));
        window.location.reload(true);
      });
  };

  /////////////////////////////////////////////////

  useEffect(() => {
    fetch(`http://localhost:4001/get_groups`)
      .then((res) => res.json())
      .then((data1) => setData(data1))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="student">
      <h2 className="student_paragraph">Yangi o’quvchi qo’shish</h2>
      <form className="sudent_form" onSubmit={handleData}>
        <div className="student_box_wrapper">
          <div className="student_form_box">
            <label htmlFor="ism" className="student_label">
              O’quvchi ismi
            </label>
            <input
              type="text"
              className="student_input"
              placeholder="Ism Familiya"
              id="ism"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="Ota-onasi" className="student_label">
              Ota-onasi ismi
            </label>
            <input
              type="text"
              className="student_input"
              placeholder="Ota-onasi ismi"
              id="Ota-onasi"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
            />
          </div>
          <div className="student_form_box">
            <label htmlFor="telefon" className="student_label">
              Telefon raqam
            </label>
            <input
              type="number"
              className="student_input"
              placeholder="+998 90 *** ** **"
              id="telefon"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor="Ota-onasi-nomeri" className="student_label">
              Ota onasi nomeri
            </label>
            <input
              type="number"
              className="student_input"
              placeholder="+998 90 *** ** **"
              id="Ota-onasi-nomeri"
              value={parentNuber}
              onChange={(e) => setParentNumber(e.target.value)}
            />
          </div>
          <div className="student_form_box">
            <label className="student_label" htmlFor="d">
              Yo’nalish
            </label>
            <select
              className="student_select"
              onChange={(e) => setYonalish(e.target.value)}
              defaultValue=""
            >
              {data.length &&
                data.map((element, idx) => (
                  <option
                    value={element.GroupYonalish}
                    className="student_option"
                    key={idx}
                  >
                    {element.GroupYonalish}
                  </option>
                ))}
            </select>
            <label htmlFor="rasm" className="student_label">
              Rasm 3x4
            </label>
            <input
              type="file"
              className="student_input student_input_extra"
              placeholder="Yuklash "
              id="rasm"
              onChange={(e) => handleImg(e)}
            />
            <button className="student_btn" type="submit">
              Qo’shish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
